import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="profile">
        <img src="" alt="" className="src" />
      </div>
      <div className="container">
        <div className="logo">
         <img src="/images/tomato-logo.png" alt="logo" className="src" />
        </div>
        <div className="searchBar">
          <input type="search" placeholder="search products" />
          <button className="search-btn">Search</button>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About Us</a></li>
          <li><Link to="/map">Map</Link></li>
        </ul> 
        <Link to="/login">
        <button type="submit" className="btn">Login</button>
        </Link>
        <img src="/images/user1.jpg" alt="img" className="navProfile" />
      </div>
      <div className="container2">
        <div className="LocationBar">
          <input className="location-input" type="search" placeholder="search city" />
          <button className="Location-search-btn">Search</button>
        </div>
        <ul className="Place-links">
          {/* <li><a href="/">chennai</a></li>
          <li><a href="/">Bengaluru</a></li>
          <li><a href="/">Pune</a></li>
          <li><a href="/">Delhi</a></li> */}
          <button className="cityList">Chennai</button>
          <button className="cityList">Bengaluru</button>
          <button className="cityList">Pune</button>
          <button className="cityList">Delhi</button>
        </ul> 
      </div>
    </nav>
  )
}

export default Navbar
