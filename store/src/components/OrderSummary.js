
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productStore";

function OrderSummary(props) {
   const cart = useContext(CartContext)
   const { id, quantity } = props

   const productQuantity = cart.getProductQuantity(id)

   const productData = getProductData(id)
   return(
    <>
       <div style={{display:"flex", gap:"20px"}}>
         <h3><img src={productData.image} height="60px" width="60px"/></h3>
         <p style={{fontSize:"1.1em"}}>Cauliflower Recipe ({productQuantity})<br/><b>NGN {productData.price}</b></p><br/>
       </div>
       <hr style={{position:"relative", top:"0px", height:"1px"}}></hr>
    </>
   )
}

export default OrderSummary;