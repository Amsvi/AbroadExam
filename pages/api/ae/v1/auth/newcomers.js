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
        {},
        { projection: { firstname: 1, lastname: 1, username: 1, avatar: 1 } }
      )
      .sort({ _id: -1 })
      .limit(count)
      .toArray(function (err, result) {
        if (err) throw err
        return res.status(200).json({ users: result })
      })
})

handler.get(async (req, res) => res.json({ method: 'GET' }))

export default handler
