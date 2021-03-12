import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
// import * as stylediv from "./header.module.scss" ;

function Header() {
  return (
    <div className="row">
      <div className="col-md-12">
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Link to="/">
        <Navbar.Brand >MystoreFront</Navbar.Brand>
        </Link>
          <div>
            <header>
              <div>
                <Link to="/cart">Cart</Link>
              </div>
            </header>
          </div>
        </Navbar>
      </div>
    </div>
  )
}

export default Header
