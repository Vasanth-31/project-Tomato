import React from "react";
import "./farmerregistration.css";
import { Link } from "react-router-dom";

const FarmerRegistration = () => {
    return (
        <div className="farmerregister">
        <div className="farmerregisterWrapper">
            <div className="farmerregisterLeft">
                <h3 className="farmerregisterLogo"><span style={{color: "green", fontSize: "90px"}}><b>F</b></span>arm-<span  style={{color: "red", fontSize: "90px"}}><b>H</b></span>UB</h3>
                <span className="farmerregisterDesc" style={{color: "white"}}>
                Where Seeds of Collaboration Grow into Bountiful Harvests of Success.
                </span>
            </div>
            <div className="farmerregisterRight">
                <div className="farmerregisterBox">
                    <div className="farmerbottom"> 
                        <form className="farmerbottomBox">
                            <h1 className="headcent">FARMER-REGISTRATION</h1>
                            <input type="text" placeholder="Username" id="username" className="farmerregisterInput" required />
                            <input type="email" placeholder="Email" id="email" className="farmerregisterInput" required />
                            <input type="password" placeholder="Password" id="password" className="farmerregisterInput" minLength={6} required />
                            {/* <input type="password" placeholder="Confirm Password" id="confirmpassword" className="registerInput" required /> */}
                            
                        <Link to="/">
                        <button type="submit" className="registerButton">Sign Up</button>
                        </Link>
                        <Link to="/farmer-login">
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

export default FarmerRegistration
