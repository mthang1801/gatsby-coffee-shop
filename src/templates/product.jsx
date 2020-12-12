import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Globals/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styles from "../styles/product-template.module.scss"
import ProductCard from "../components/Products/product-card"
export const query = graphql`
  query($_id: String) {
    product: allContentfulCoffeeShopProducts(
      filter: { contentful_id: { eq: $_id } }
    ) {
      edges {
        node {
          contentful_id
          title
          description
          price
          createdAt(formatString: "Do MMM,YYYY")
          detail {
            raw
            references {
              ... on ContentfulCoffeeShopProducts {
                contentful_id
                title
                price
                description
                createdAt(formatString: "Do MMM, YYYY")
                image {
                  fluid {
                    ...GatsbyContentfulFluid
                  }
                }
                title
              }
              ... on ContentfulAsset {
                contentful_id
                file {
                  url
                }
              }
            }
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
const product = ({ data }) => {
  const {
    title,
    price,
    image,
    detail: { raw, references },
    createdAt,
  } = data.product.edges[0].node
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const contentful_id = node.data.target.sys.id
        const { file } = references.find(
          item => item.contentful_id === contentful_id
        )
        return (
          <div className={styles.imgContainer}>
            <img src={file.url} alt={file.fileName} className={styles.image} />
          </div>
        )
      },
    },
  }

  const otherProducts = references.filter(
    ({ __typename }) => __typename === "ContentfulCoffeeShopProducts"
  )
  return (
    <Layout title={title} img={image.fluid}>
      <section className={styles.product}>
        <div className={styles.center}>
          <h1 className={styles.title}>{title}</h1>
          <h4 className={styles.date}>Published at : {createdAt}</h4>
          <article className={styles.post}>
            {documentToReactComponents(JSON.parse(raw), options)}
          </article>
        </div>
        <div className={styles.footer}>
          <h1>Other Products</h1>
          <div className={styles.otherProducts}>
            {otherProducts.map(product => (
              <ProductCard key={product.contentful_id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default product
