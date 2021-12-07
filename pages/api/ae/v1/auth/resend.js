import nc from 'next-connect'
import { sendEmailNodeMailer } from 'services/sendEmail'
import { sendSMSKavenegar } from 'services/sendMessage'
import { generateFourDigit } from 'util/helpers'
import { connectToDatabase } from 'util/mongodb'
var mongo = require('mongodb')

const handler = nc()

//TODO: prevent multiple requests by providing an id for kavenegar
handler.post(async (req, res) => {
  // if id presents resend verification code
  const id = req.body.id
  console.log(id)

  if (!id) {
    return res
      .status(404)
      .json({ success: false, message: 'User id is not available' })
  }

  // connect to the database
  const { client } = await connectToDatabase()
  const isConnected = await client.isConnected()
  if (!isConnected) {
    return res
      .status(500)
      .json({ success: false, message: 'Could not connect to the database' })
  }

  // find user by id
  var o_id = new mongo.ObjectID(id)
  let user = await client.db().collection('users').findOne({ _id: o_id })

  // user not found
  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' })
  }

  // add record to the database
  let code = generateFourDigit()
  const c = await client.db().collection('confirm_codes').insertOne({
    createdAt: new Date(),
    user_id: id,
    code: code,
  })

  if (c.insertedCount === 0) {
    return res.status(500).json({
      success: false,
      message: 'Verification code could not be added to db',
    })
  }

  // send verification code
  console.log(`sending ${code} to ${user.email}`)
  if (user.email !== undefined) {
    sendEmailNodeMailer(user.email, code, (result) => {
      if (!result.success) {
        console.log('failed')
      } else {
        console.log('Success')
      }
    })
  } else {
    sendSMSKavenegar('09901348680', code, 'aeverifyregister', (result) => {
      if (result.success) {
        console.log('sms sent')
      } else {
        console.log('sms not sent')
      }
    })
  }
  res.json({
    success: true,
    message: 'Confirmation code sent',
  })
})
handler.get((req, res) => {
  return res
    .status(405)
    .json({ success: false, message: 'method not acceptable' })
})

export default handler
