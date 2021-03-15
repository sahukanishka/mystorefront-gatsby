import React from "react"
import Layout from "../components/Layout"
import ProductCard from "../components/ProductCard"
import Pagination from "../components/Pagination"

type IFileNode = {
    id : string ,
    productTitle : string ,
    images : ArrayBuffer , 
    description : string,
    price : number , 
    quantity : number 
    }

function ProductCataloge(props :  {data : IFileNode ,  pageContext : any}) {
  const { data } = props.pageContext
  // console.log(props.pageContext)

  return (
    <Layout>
      <div className="d-flex justify-content-center mt-3">
        <h2>Our Products</h2>
      </div>
      <div className="d-flex justify-content-center " style={{ marginTop: 30 }}>
        <div className="card-group">
          {data.map(node => (
            <ProductCard key={node.id} data={node} />
          ))}
        </div>
      </div>
      <div>
        <Pagination query={props.pageContext} />
      </div>
    </Layout>
  )
}

export default ProductCataloge
