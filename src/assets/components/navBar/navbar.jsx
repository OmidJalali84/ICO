import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "./../../../assets/logo.png";
import "./nav.css";

const Navbar = ({ children }) => {
  return (
    <div>
      <div className="connect-wallet"> {children}</div>
      <nav>
        <label class="hambmenu">
          <input type="checkbox"></input>
        </label>
        <aside class="sidebar">
          <div className="items">plans</div>
          <div className="items">contact</div>
          <div className="items">info</div>
        </aside>
      </nav>
    </div>
  );
};

export default Navbar;
