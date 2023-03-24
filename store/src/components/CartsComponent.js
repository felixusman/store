
import { Button, Container, Modal } from "react-bootstrap"
import { useState, useContext } from "react"
import { CartContext } from "../CartContext"
import CartProduct from "./CartProduct"
import { FaLessThan } from "react-icons/fa"
  
function CartsComponent(props) {
    const cart = useContext(CartContext)
    const { setPageToView, setSecondPage } = props
    function handleRecipe() {
        setPageToView(false)
        setSecondPage(true)
    }
    function handleCheckout() {
        setPageToView(true)
        setSecondPage(false)
    }
    return(
        <>
        <div className="cart-cover">
        <img src="./Images/dish2.png" className="cart-img1" alt="Recipe image" />
        <div className="cart-pg">
        <h1 style={{position:"relative", fontSize:"4em", left:"50%"}}>Cart</h1>
        <p style={{position:"relative", fontSize:"1.1em", display:"flex", left:"50%"}}>
           Happiness is homemade, and the kitchen is the center of<br />
           any home. Get your hands on my favorite kitchen recipe!</p>
        </div>
        <img src="./Images/dish2.png" className="cart-img2" alt="Recipe image" /> 
        </div>
        <div style={{position:"relative", backgroundColor:"white"}}>
        <br/><br/><br/>
        <Container className="check-out-container">
            <div className="cart-items">
            <div onClick={handleRecipe} style={{display:"flex", justifyContent:"flex-end", 
            alignItems:"center", 
            fontSize:"1.2em", color:"#058c91", cursor:"pointer" }}><FaLessThan/>
            &nbsp;&nbsp;<b>Continue Shopping</b></div>
                 {cart.items.map((currentProduct, idx) => (
                    <div key={idx} className="each-cart">
                        <CartProduct id={currentProduct.id} 
                        quantity={currentProduct.quantity} /><br/>
                    </div>
                 ))}
            </div>
            <div className="cart-total">
                <h5><b>Cart Total</b></h5><br/>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px"}}>
                <input className="coupon" placeholder="Coupon Code" style={{padding:"15px", borderRadius:"4px"}} />
                <button className="coupon-btn">Apply Coupon</button>
                </div><br/>
                <h4>Note</h4><br/>
                <p>Add special instructions for your seller...</p><br/>
                <textarea placeholder="Start typing..." className="coupon-msg"></textarea><br/>
              <div style={{display:"flex", alignItems:"center", flexDirection:"column", fontSize:"1.3em"}}>
               <div style={{display:"flex", gap:"160px"}}><h5>SubTotal:</h5><h5 >NGN{cart.getTotalCost().toFixed(0)}</h5></div>
               <div style={{display:"flex", gap:"200px"}}><h5>Total:</h5><h5>NGN{cart.getTotalCost().toFixed(0)}</h5></div>
              </div><br/>
              <p>Shipping and taxes calculated at checkout...</p><br/>
              <div style={{display:"flex", justifyContent:"space-between"}}>
              <button className="update-btn">Update Card</button>
              <button className="coupon-btn" onClick={handleCheckout}>Checkout</button>
              </div>
            </div>
        </Container>
        </div>
        </>
    )
}
export default CartsComponent