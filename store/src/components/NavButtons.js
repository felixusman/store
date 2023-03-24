
import React from "react"
import jwt_decode from "jwt-decode"
import { CartContext } from "../CartContext";
import { useContext, useState, useEffect, useRef } from "react";
import { Modal, Button, Nav } from "react-bootstrap"
import { FaSistrix, FaCartArrowDown } from "react-icons/fa"
import Login from "./Login";

function NavButtons(props) {
    const cart = useContext(CartContext)
    const [users, setUsers] = useState({})
    const [show, setShow] = useState(false)
    const { productsCount, setPageToView, setSecondPage, token, setToken, setLogin, setThirdpage} = props

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
     
    function handleCart() {
        setPageToView(true)
        setSecondPage(true)
        setThirdpage(false)
    }
    function handleRegistration() {
        setPageToView(true)
        setSecondPage(true)
        setThirdpage(true)
    }

 const divRef = useRef(null);

 useEffect(() => {
   if (divRef.current) {
     window.google.accounts.id.initialize({
     client_id: "156863745387-6b5u4fu2r92lc6v7bulrp01kc9p0bpia.apps.googleusercontent.com",
       callback: (res, error) => {
     localStorage.setItem("gmailLogin", "true");
     setShow(false)
     setToken(true)
         // This is the function that will be executed once the authentication with google is finished
       },
     });
     window.google.accounts.id.renderButton(divRef.current, {
      theme: 'outline',
      size: 'large',
      type: 'standard',
      text: 'signin_with',
      shape: 'rectangular',
      logo_alignment: 'left',
      width: '320',
     });
   }
 }, [divRef.current]);

 var isGmailLogin = localStorage.getItem("gmailLogin");
 var handleLogOut = () => {
     localStorage.clear()
     setToken(false)
 }

 
    return(
        <>
        <Nav className="button-nav">
        <span onClick={handleCart} >{productsCount >0 && <div className="cartCount">{productsCount}</div>}
        <FaCartArrowDown style={{width:"25px", height:"25px", cursor:"pointer"}} />
        </span>
        <FaSistrix style={{width:"25px", height:"25px"}} />
        {!isGmailLogin && <Button className="button" onClick={handleShow} id="logIn">Login</Button>}
        {isGmailLogin && <Button className="button" onClick={handleLogOut}>Sign out</Button>}
        
        {!isGmailLogin && <Button className="button" onClick={handleRegistration}>Register</Button>} 
        </Nav>
        <Modal show={show} onHide={handleClose}>
            <div style={{display:"flex", flexDirection:"column", backgroundColor:"#5F9EA0"}}>
            <Modal.Header closeButton><Modal.Title>Login Page</Modal.Title></Modal.Header>
                <Modal.Body><div style={{display:"flex", alignItems:"center", flexDirection:"column",
                  fontSize:"1.2em"}}><Login setShow={setShow} /><br/>
                </div>
            </Modal.Body>
            </div>
        </Modal>
        </>
    )
}
export default NavButtons