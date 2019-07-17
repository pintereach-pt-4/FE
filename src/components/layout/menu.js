import React from "react";
import "./menu.css";

import { withRouter } from "react-router-dom";

function menu(props) {
  const _handleClick = e => {
    e.preventDefault();
    localStorage.removeItem("user_id");
    localStorage.removeItem("token");
    props.history.push("/");
  };
  return (
    <div className="nav-container">
      <nav className="main-nav">
        <h1 className="nav-logo">Pintereach Logo?</h1>
        <ul className="nav-links">
          <li className="nav-items">Home</li>
          <li className="nav-items">Settings</li>
          <li className="nav-items">Test</li>
          <li onClick={_handleClick} className="nav-items">
            Logout
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default withRouter(menu);
