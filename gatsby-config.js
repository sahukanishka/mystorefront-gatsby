/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata : {
    title : `MyStoreFront`
  }, 
  plugins: [`gatsby-plugin-sass` , 
  {
    resolve: `gatsby-source-datocms`,
    options: {
      apiToken: `be41caefea1c51ac1860ba635f8af9`,
    },
  },
],
}

