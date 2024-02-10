
import Layout from '@/components/Layout'
import styles from './products.module.css'
import PropTypes from 'prop-types'
import ProductCatalogue from '@/components/ProductCatalogue/ProductCatalogue';

function page() {


  return (
    <Layout api={process.env.API_URL}>
      <ProductCatalogue api={process.env.API_URL} />
    </Layout>
  )
}

page.propTypes = {}

export default page
