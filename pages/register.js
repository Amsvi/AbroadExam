import { withTranslation } from 'i18n'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'

const RegisterPage = dynamic(() =>
  import(`Layouts/${process.env.APP_PROJECT}/pages/RegisterPage`)
)
const Register = (props) => {
  return <RegisterPage {...props} />
}

Register.getInitialProps = async () => {
  return {
    namespacesRequired: ['common', 'auth'],
  }
}

Register.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common', 'auth')(Register)
