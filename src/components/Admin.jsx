import React from "react";
import "./admin.css";

const Admin = () => {
    return (
        <div className="admin">
            <div className="adminWrapper">
                <div className="adminLeft">
                    <h3 className="adminLogo"><span style={{color: "green", fontSize: "90px"}}><b>F</b></span>arm-<span  style={{color: "red", fontSize: "90px"}}><b>H</b></span>UB</h3>
                    <span className="adminDesc" style={{color: "white"}}>
                    Where Seeds of Collaboration Grow into Bountiful Harvests of Success.
                </span>
                </div>
                <div className="adminRight">
                <div className="adminBox">
                 
                    <div className="adminbottom">
                        <form className="adminbottomBox">
                        <h2 className="headcent">ADMINISTRATOR</h2> 
                            <input type="email" placeholder="Email" id="email" className="adminInput" required />
                            <input type="password" placeholder="Password" id="password" className="adminInput" required />
                            <div class="remember-forget">
                            <label><input type="checkbox"/>Remember me</label>
                            <a href="#">Forgot Password?</a>
                        </div>
                         <button type="submit" className="adminButton">Sign In</button>
                        </form>
                    </div> 
                </div>
            </div>
            </div>
         </div>
      )
    }

export default Admin




