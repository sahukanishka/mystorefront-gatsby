import React from "react"; 
function ProductPage(props) {
    const data = props.pageContext
    console.log(data.images)
        return (
            <div>
                <div>
                    <div><h1>{data.productTitle}</h1></div>
                    <div><h4>{data.description}</h4></div>
                </div>
                <div>
                    <div><h3>In Stock : {data.quantity}</h3></div>
                    <div><h2>Price : {data.price} $</h2></div>
                </div>
               
                <div style={{display:"flex",flexDirection: "row"}}>
                  {data.images.map( (image)=> (
                    <div >
                      <img src={image.url} style={{width:100,height:100}}/>
                    </div>
                  ))}
                </div>
                <div>
                    <button>BuyNow</button>
                    <button>Add to cart</button>
                </div>
            </div>
        )
  
}

export default ProductPage ; 