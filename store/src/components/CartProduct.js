import { Button } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productStore";
import { FaTimes, FaAngleUp, FaAngleDown } from "react-icons/fa"

function CartProduct(props) {
   const cart = useContext(CartContext)
   const { id, quantity } = props

   const productQuantity = cart.getProductQuantity(id)

   const productData = getProductData(id)
   return(
       <>
         <div className="close-card" onClick={() => cart.deleteFromCart(id)}><FaTimes/></div>
         <h3><img src={productData.image} height="100px" width="100px"/></h3>
         <p style={{fontSize:"1.3em"}}>Cauliflower<br/> Recipe<br/>NGN{productData.price}</p>
         <div style={{fontSize:"1.3em", width:"100px"}}>Quantity<br/><br/>
         <div style={{display:"flex", gap:"15px", alignItems:"center", justifyContent:"center", backgroundColor:"#e8eaefcc", 
          border:"none", height:"45px", padding:"5px"}}><h5>{productQuantity}</h5>
            <div className="quantity-arrow">
                <span style={{cursor:"pointer"}} onClick={() => cart.addOneToCart(id)}><FaAngleUp /></span>
                <span style={{cursor:"pointer"}} onClick={() => cart.removeOneFromCart(id)}><FaAngleDown /></span>
            </div>
            </div>
         </div>
         <p style={{fontSize:"1.3em"}}>SubTotal<br/> NGN{(productQuantity*productData.price).toFixed(0)}</p>
       </>
   )
}

export default CartProduct;