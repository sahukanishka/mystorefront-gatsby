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
  `gatsby-plugin-react-helmet`,
  {
    resolve: 'gatsby-plugin-snipcart',
    options: {
      apiKey: 'S_NTE0NWNiZDEtOGRmYy00OWQwLWEwNTItZGVlMjRjMTFlNGJhNjM3NTExMzk4MzkwOTQ0MjUw',
      autopop: true 
    }
  },
  {
    resolve: `gatsby-source-datocms`,
    options: {
      apiToken: `be41caefea1c51ac1860ba635f8af9`,
    },
  },
  // {
  //   resolve: `gatsby-source-stripe`,
  //   options: {
  //     objects: ['Price'],
  //     secretKey: `sk_test_51IU4ugLcVZtxAo4JNwEyUgYUxdvPVNSIXDcQaSHmA7HPRT1cdFSLTqa1B00SYyiP9MbpWdn36rXgV4np0lUSTjX400teXHKvXl`,
  //     downloadFiles: false,
  //   },
  // },
    // {
    //   resolve: `gatsby-plugin-sharp`,
    //   options: {
    //     // Defaults used for gatsbyImageData and StaticImage
    //     defaults: {},
    //     // Set to false to allow builds to continue on image errors
    //     failOnError: true,
    //     // deprecated options and their defaults:
    //     base64Width: 20,
    //     forceBase64Format: ``, // valid formats: png,jpg,webp
    //     useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
    //     stripMetadata: true,
    //     defaultQuality: 50,
    //   },
    // },
 ]
}

