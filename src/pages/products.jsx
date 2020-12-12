import React from 'react'
import Layout from "../components/Globals/layout"
import ProductsList from "../components/Products/products-list"
import {graphql, useStaticQuery} from "gatsby"
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
  const {products} = useStaticQuery(getProducts)   
  return (
    <Layout title="our products"> 
      <ProductsList products={products.edges}/>
    </Layout>
  )
}

export default ProductsPage
