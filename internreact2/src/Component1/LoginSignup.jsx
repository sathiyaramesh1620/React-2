import React, { useState } from 'react'
import email from '../assets/email.png'
import user from "../assets/person.png"
import password from "../assets/password.png"
import "../Component1/LoginSignup.css"
const LoginSignup = () => {

    const [action, setAction] = useState("Login")
    return (
        <div className="container1">
            <div className="header1">
                <div className="text1">
                    {action}
                </div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action === "Login" ? <div></div> :
                    <div className="input1">
                        <img src={user} alt="" />
                        <input type="text" placeholder='Name' />
                    </div>}


                   
                <div className="input1">
                    <img src={email} alt="" />
                    <input type="email" placeholder='Email Id' />
                </div>
                <div className="input1">
                    <img src={password} alt="" />
                    <input type="password" placeholder='Password' />
                </div>

                {/* {action==="Sign up"?<></>:                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>} */}

                <div className="submit-container">
                <div className={action === "Sign Up" ? "submit1 gray" : "submit1"} onClick={() => { setAction("Login") }} >Login</div>
                    <div className={action === 'Login' ? "submit1 gray" : "submit1"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>

                </div>
            </div>
        </div>


    )
}

export default LoginSignup