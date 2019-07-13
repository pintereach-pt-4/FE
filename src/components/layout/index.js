import React from "react";
import "./menu.css";
import Menu from "./menu";
import Footer from "./footer";

export default props => {
  return (
    <div className="layout-container">
      <Menu />
      <div className="main-content">{props.children}</div>
      <Footer />
    </div>
  );
};
