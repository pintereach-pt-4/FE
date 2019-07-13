import React from "react";
import "./menu.css";

function menu() {
  return (
    <div className="nav-container">
      <nav className="main-nav">
        <h1 className="nav-logo">Pintereach Logo?</h1>
        <ul className="nav-links">
          <li className="nav-items">Home</li>
          <li className="nav-items">Settings</li>
          <li className="nav-items">Test</li>
          <li className="nav-items">Logout</li>
        </ul>
      </nav>
    </div>
  );
}

export default menu;
