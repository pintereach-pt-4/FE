import React from "react";
import "./menu.css";
import Tabs from "../filterTabs";

import { withRouter } from "react-router-dom";

function menu(props) {
  return (
    <div className="nav-container">
      <nav className="main-nav">
        <h1 className="nav-logo">Pintereach Logo?</h1>
        {/* <input type="text" /> */}
        <Tabs />
      </nav>
    </div>
  );
}

export default withRouter(menu);
