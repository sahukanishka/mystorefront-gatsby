import React from "react"
import Layout from "../components/Layout"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
function ProductPage(props) {
  const data = props.pageContext
  var slug = data.productTitle
    .toLowerCase()
    .trim()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
  return (
    <Layout>
      <div className="d-flex flex-column">
        <div>
          <h1 className="d-flex justify-content-center mt-2 ">{data.productTitle}</h1>
          <img className="img-fluid p-5" src={data.images[0].url}/>
          <div className="d-flex flex-row ">
          {data.images.map(image => (
            <div>
              <img className="img-thumbnail border-0 p-4" src={image.url} />
            </div>
          ))}
        </div>
          <p className="p-4">{data.description}</p>
        </div>
        <div className="d-flex flex-column pl-4">
          <div>
            <h6 className="">In Stock : {data.quantity}</h6>
          </div>
          <div>
            <h2>Price : {data.price} $</h2>
          </div>
        </div>

     
        <div className="d-flex flex-column justify-content-between p-4">
          <button
            className="Product__buy Product snipcart-add-item btn btn-success btn-block"
            data-item-id={data.id}
            data-item-price={data.price}
            data-item-url={slug}
            data-item-image={data.images[0].url}
            data-item-name={data.productTitle}
          >
            BuyNow
          </button>
          <button
            className="Product__buy Product snipcart-add-item btn btn-outline-secondary btn-block"
            data-item-id={data.id}
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

export default ProductPage
