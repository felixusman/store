
import React from "react"
import { FaTwitter, FaFacebookSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa"

function MainFooter() {
    return(
        <div className="base-footer">
        <div className="main-footer">
            <div className="base-footer__items">
            <div className="main-footer-text"><h1 style={{color:"#058c91", fontFamily: 'Pacifico'}}>9jaRecipe</h1>
            <br/>
            <p>Happiness is home made, and the kitchen is the<br/> center of
               any home. Get your hands on my<br/> favourite kitchen recipe!
            </p>
            </div>
            <div className="main-footer-text"><h5>About</h5>
            <p>About Me<br/>Our News<br/>Recipes<br/>Vidos</p>
            </div>
            <div className="main-footer-text"><h5>Services</h5>
            <p>What We Do<br/>Our Blog<br/>Contacts<br/>Our Video
             </p>
            </div>
            <div className="main-footer__newsletter"><h5>Join Our Newsletter</h5><br/>
             <form className="footer-form">
                <input placeholder="Your email address"/>
                <button className="footer-btn">Subscribe</button>
                </form>
            </div>
        </div>
        </div>
        <div style={{display:"flex", position:"relative", top:"150px", color:"#058c91",
        fontSize:"1.3em", gap:"40px", cursor:"pointer"}}>
         <FaFacebookSquare/><FaTiktok/><FaInstagramSquare/><FaTwitter/>
        </div>
            <hr></hr><br /><br/>
            <div style={{display:"flex", position:"relative",
             top:"120px", justifyContent:"center", gap:"20px"}}>
                <p className="footer-terms">General</p><p className="footer-terms">Terms of use</p><p className="footer-terms">Privacy policy</p>
                <p className="footer-terms">Security Policy</p><p className="footer-terms">Career</p><p id="footer-terms">Support</p>
            </div>
            <div style={{display:"flex", position:"relative",
             top:"125px", justifyContent:"center", gap:"20px"}}>&copy; Copyright 2022 9jaRecipe. All Rights Reserved.</div>
        </div>
    )
}
export default MainFooter