import nextConnect from 'next-connect'
import { connectToDatabase } from 'util/mongodb'

const handler = nextConnect()

//TODO Check for permission
handler.post(async (req, res) => {
  const { client } = await connectToDatabase()
  const isConnected = await client.isConnected()
  if (isConnected) {
    var totalUsers = await client.db().collection('users').count()
    return res.status(200).json({ users: totalUsers })
  }
})

handler.get(async (req, res) => res.json({ method: 'GET' }))

export default handler
