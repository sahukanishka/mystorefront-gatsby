/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: `MyStoreFront`
  },
  plugins: [`gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `be41caefea1c51ac1860ba635f8af9`,
      },
    },

    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        apiKey: 'Y2FkNzM1YjItOTkxOC00ZDQyLTgxOTMtNzI2ZDQ2Yzc3OTY0NjM3NTExMjM4NTkwOTg4NTk4',
        defaultLang: "EN",
        currency: "USD",
      }
    }
  ]
}