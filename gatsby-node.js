const path = require(`path`);


exports.onCreateNode = ({node}) => {
    
}


exports.createPages = async ({graphql ,actions} ) => {
    const {createPage} = actions 
    const result = await graphql(`
    query {
        allDatoCmsProduct {
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
    }`
)

// console.log(result.data.allDatoCmsProduct.nodes)


result.data.allDatoCmsProduct.nodes.forEach((node)=>{
    var title = node.productTitle
    var id = node.id 
    var description= node.description
    var price = node.price
    var quantity = node.quantity
    var images = node.images 
    var slug = title.toLowerCase().trim().replace(/ /g, '-') 
    .replace(/[^\w-]+/g, '');
    // console.log(result.data.allDatoCmsProduct.nod) 
    createPage({
        path : slug , 
        component : path.resolve("./src/components/ProductPage.tsx"), 
        context : {
            productTitle : title,
            slug : slug ,
            id : id ,
            description : description,
            price : price ,
            quantity : quantity ,
            images : images ,
        }
    })
})
   
}








