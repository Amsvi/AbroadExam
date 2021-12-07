import nc from 'next-connect'
const handler = nc()
const Formidable = require('formidable')
import { connectToDatabase } from 'util/mongodb'
const sharp = require('sharp')
import { v4 as uuidv4 } from 'uuid'

export const config = {
  api: {
    bodyParser: false,
  },
}

const uploadForm = (next) => (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log('processing request using formidable...')
      const form = new Formidable.IncomingForm({
        multiples: true,
        keepExtensions: true,
      })
      form.once('error', console.error)
      form
        .on('fileBegin', (name, avatar) => {
          console.log('start uploading: ', avatar.name)
        })
        .on('aborted', () => console.log('Aborted...'))
      form.once('end', () => {
        console.log('Done!')
      })
      await form.parse(req, async (err, fields, files) => {
        if (err) {
          console.log('Error parsing form')
          throw String(JSON.stringify(err, null, 2))
        }

        if (files.avatar !== undefined) {
          console.log('Avatar is available')
          req.uuid = uuidv4()
          await sharp(files.avatar.path)
            .toFormat('png')
            .resize(128, 128, { fit: 'cover' })
            .toFile(`./public/temp/${req.uuid}.png`, function (err) {
              console.log(err)
            })
        } else {
          req.uuid = ''
          console.log('Avatar not present')
        }

        req.form = { fields, files }
        return resolve(next(req, res))
      })
    } catch (error) {
      req.uuid = ''
      return resolve(next(req, res))
    }
  })
}

handler
  .post(async (req, res, next) => {
    const { client } = await connectToDatabase()
    const isConnected = await client.isConnected()
    const data = req.form.fields
    if (isConnected) {
      // Validating data
      //TODO: validate email and phone on server
      if (data.email === '' && data.mobile === '') {
        return res.status(400).json({
          success: false,
          message: 'Either provide an email address or a phone number',
        })
      }
      let isDuplicate = await client
        .db()
        .collection('users')
        .countDocuments({
          $or: [
            { username: data.username },
            { email: data.email },
            { mobile: data.mobile },
          ],
        })

      if (isDuplicate) {
        return res
          .status(409)
          .json({ success: false, messgage: 'duplicate user' })
      }

      //TODO: values must be validated again on server
      //TODO: encrypt password before adding
      client
        .db()
        .collection('users')
        .insertOne({
          firstname: data.firstname,
          lastname: data.lastname,
          username: data.username,
          password: data.password,
          email: data.email,
          mobile: data.mobile,
          avatar: req.uuid,
          active: false,
          sex: null,
          birth_date: null,
          role: 3,
          pinned: false,
        })
        .then((result) => {
          return res
            .status(200)
            .json({ success: true, message: 'user created' })
        })
        .catch((err) => {
          return res
            .status(500)
            .json({ success: false, message: 'Error creating user' })
        })
    } else {
      return res
        .status(500)
        .json({ success: false, message: 'Connection to database failed' })
    }
  })
  .get((req, res) => {
    return res
      .status(405)
      .json({ success: false, message: 'method not acceptable' })
  })

export default uploadForm(handler)
