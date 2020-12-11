const path = require("path");
require("dotenv").config({
  path : ".env"
})
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve : `gatsby-source-filesystem`,
      options : {
        name : "images",
        path :  path.resolve("./src/images")
      }
    },
    {
      resolve : `gatsby-source-contentful`,
      options :{
        spaceId : process.env.CONTENTFUL_SPACE_ID,
        accessToken : process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`
  ],
}
