import React from "react"
import Layout from "../components/Layout"

type IFileNode = {
  id: string
  productTitle: string
  images: ArrayBuffer
  description: string
  price: number
  quantity: number
}
type IMyFiles = {
  results: { edges: { node: IFileNode }[] }
}
type IProductPageProps = { data: IMyFiles; pageContext: any }
function ProductPage(props: IProductPageProps) {
  const data = props.pageContext
  var slug = data.productTitle
    .toLowerCase()
    .trim()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
  return (
    <Layout>
      <div key={data.id} className="container-fluid">
        <div className="row m-5">
          <div className="col-md-6 ">
            <img
              className="img-fluid"
              style={{ margin: 20, width: "80%" }}
              src={data.images[0].url}
            />
          </div>
          <div className="col-md-6">
            <div>
              <h1>{data.productTitle}</h1>
            </div>
            <div className="mt-5">
              <p>{data.description}</p>
            </div>
            <div className="mt-5">
              {" "}
              <h6>In Stock : {data.quantity}</h6>
            </div>
            <div>
              <h2>Price : {data.price} $</h2>
            </div>
            <div className="d-flex flex-row">
              {data.images.map(image => (
                <div className="" key={image.url}>
                  <img className="img-thumbnail border-0 p-4" src={image.url} />
                </div>
              ))}
            </div>
            <div className="d-flex flex-column mt-5 mb-5">
              <button
                className="snipcart-add-item btn btn-success btn-block"
                data-item-id={data.id}
                data-item-price={data.price}
                data-item-url={slug}
                data-item-image={data.images[0].url}
                data-item-name={data.productTitle}
              >
                BuyNow
              </button>
              <button
                className="snipcart-add-item btn btn-outline-secondary btn-block"
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
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage
