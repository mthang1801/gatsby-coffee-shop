import React from "react"
import ProductCard from "./product-card"
import styled from "styled-components"
const Products = ({ products, className }) => {  
  return (
    <div className={className}>
      {products.length
        ? products.map(({ node }) => (
            <ProductCard key={node.title} product={node} />
          ))
        : null}
    </div>
  )
}

export default styled(Products)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 1rem;
`
