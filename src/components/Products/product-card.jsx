import React from "react"
import styles from "../../styles/product-card.module.scss"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaCartPlus } from "react-icons/fa"
const ProductCard = ({ product }) => {
  console.log(product)
  return (
    <AniLink className={styles.product} fade to={`/product/${product.contentful_id}`}>
      <div className={styles.imgContainer}>
        <Img
          fluid={product.image.fluid}
          alt={product.title}
          className={styles.image}
        />
      </div>
      <div className={styles.footer}>
        <h4 title={product.title} className={styles.title}>{product.title.length > 25? `${product.title.slice(0,25)}...` : product.title }</h4>

        <h4 className={styles.price}>Price: ${product.price}</h4>
        <button type="button" className={styles.btnAddToCart}>
          Add to cart{" "}
          <span>
            <FaCartPlus />
          </span>
        </button>
      </div>
    </AniLink>
  )
}

export default ProductCard
