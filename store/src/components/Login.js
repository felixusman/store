
import axios from "axios"
import React, { useState, useEffect, useRef } from "react"

function Login({token, setToken, setShow}) {//we destructure our props right here in the method
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [error, setError] = React.useState("")
    

    const loginHandler = () => {
        setError("")
        setPassword("")
        setUsername("")
        axios({
               url: "https://fakestoreapi.com/auth/login",
               method: "POST",
               data: {
                username: username,
                password: password
               }
        }).then(res => {
            console.log(res.data.token)
            localStorage.setItem("gmailLogin", true);
            setToken(true)
        }).catch(err => {
            setError(err.response.data)
            localStorage.clear()
        })
    }

    const divRef = useRef(null);

 useEffect(() => {
   if (divRef.current) {
     window.google.accounts.id.initialize({
     client_id: "156863745387-6b5u4fu2r92lc6v7bulrp01kc9p0bpia.apps.googleusercontent.com",
       callback: (res, error) => {
     localStorage.setItem("gmailLogin", true);
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
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", gap:"0px"}}>
            <br/>
             <input className="login-input" value={username} onChange={(e) => setUsername(e.target.value)} 
             type="text" placeholder="User Name" /><br />
             <input className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} 
             type="text" placeholder="Password" />
             {error && <small style={{color:"red"}}>{error}</small>}<br />
             <button onClick={loginHandler} className="login-btn">Login</button><br />
             <p>Continue with google</p><div ref={divRef} />
        </div>
    )
}
export default Login


//login username: mor_2314
//        password: 83r5^_
//"npm cache clean --force"     run this command when you try to do "npm install" but you are getting error
//this command will fix the error