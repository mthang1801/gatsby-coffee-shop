import React from 'react'
import Title from "../Globals/title"
import styles from "../../styles/category.module.scss"
import {graphql, useStaticQuery} from "gatsby";
import CategoryCard from "./category-card";
const getCategory = graphql`
  {
    category : allContentfulCoffeeShopCategory{
      edges{
        node{
          title
          image{
            fluid{
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
const Category = () => {
  const {category} = useStaticQuery(getCategory)  
  return (
    <section className={styles.category}>
      <Title title="Our" subtitle="Category"/>
      <div className={styles.center}>
        {category.edges.map(({node}, idx) => (
          <CategoryCard key={idx} category={node}/>
        )) }
      </div>      
    </section>
  )
}

export default Category
