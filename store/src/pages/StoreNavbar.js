
import React from "react"
import { FaChevronRight } from "react-icons/fa"

function StoreNavbar(props) {
    const { resetCategory } = props
    
    return(
        <>
        <div></div>
        <p className="store-navbar"><a className="store-all">All</a><a className="store-home">Home Recipe</a>
        <a className="store-restaurant">Restaurant Recipe</a><a className="store-local">Local Recipe</a></p>
        <h2>Browse Popular Categories</h2>
        <span className="view-all-recipes" onClick={resetCategory}>View all recipes <FaChevronRight /></span>
        <br/>
        </>
    )
}
export default StoreNavbar