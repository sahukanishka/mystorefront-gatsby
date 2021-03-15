import React, { Component } from "react"
import Header from "../components/Header"
// import Helmet from "react-helmet"
type IChildren = {
  children : React.ReactNode
}
function Layout( props : IChildren ) {
  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <Header />
      {props.children}
    </div>
  )
}

export default Layout
