
import React, { useState } from "react"

function Registration() {
    const [user, setUser] = useState({
                                       Email: "",
                                       username: "",
                                       contact: "",
                                       password: "",
                                      })
    return(
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", gap:"0px"}}>
             <input className="login-input" onChange={(e) => setUser(e.target.value)} 
             type="text" placeholder="Email" /><br />
             <input className="login-input" onChange={(e) => setUser(e.target.value)} 
             type="text" placeholder="User Name" /><br />
             <input className="login-input" onChange={(e) => setUser(e.target.value)} 
             type="text" placeholder="Contact" /><br />
             <input className="login-input" onChange={(e) => setUser(e.target.value)} 
             type="text" placeholder="Password" /><br/>
             <input className="login-input" 
             type="text" placeholder="Confirm password" />
             <button className="login-btn">Submit</button>
        </div>
    )
}
export default Registration