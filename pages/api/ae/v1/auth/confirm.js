import nc from 'next-connect'
import { connectToDatabase } from 'util/mongodb'
var mongo = require('mongodb')

// This handler receives a 4 digit verification code and checks if it is
// not expired by looking inside confirm_codes database (auto expires codes within 1 hour)
// if it is available activates the corresponding user

const handler = nc()

handler.post(async (req, res) => {
  let confirm = req.body.confirm
  console.log(confirm)

  // Check if confirm code exists
  if (!confirm) {
    console.log('confirmation code is not available')
    return res
      .status(422)
      .json({ success: false, message: 'Missing confirmation code' })
  }

  // Check if confirm code is valid
  if (confirm.length !== 4) {
    console.log('confirmation code is not acceptable')
    return res
      .status(415)
      .json({ success: false, message: 'confirmation code is in wrong format' })
  }

  // Check if its a number
  confirm = parseInt(confirm)

  // connect to the database
  const { client } = await connectToDatabase()
  const isConnected = await client.isConnected()
  if (!isConnected) {
    console.log('could not connect to the db')
    return res
      .status(500)
      .json({ success: false, message: 'Could not connect to the database' })
  }

  // find code in database
  let code = await client
    .db()
    .collection('confirm_codes')
    .findOne({ code: confirm })

  console.log(code)
  // code is wrong or expired
  if (!code) {
    console.log('confirm code was expired')
    return res
      .status(404)
      .json({ success: false, message: 'Confirm code is wrong or expired' })
  }

  var o_id = new mongo.ObjectID(code.user_id)
  // activate user
  let update = await client
    .db()
    .collection('users')
    .updateOne(
      { _id: o_id }, // Filter
      { $set: { active: true, register_step: 2 } } // Update
    )

  console.log(
    `found user? ${update.matchedCount}, updated user? ${update.modifiedCount}`
  )

  if (update.matchedCount === 0) {
    return res
      .status(404)
      .json({ success: false, message: 'corresponding user not found' })
  }

  if (update.modifiedCount === 0) {
    return res
      .status(500)
      .json({ success: false, message: 'unable to activate account' })
  }

  return res.json({ success: true, message: 'user activated successfully' })
})

handler.get((req, res) => {
  return res
    .status(405)
    .json({ success: false, message: 'method not acceptable' })
})

export default handler
