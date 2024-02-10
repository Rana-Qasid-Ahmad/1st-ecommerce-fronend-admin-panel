import CreateAdmin from '@/components/CreateAdmin/CreateAdmin'
import Layout from '@/components/Layout'
import PropTypes from 'prop-types'

function page(props) {
  return (
    <Layout api={process.env.API_URL}><CreateAdmin  API_URL={process.env.API_URL} /></Layout>
  )
}

page.propTypes = {}

export default page
