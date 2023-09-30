import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
    <div className="registerWrapper">
        <div className="registerLeft">
            <h3 className="registerLogo"><span style={{color: "green", fontSize: "90px"}}><b>F</b></span>arm-<span  style={{color: "red", fontSize: "90px"}}><b>H</b></span>UB</h3>
            <span className="registerDesc" style={{color: "white"}}>
            Where Seeds of Collaboration Grow into Bountiful Harvests of Success.
            </span>
        </div>
        <div className="registerRight">
            <div className="registerBox">
                <div className="bottom"> 
                    <form className="bottomBox">
                        <h1 className="headcent">REGISTRATION</h1>
                        <input type="text" placeholder="Username" id="username" className="registerInput" required />
                        <input type="email" placeholder="Email" id="email" className="registerInput" required />
                        <input type="password" placeholder="Password" id="password" className="registerInput" minLength={6} required />
                        {/* <input type="password" placeholder="Confirm Password" id="confirmpassword" className="registerInput" required /> */}
                    <button type="submit" className="registerButton">Sign Up</button>
                    <Link to="/login">
                        <button className="loginRegisterButton">Log into Account</button>
                    </Link>
            
                    </form>
                </div> 
            </div>
        </div>
    </div>
  </div>
  
  )
}

export default Register
