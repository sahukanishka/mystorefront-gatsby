import React from "react"
import {graphql} from "gatsby"
import Product from '../components/ProductPage';
import Header from "../components/Header"
import ProductCard from "../components/ProductCard"


function Home({data}) {
  const productCardData = data.allDatoCmsProduct
  console.log(productCardData)
  return <div>
    <Header/>
    {
      productCardData.nodes.map((node)=> (
        <ProductCard data={node}/>
      ))
    }
    
  </div>
}

export default Home;

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

