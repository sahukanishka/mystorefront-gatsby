import React from "react"
import {Link} from "gatsby" ; 

type IPaginationProps = {
    query: {currentPage: number; numofPages: number}
};
function Pagination(props:IPaginationProps){
    console.log(props)
    const { currentPage, numofPages } = props.query
    console.log(currentPage,numofPages)
    const isFirst = currentPage === 1
    const isLast = currentPage === numofPages
    const prevPage = currentPage - 1 === 1 ? "/1" :"/"+ (currentPage - 1).toString()
    const nextPage = "/"+ (currentPage + 1).toString()

    return (
        <div className="d-flex flex-row justify-content-center"> <div className="mr-2">{ !isFirst && (<Link to={prevPage} rel="prev">  ← Previous Page</Link>)}</div>
        <div className="ml-2"> {!isLast && (<Link to={nextPage} rel="next">Next Page → </Link>)}</div>
      </div>
    )

}

export default Pagination ; 