import React from "react";
import "./menu.css";
import Menu from "./menu";
import Footer from "./footer";
import SideMenu from "./sidemenu";

export default props => {
  return (
    <div className="layout-container">
      <Menu />
      <SideMenu />
      <div className="main-content">{props.children}</div>
      <Footer />
    </div>
  );
};
