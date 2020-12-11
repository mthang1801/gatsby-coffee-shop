import React from 'react'
import Img from "gatsby-image"
import styles from "../../styles/category-card.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const CategoryCard = ({category}) => {
  return (
    <div className={styles.category}>
      <div className={styles.imgContainer}>
        <Img fluid={category.image.fluid} alt={category.title} className={styles.img}/>
        <AniLink className={styles.link} to={`/category/${category.title}`}>Read more</AniLink>               
      </div>
      <h4 className={styles.title}>{category.title}</h4>
    </div>
  )
}

export default CategoryCard
