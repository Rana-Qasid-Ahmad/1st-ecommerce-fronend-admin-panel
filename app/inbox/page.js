import Layout from '@/components/Layout'
import PropTypes from 'prop-types'

function page(props) {
  return (
    <Layout api={process.env.API_URL}>inbox</Layout>
  )
}

page.propTypes = {}

export default page
