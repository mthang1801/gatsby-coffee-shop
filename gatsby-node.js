const path = require("path")
exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions
  const {data} = await graphql(`
  query{
    category : allContentfulCoffeeShopCategory{
      edges{
        node{
          title
        }
      }
    }
    products : allContentfulCoffeeShopProducts{
      edges{
        node{
          contentful_id
        }
      }
    }
  }
  `)
  
  data.category.edges.forEach( ({node}) => {
    createPage({
      path : `/category/${node.title}`, 
      component : path.resolve("./src/templates/category.jsx"),
      context : {
        category : node.title
      }
    })
  })
  data.products.edges.forEach( ({node}) => {
    createPage({
      path : `/product/${node.contentful_id}`, 
      component : path.resolve("./src/templates/product.jsx"),
      context : {
        _id : node.contentful_id
      }
    })
  })
}