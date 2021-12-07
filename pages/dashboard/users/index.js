import { withTranslation } from 'i18n'
import UsersPage from 'Layouts/ARLife/pages/Dashboard/UsersPage'
import PropTypes from 'prop-types'

const Users = (props) => {
  return <UsersPage />
}

Users.getInitialProps = async (ctx) => {
  return {
    namespacesRequired: ['common', 'auth'],
  }
}

Users.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common', 'auth')(Users)
