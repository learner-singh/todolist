import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul className="nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/registration">Sign Up</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
