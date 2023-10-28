import React from 'react'
import "./navbar.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogo = () => {
    navigate("/");
  };
  const handlePost = () => {
    navigate("/");
  };
  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo" onClick={handleLogo}>Tomeris's Twitter Clone</span>
            <div className="navItems">
                <button className="navButton" onClick={handlePost}>Post</button>
                <button className="navButton" onClick={handleProfile}>Profile</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar;