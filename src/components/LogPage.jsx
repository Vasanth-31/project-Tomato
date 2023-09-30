import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const LogPage = () => {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo"><span style={{color: "green", fontSize: "90px"}}><b>F</b></span>arm-<span  style={{color: "red", fontSize: "90px"}}><b>H</b></span>UB</h3>
                <span className="loginDesc" style={{color: "white"}}>
                Where Seeds of Collaboration Grow into Bountiful Harvests of Success.
            </span>
            <Link to="/admin">
            <button className="btn-class">Admin</button>
            </Link>    
            <Link to="/farmer-login">
            <button className="btn-class2">Farmer</button>
            </Link>
            </div>
            <div className="loginRight">
            <div className="loginBox">
             
                <div className="bottom">
                    <form className="bottomBox">
                    <h2 className="headcent">LOGIN</h2> 
                        <input type="email" placeholder="Email" id="email" className="loginInput" required />
                        <input type="password" placeholder="Password" id="password" className="loginInput" required />
                        <div class="remember-forget">
                        <label><input type="checkbox"/>Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>
                     <button type="submit" className="loginButton">Sign In</button>
                <Link to='/register'>
                    <button className="loginRegisterButton">Create a New Account</button>
                </Link>
                    </form>
                </div> 
            </div>
        </div>
        </div>
     </div>
  )
}

export default LogPage



