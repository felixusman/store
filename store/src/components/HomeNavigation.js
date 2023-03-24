
import React from "react"
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { Stack } from "react-bootstrap"

function HomeNavigation(props) {
    const cart = useContext(CartContext)
    const { setPageToView, setSecondPage, setThirdpage } = props
    function handleRecipe() {
        setPageToView(false)
        setSecondPage(true)
        setThirdpage(false)
    }
    return(
        <>
        <Stack direction="horizontal" gap={3} className="home-links">
           <a href="/" className="home-links__nav-home">Home</a>
           <a className="home-links__nav-recipe" onClick={handleRecipe}>Recipe</a>
           <a className="home-links__nave-shop">Shop</a>
           <a href="/" className="home-links__nav-contact">Contact</a>
        </Stack>
        </>

    )
}
export default HomeNavigation