import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import logo from "../Home/logo.svg";
import "./Navbar.css"

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear the authentication data
    localStorage.removeItem("token");
    // Navigate to the login page
    navigate("/login");
  };
  return (
    <nav className="topnav">
      <div className="navtitle">
        <img
          src={logo}
          width="60px"
          height="48px"
          id="logo"
          alt="Logo image"
          style={{ marginLeft: "10px" }}
        />
        Profile Managment Tool{" "}
      </div>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <span className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </span>
      </label>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/home" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/AddRecord">Add Profile</Link>
          </li>
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faSignOut}
              onClick={handleLogout}
              style={{ color: "#db2e3f" }}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
