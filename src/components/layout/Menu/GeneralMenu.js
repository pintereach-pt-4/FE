import React from "react";
import { Link } from "react-router-dom";

const GeneralMenu = () => {
  return (
    <div className="user-nav">
      <li>
        <Link to="/">Login</Link>
      </li>
      <li>
        <Link to="/register">Sign up</Link>
      </li>
    </div>
  );
};

export default GeneralMenu;
