import nextConnect from 'next-connect'
import { connectToDatabase } from 'util/mongodb'

const handler = nextConnect()

handler.post(async (req, res) => {
  const { count } = req.body
  const { client } = await connectToDatabase()
  const isConnected = await client.isConnected()
  isConnected &&
    client
      .db()
      .collection('users')
      .find(
        { pinned: true },
        {
          projection: {
            firstname: 1,
            lastname: 1,
            username: 1,
            avatar: 1,
            email: 1,
            mobile: 1,
          },
        }
      )
      .limit(count)
      .map(function (u) {
        return {
          _id: u._id,
          firstname: u.firstname,
          lastname: u.lastname,
          username: u.username,
          email: u.email,
          mobile: u.mobile,
          avatar: u.avatar,
          created: u._id.getTimestamp(),
        }
      })
      .toArray(function (err, result) {
        if (err) throw err
        return res.status(200).json({ users: result })
      })
})

handler.get(async (req, res) => res.json({ method: 'GET' }))

export default handler
