
import {Row, Col, Card} from "react-bootstrap"
import { FaConciergeBell } from "react-icons/fa"
import { useState } from "react"
import { productArray } from "../productStore"
import ProductCard from "../components/ProductCard"
import StoreNavbar from "./StoreNavbar"
import Login from "../components/Login"
import Pagination from "../components/Pagination"

function Store({login}) {
    const [category, setCategory] = useState([...productArray])

    function handleCategory(cat){
        setCategory(productArray.filter(currentItem => {
            return currentItem.category === cat
        })
        )}
    function resetCategory() {
        setCategory([...productArray])
    }

    return(
      <div style={{position:"relative", padding:"10px", left: "100px", width: "1250px", gap:"5px"}}>
        {!login ? <div><div><FaConciergeBell style={{ color: "black", height: "50px", width:"30px", position:"relative" }} /></div>
        <StoreNavbar resetCategory ={() => resetCategory()} />
        <Row className="store-cat" >
            <Col ><Card className="category__card" onClick={() => handleCategory("fruits")} style={{borderRadius:"2px", alignItems:"center", justifyContent:"center", boxShadow:"5px 5px 25px #e3e6e6", border:"none", padding: "10px"}}>
            <img src="./Images/breakfast.png" className="store-category" alt="Recipe image" /><b style={{margin:"5px", fontSize:"1.1em"}}>Breakfast</b></Card></Col>
            <Col ><Card className="category__card" style={{borderRadius:"2px", alignItems:"center", justifyContent:"center", boxShadow:"5px 5px 25px #e3e6e6", border:"none", padding: "10px"}}>
            <img src="./Images/dairy.png" className="store-category" alt="Recipe image" /><b style={{margin:"5px", fontSize:"1.1em"}}>Diary</b></Card></Col>
            <Col ><Card className="category__card" onClick={() => handleCategory("vegitables")} style={{borderRadius:"2px", alignItems:"center", justifyContent:"center", boxShadow:"5px 5px 25px #e3e6e6", border:"none", padding: "10px"}}>
            <img src="./Images/desserts.png" className="store-category" alt="Recipe image" /><b style={{margin:"5px", fontSize:"1.1em"}}>Desserts</b></Card></Col>
            <Col ><Card className="category__card" style={{borderRadius:"2px", alignItems:"center", justifyContent:"center", boxShadow:"5px 5px 25px #e3e6e6", border:"none", padding: "10px"}}>
            <img src="./Images/dinner.png" className="store-category" alt="Recipe image" /><b style={{margin:"5px", fontSize:"1.1em"}}>Dinner</b></Card></Col>
            <Col ><Card className="category__card" onClick={() => handleCategory("oranges")} style={{borderRadius:"2px", alignItems:"center", justifyContent:"center", boxShadow:"5px 5px 25px #e3e6e6", border:"none", padding: "10px"}}>
            <img src="./Images/shakes.png" className="store-category" alt="Recipe image" /><b style={{margin:"5px", fontSize:"1.1em"}}>Shakes</b></Card></Col>
            <Col ><Card className="category__card" style={{borderRadius:"2px", alignItems:"center", justifyContent:"center", boxShadow:"5px 5px 25px #e3e6e6", border:"none", padding: "10px"}}>
            <img src="./Images/tea.png" className="store-category" alt="Recipe image" /><b style={{margin:"5px", fontSize:"1.1em"}}>Coffee</b></Card></Col>
        </Row><br /><br />
        <Row xl ={3} xs={1} md={2} sm={1} className="g-4">
            {category.map((product, idx) => (
            <Col xl={{span: 4}} sm={{span: 8}} align="center" key={idx}>
                <ProductCard product={product} />
            </Col>
            ))}
            
        </Row></div>:<div style={{backgroundColor:"#1eb5b5", height:"300px"}}><Login /></div>}<br/><br/>
        <div style={{display:"flex", justifyContent:"center"}}><Pagination /></div>
        </div>
    )
}
export default Store