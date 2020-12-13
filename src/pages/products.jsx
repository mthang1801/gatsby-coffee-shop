import React from 'react'
import Layout from "../components/Globals/layout"
import ProductsList from "../components/Products/products-list"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/SEO/seo"
const getProducts = graphql`
{
  products : allContentfulCoffeeShopProducts{
    edges{
      node{
        contentful_id
        title
        description
        price
        detail{
          raw
        }
        image{
          fluid{
            src
          }
        }
      }
    }
  }
}
`
const ProductsPage = () => {
  const { products } = useStaticQuery(getProducts)
  return (
    <Layout title="our products">
      <SEO title="Products" />
      <div className="content">
        <ProductsList products={products.edges} />
      </div>

    </Layout>
  )
}

export default ProductsPage
