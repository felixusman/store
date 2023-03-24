
import "../Pagination.css"
import React, { useEffect, useState } from "react"
import { FaLessThan, FaGreaterThan } from "react-icons/fa"

function Pagination() {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const [allPages, setAllPages] = useState(100)

    const handlePages = (pageNum) => {
        if(pageNum >= 1 &&
           pageNum <= allPages / 20 &&
           pageNum !== page
            )
        setPage(pageNum)
    }
    
    return(
        <>
         <div>
         </div>
         <div className="pagination" >
            <span onClick={() => handlePages(page-1)} className={page > 1 ? "":"pagination__disable"}>
                <FaLessThan />
            </span>
              {[...Array(allPages/20)].map((_,i) => {
                return <span key={i} onClick={()=> handlePages(i+1)} 
                className={page === i+1 ? "pagination__selected":""} >
                    {i+1}
                </span>
              })}
            <span onClick={() => handlePages(page+1)} className={page < 5 ? "":"pagination__disable"}>
                <FaGreaterThan />
            </span>
         </div>
        </>
    )
}
export default Pagination