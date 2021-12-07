import { withTranslation } from 'i18n'
import DashboardHome from 'Layouts/ARLife/pages/Dashboard/Main'
import PropTypes from 'prop-types'

const Dashboard = ({ currentPage }) => {
  return <DashboardHome />
}

Dashboard.getInitialProps = async (ctx) => {
  //   const page = ctx.pathname.split('/')[1]

  return {
    // currentPage: page,
    namespacesRequired: ['common', 'dashboard'],
  }
}

Dashboard.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common', 'dashboard')(Dashboard)
