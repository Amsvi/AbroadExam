import { withTranslation } from 'i18n'
import ProjectsPage from 'Layouts/ARLife/pages/Dashboard/ProjectsPage'
import PropTypes from 'prop-types'

const Projects = (props) => {
  return <ProjectsPage />
}

Projects.getInitialProps = async (ctx) => {
  return {
    namespacesRequired: ['common', 'project'],
  }
}

Projects.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common', 'projects')(Projects)
