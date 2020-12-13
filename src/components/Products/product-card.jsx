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
        <button className={`${styles.btnAddToCart} snipcart-add-item`}
            data-item-id={product.contentful_id}
            data-item-price={product.price}
            data-item-url={`https://coffee-shop-demo-13122020.netlify.app/`}
            data-item-description={product.description}
            data-item-image={product.image.fluid.src}
            data-item-name={product.title}
        >
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
