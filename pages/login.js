import React from 'react'
import LoginPage from 'Layouts/ARLife/pages/Login'
import { withTranslation } from 'i18n'
import PropTypes from 'prop-types'

const Login = () => {
  return <LoginPage />
}

Login.propTypes = {
  t: PropTypes.func.isRequired,
}

Login.getInitialProps = async () => ({
  namespacesRequired: ['auth', 'common'],
})

export default withTranslation('auth', 'common')(Login)
