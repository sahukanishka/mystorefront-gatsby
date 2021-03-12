import React from "react"; 
import Layout from "../components/Layout"
import {useShoppingCart , formatCurrencyString} from "use-shopping-cart";
function ProductPage(props) {
  
  // const {checkoutSingleItem} = useShoppingCart()
    const data = props.pageContext
    var slug = data.productTitle.toLowerCase().trim().replace(/ /g, '-') 
    .replace(/[^\w-]+/g, '');
    // function buyNow() {
    //   checkoutSingleItem({sku : data.id})
    // }

    // const price = formatCurrencyString({
    //   value : data.price,
    //   currency : "$",
    //   language : 'en-US'
    // })
        return (
          <Layout>
            <div>
                <div>
                    <div><h1>{data.productTitle}</h1></div>
                    <div><p>{data.description}</p></div>
                </div>
                <div>
                    <div><h3>In Stock : {data.quantity}</h3></div>
                    <div><h2>Price : {data.price} $</h2></div>
                </div>
               
                <div style={{display:"flex",flexDirection: "row"}}>
                  {data.images.map( (image)=> (
                    <div >
                      <img src={image.url} style={{width:100,height:100}}/>
                    </div>
                  ))}
                </div>
                <div>
                    <button >BuyNow</button>
                    <button
    class="snipcart-add-item"
    data-item-id= {data.id}
    data-item-price={data.price}
    data-item-url={slug}
    data-item-image={data.images[0].url}
    data-item-name={data.productTitle}
  >
    Add to cart
  </button>
                </div>
            </div>
            </Layout>
        )
  
}

export default ProductPage ; 