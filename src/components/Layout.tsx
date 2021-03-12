import React, { Component } from "react";
import Header from "../components/Header";



function Layout({children}:any) {

    return(
        <div>
            <Header/>
            {children}
        </div>
    )

}


export default Layout ;