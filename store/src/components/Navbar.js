
import { Button, Container, Navbar, Modal } from "react-bootstrap"
import { useState, useContext } from "react"
import { CartContext } from "../CartContext"
import CartProduct from "./CartProduct"
import HomeNavigation from "./HomeNavigation"
import NavButtons from "./NavButtons"

function NavbarComponent(props) {
  const cart = useContext(CartContext)
    const [show, setShow] = useState(false)
    const handleClose =() => setShow(false)
    const handleShow = () => setShow(true)

    const { setPageToView, setSecondPage, token, setToken, setLogin, login, setThirdpage } = props
    const productsCount = cart.items.reduce(
      (sum, product) => sum + product.quantity, 0)
     
    return(
        <>
        <Navbar expand="lg" style={{height:"100px", borderBottom:"1px solid black",
         zIndex:"999", backgroundColor:"white"}}>
           <Navbar.Brand href="/" style={{fontSize:"3vw", color:"#5F9EA0", paddingLeft:"10vw",
            fontWeight:"700"}} >
            9jaRecipe</Navbar.Brand>
           <div style={{width:"50%" }}><HomeNavigation setPageToView={setPageToView}
            setSecondPage={setSecondPage} /></div>
           <span style={{marginRight: "15px"}}><Navbar.Toggle /></span>
           <Navbar.Collapse className="nav-btn">
           <NavButtons token={token} setToken={setToken} productsCount={productsCount} handleShow={handleShow}
            setPageToView={setPageToView} setSecondPage={setSecondPage} login={login} setLogin={setLogin}
            setThirdpage={setThirdpage} />
           </Navbar.Collapse>
        </Navbar>

        </>
    )
}
export default NavbarComponent