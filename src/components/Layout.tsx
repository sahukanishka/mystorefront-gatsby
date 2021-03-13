import React, { Component } from "react"
import Header from "../components/Header"
// import Helmet from "react-helmet"

function Layout({ children }: any) {
  return (
    <div style={{
        overflow: "hidden"}}>
      {/* <Helmet>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossOrigin="anonymous"
        />
      </Helmet> */}
      <Header />
      {children}
    </div>
  )
}

export default Layout
