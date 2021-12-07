import { withTranslation } from 'i18n'
import dynamic from 'next/dynamic'
// import { connectToDatabase } from 'util/mongodb'
import PropTypes from 'prop-types'

const HomePage = dynamic(() =>
  import(`Layouts/${process.env.APP_PROJECT}/pages/Home`)
)
const Home = (props) => {
  // client-side forwarding
  //   const router = useRouter()
  //   if (typeof window !== 'undefined') {
  //     router.push('/en')
  //     return
  //   }

  return <HomePage {...props} />
}
// export async function getServerSideProps(context) {
//   const { client } = await connectToDatabase()
//   const isConnected = await client.isConnected() // Returns true or false
//   isConnected &&
//     client
//       .db()
//       .collection('users')
//       .insertOne({ name: 'ario', password: 'shabneshin' })
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err))
//   return {
//     props: { isConnected },
//   }
// }
Home.getInitialProps = async (ctx) => {
  return {
    namespacesRequired: ['common', 'footer', 'homepage'],
  }
}

Home.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common', 'footer', 'homepage')(Home)
