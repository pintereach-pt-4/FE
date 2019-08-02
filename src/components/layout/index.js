import React from "react";
import "./layout.css";
import Menu from "./Menu";
import Footer from "./Footer";

export default props => {
  return (
    <div className="layout-container">
      <Menu />
      <div className="main-content">{props.children}</div>
      <Footer />
    </div>
  );
};
