import React from "react"
import {Link} from "gatsby"

function ProductCard(props : {data : any }) {
    console.log(props.data)
    const node = props.data 
    var slug = node.productTitle.toLowerCase().trim().replace(/ /g, '-') 
    .replace(/[^\w-]+/g, '');
    return(
        <div style={{margin:15, backgroundColor:"#f2f2f2" , borderRadius:5,padding:10,display:"flex"}}>
            <Link to={slug}>
        <div key= {node.id}> 
        
            <div >
                <img style={{width:200,height:200 ,borderRadius: 5}} src={node.images[0].url} alt=""/>
            </div>
            <div style={{display:"flex",flexDirection:"row"}}>
                <div><p style={{fontSize:18}}>{node.productTitle}</p></div>
                <div style={{marginLeft: 20,}}><h5>{node.price}</h5></div>
            </div>
        </div>
        </Link>
        </div>
    )

}


export default ProductCard ;