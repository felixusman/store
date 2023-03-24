
import { Container } from "react-bootstrap"
import { useContext, useState } from "react"
import { CartContext } from "../CartContext"
import OrderSummary from "./OrderSummary"

  
function Billing() {
    const cart = useContext(CartContext)
    const [loader, setLoader] = useState(false)

    const checkout = async () => {
        setLoader(true)
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).catch((err) =>{
            console.log("Error Step", err)
        }
        ).then((response) => {
            console.log("Step one", response)
            return response.json()
            setLoader(false)
        }).then((response) => {
            console.log("Step two", response)
            if(response.url){
                window.location.assign(response.url) //Forwarding user to stripe
            }
        })
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
        <div className="billing">
        <div className="billin-details">
        <h5><b>Billing Details</b></h5>
    <div>
    <form style={{display:"flex", flexDirection:"column"}}>
        <pre style={{fontSize:"1.2em"}}>First Name                      Last Name</pre>
        <div style={{display:"flex", gap:"20px"}}>
        <input type="text" placeholder="e.g Felix" style=
        {{border:"1px solid #a7adaf", padding:"10px", width:"100px", height:"45px", borderRadius:"5px"}} />
        <input type="text" placeholder="e.g ilo" style=
        {{border:"1px solid #a7adaf", padding:"10px", width:"100px", height:"45px", borderRadius:"5px"}} /><br/>
        </div><br/>

        <pre style={{fontSize:"1.2em"}}>Town                            Postal Code</pre>
        <div style={{display:"flex", gap:"20px"}}>
        <input type="text" placeholder="e.g Eti-Osa" style=
        {{border:"1px solid #a7adaf", padding:"10px", width:"100px", height:"45px", borderRadius:"5px"}} />
        <input type="text" placeholder="e.g 1019108" style=
        {{border:"1px solid #a7adaf", padding:"10px", width:"100px", height:"45px", borderRadius:"5px"}} /><br/>
        </div><br/>
         
         <p style={{fontSize:"1.2em"}}>Address</p>
         <textarea placeholder="e.g apartment, suites, etc." style=
         {{padding:"15px", height:"100px", border:"1px solid #a7adaf", width:"648px", borderRadius:"5px"}}></textarea><br/>

         <div style={{fontSize:"1.1em"}}>
         <input type ="checkbox" style={{width:"20px", height:"20px"}} />&nbsp;<span>Save this information for next time</span>
         </div><br/>

         <p style={{fontSize:"1.1em"}}>Order Note</p>
         <textarea placeholder="e.g notes about your order" style=
         {{padding:"15px", height:"60px", border:"1px solid #a7adaf", width:"648px", borderRadius:"5px"}}></textarea><br/>
         <button className="billing-btn">Continue to shopping</button>
      </form>
            </div>
        </div>
    </div>
        <div className="bill-summary">
          <h5><b>Your Order Summary</b></h5><br/>
             <div>
                 <div>
                    {cart.items.map((currentProduct, idx) => (
                     <div key={idx} className="each-car">
                        <OrderSummary id={currentProduct.id} 
                        quantity={currentProduct.quantity} /><br/>
                    </div>
                 ))}
        </div>
        
        </div>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px"}}>
        <input className="coupon" placeholder="Coupon Code" style={{padding:"15px", borderRadius:"4px"}} />
        <button className="coupon-btn">Apply Coupon</button>
        </div><br/>
        
        <div style={{display:"flex", alignItems:"center", flexDirection:"column", fontSize:"1.1em"}}>
        <div style={{display:"flex", gap:"160px"}}><p>SubTotal</p><b>NGN{cart.getTotalCost().toFixed(0)}</b></div>
        <div style={{display:"flex", gap:"200px"}}><p>Shipping</p><b>NGN0</b></div>
        <hr style={{position:"relative", top:"0px", height:"1px"}}></hr>
        </div>
        <div style={{display:"flex", gap:"200px", fontSize:"1.1em"}}><p>Total</p><b>NGN{cart.getTotalCost().toFixed(0)}</b></div>
        <br/>

        <div style={{display:"flex", flexDirection:"column"}}>  
        <p><b>NB:</b> Shipping and taxes calculated at checkout</p><br/>
        {!loader ? <button className="coupon-btn" style={{width:"100%"}} onClick={checkout} >Pay</button>:
        <button className="coupon-btn" style={{width:"100%"}}>Loading...</button>}
        </div>
        </div>
    </Container>
    </div>
</>
    )
}
export default Billing