const path = require("path")
exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions
  const {data} = await graphql(`
  query{
    allContentfulCoffeeShopCategory{
      edges{
        node{
          title
        }
      }
    }
  }
  `)
  data.allContentfulCoffeeShopCategory.edges.forEach( ({node}) => {
    createPage({
      path : `/category/${node.title}`, 
      component : path.resolve("./src/templates/category.jsx"),
      context : {
        category : node.title
      }
    })
  })
}