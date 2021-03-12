import React from "react"
import { Link } from "gatsby"
import { Card, CardImg } from "react-bootstrap"

function ProductCard(props: { data: any }) {
  console.log(props.data)
  const node = props.data
  var slug = node.productTitle
    .toLowerCase()
    .trim()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
  return (
    <div className="d-flex flex-row justify-content-center m-5">
      <Card className="p-3 bg-light border-0">
        <Card className="border-0" style={{ width: "18rem", marginTop: 30 }}>
          {" "}
          <div>
            <div key={node.id}>
              <div>
                <CardImg
                  className="m-auto"
                  variant="top"
                  src={node.images[0].url}
                  alt=""
                />
              </div>
              <div className="p-2">
                <Card.Title
                  className="font-weight-bold text-left "
                  style={{ color: "black" }}
                >
                  {node.productTitle}
                </Card.Title>
                <div className="d-flex flex-row justify-content-between">
                  <p className="font-weight-bold">Price $ {node.price} /-</p>
                  <Link to={slug}>
                    <button className="btn btn-primary btn-sm">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  )
}

export default ProductCard
