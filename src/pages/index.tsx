import React from "react"
import {graphql} from "gatsby"
import Product from '../components/Product';
import Header from "../components/Header"


function Home(props) {

  const productData = props.pageContext
  console.log(productData)
  return <div>
    <Header/>
  </div>
}

export default Home;

