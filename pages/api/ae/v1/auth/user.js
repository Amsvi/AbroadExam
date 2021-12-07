import nc from 'next-connect'
import { connectToDatabase } from 'util/mongodb'
import bcrypt from 'bcrypt'
import { generateFourDigit as generate4digitsCode } from 'util/helpers'
import { sendEmailNodeMailer } from 'services/sendEmail'
import { sendSMSKavenegar } from 'services/sendMessage'

const handler = nc()
const rounds = 10

handler
  .post(async (req, res) => {
    const { email, mobile, password } = req.body
    console.log('working on server')
    // Check all required data are available
    if ((email !== undefined && mobile !== undefined) || password.length < 8) {
      return res
        .status(422)
        .json({ success: false, message: 'Missing required parameter' })
    }

    let user = {}
    for (const [key, value] of Object.entries(req.body)) {
      if (key !== undefined) {
        user[key] = value
      }
    }

    // Connect to the database
    const { client } = await connectToDatabase()
    const isConnected = await client.isConnected()
    if (!isConnected) {
      console.log('connecting to the database failed')
      return res
        .status(500)
        .json({ success: false, message: 'Could not connect to the database' })
    }

    // Check for duplication

    // check duplicates based on provided data
    let toCheck = []
    if (user.email) toCheck.push({ email: user.email })
    if (user.mobile) toCheck.push({ mobile: user.mobile })

    let isDuplicate = await client.db().collection('users').countDocuments({
      $or: toCheck,
    })

    if (isDuplicate) {
      console.log('duplicate user')
      return res.status(409).json({ success: false, message: 'Duplicate user' })
    }
    // Hash the password
    bcrypt.hash(password, rounds, async (err, hash) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: 'Could not encrypt the password' })
      }
      user.password = hash
      user.active = false
      user.register_step = 1
      // Save the user
      const r = await client.db().collection('users').insertOne(user)
      if (r.insertedCount !== 1) {
        return res.status(500).json({
          success: false,
          message: 'Error saving user to the database',
        })
      } else {
        // Generate a verification code
        var verificationCode = generate4digitsCode()

        // add verification code to it's collection (code, expire, user_id)
        const c = await client.db().collection('confirm_codes').insert({
          createdAt: new Date(),
          user_id: r.insertedId,
          code: verificationCode,
        })

        // Send verification (email/sms)
        if (user.mobile) {
          // Send verification using kavenegar
          sendSMSKavenegar(
            '09901348680',
            verificationCode,
            'aeverifyregister',
            (result) => {
              if (result.success) {
                console.log('success')
              } else {
                console.log('failed')
              }
            }
          )
        } else {
          // Send verification code by email
          sendEmailNodeMailer(user.email, verificationCode, (result) => {
            if (!result.success) {
              console.log('failed')
            }
            console.log('Success')
          })
        }
        return res.json({
          success: true,
          id: r.insertedId,
          message: 'Registration success, confirm code was sent',
        })
      }
    })
  })
  .get((req, res) => {
    return res
      .status(405)
      .json({ success: false, message: 'method not acceptable' })
  })

export default handler
