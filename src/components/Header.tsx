import React from "react"; 
import {Link}  from "gatsby"
// import * as stylediv from "./header.module.scss" ; 


function Header() {

    return(
        <div style={{height:40,backgroundColor:"lightgray",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
           <header>
               <Link to="/"><h3>MyShopcart</h3></Link>
               <div>
                   <Link to="/cart">Cart</Link>
               </div>
           </header>
        </div>
    )

}
export default Header ; 