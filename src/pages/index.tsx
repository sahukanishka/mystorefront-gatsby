import React from "react" ; 
import {graphql, Link} from "gatsby" ; 
import Product from '../components/ProductPage';
import Header from "../components/Header" ; 
import ProductCard from "../components/ProductCard" ; 
import ProductCatalog from "../templates/productsCatalog" ;


type IDataNode = {
  id : string ,
  productTitle : string ,
  images : ArrayBuffer , 
  description : string,
  price : number , 
  quantity : number 
  }

type IProductCardData  = {
  data: { allDatoCmsProduct : {nodes :  [IDataNode]    } } }


function Home(props : IProductCardData ) {
  console.log(props)
  const {data} = props
  const productCardData = data.allDatoCmsProduct
  return <div style={{
    overflow: "hidden"}}>
    
    <Header/>
    <div className=" wrapper d-flex justify-content-center mt-3">
      <h2>
        Our Products
      </h2>
    </div>
    <div className="d-flex justify-content-center " style={{marginLeft:90,marginTop:30}}>
      <div className="card-group">
 
    { 
      productCardData.nodes.map((node)=> (
        <ProductCard key={node.id} data={node}/>
      ))
    }

    </div>
    
  </div>
  <div className="d-flex justify-content-center">
    <Link to="/1">
    <button className="btn btn-danger">
      Load more
    </button>
    </Link>
  </div>
  </div>
}



export const ProductCataloge = graphql`
query MyQuery {
  allDatoCmsProduct {
    nodes {
      id
      productTitle
      price
      images {
        url
      }
    }
  }
}

`
export default Home;
