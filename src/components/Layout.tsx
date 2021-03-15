import React, { Component } from "react"
import Header from "../components/Header"
// import Helmet from "react-helmet"

function Layout({ children }: any) {
  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <Header />
      {children}
    </div>
  )
}

export default Layout
