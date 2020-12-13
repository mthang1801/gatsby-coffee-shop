import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Globals/layout"
import ProductsList from "../components/Products/products-list"
import SEO from "../components/SEO/seo"
export const query = graphql`
  query($category: String) {
    products: allContentfulCoffeeShopProducts(
      filter: { category: { eq: $category } }
      sort: { order: ASC, fields: price }
    ) {
      edges {
        node {
          contentful_id
          title
          createdAt
          description
          price
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          detail {
            raw
          }
        }
      }
    }

    category: allContentfulCoffeeShopCategory(
      filter: { title: { eq: $category } }
    ) {
      edges {
        node {
          title
          image {
            fluid(maxWidth: 4000, maxHeight: 400) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
const CategoryTemplate = props => {
  const { category } = props.data
  const { products } = props.data
  return (
    <Layout title={props.pathContext.category}>
      <SEO title="category"/>
      <div className="content">
        {products.edges.length ? (
          <ProductsList products={products.edges} />
        ) : (
          <h4 className="txt-center">Products empty</h4>
        )}
      </div>
    </Layout>
  )
}

export default CategoryTemplate
