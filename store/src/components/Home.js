
import React from "react"
import HomeFooter from "./HomeFooter"

function Home(props) {
    const { setPageToView, setSecondPage, setThirdpage } = props
    function handleRecipe() {
        setPageToView(false)
        setSecondPage(true)
        setThirdpage(false)
    }
    return(
        <div className="home">
        <span className="home__info">
        <p>| AMAZING RECIPE FROM 9JARECIPE</p>
        <p className="bg-text">Never Forget a <br />Recipe!</p>
        <p className="sm-text">Happiness is home made, and the kitchen is the center of<br /> any home.
           Get your hands on my favourite kitchen recipe!
        </p>
        <button className="view-recipe-button" onClick={handleRecipe}>View Recipe</button>
        </span>
        <div className="home__image">
        <img src="./Images/dish2.png" className="img-big" alt="home recipe image" />
        </div>
        <div className="Home__home-footer">
        <HomeFooter />
        </div>
       </div>
    )
}
export default Home