const path = require(`path`);


exports.onCreateNode = ({
  node
}) => {

}


exports.createPages = async ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions
  const result = await graphql(`
    query {
        products: allDatoCmsProduct {
            nodes {
              id
              productTitle
              price
              description
              images {
                url
              }
              quantity
            }
          }
          selectiveProducts: allDatoCmsProduct(filter: ) {
            nodes {
              id
              productTitle
              price
              description
              images {
                url
              }
              quantity
            }
          }
    }`)

  // console.log(result.data.allDatoCmsProduct.nodes)


  result.data.products.nodes.forEach((node) => {
    var title = node.productTitle
    var id = node.id
    var description = node.description
    var price = node.price
    var quantity = node.quantity
    var images = node.images
    var slug = title.toLowerCase().trim().replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
    // console.log(result.data.allDatoCmsProduct.nod) 
    createPage({
      path: slug,
      component: path.resolve("./src/components/ProductPage.tsx"),
      context: {
        productTitle: title,
        slug: slug,
        id: id,
        description: description,
        price: price,
        quantity: quantity,
        images: images,
      }
    })
  })


  const postsPerPage = 2
  const posts = result.data.allDatoCmsProduct.nodes
  const numofPages = Math.ceil(posts.length / postsPerPage)
  var newArray = Array.from({
    length: numofPages
  })
  var j = 0;
  for (var i = 0; i <= newArray.length; i++) {
    var postData = posts.slice(j, (i + 1) * postsPerPage)
    console.log(postData)
    console.log("********")
    j = j + 2;
    createPage({
      path: `/${i+1}`,
      component: require.resolve("./src/templates/productsCatalog.tsx"),
      context: {
        data: postData,
        numofPages: numofPages,
        currentPage: i + 1,
      },
    })
  }
}