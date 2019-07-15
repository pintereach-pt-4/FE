import React from "react";
import "./sidemenu.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function sidemenu(props) {
  return (
    <div className="side-menu-container">
      <div className="side-menu">
        <div className="side-menu-profile">
          <h1>{props.user.username}</h1>
          <p>{props.user.firstName}</p>
        </div>
        <ul className="side-menu-links">
          <li className="side-menu-item">
            <Link to="/boards">All Boards</Link>
          </li>
          <li className="side-menu-item">
            <Link to="/new-board">Create Board</Link>
          </li>
          <li className="side-menu-item">
            {" "}
            <Link to="/my-boards">My Boards</Link>
          </li>
        </ul>
      </div>
      {props.children}
    </div>
  );
}

const mapState = state => {
  return {
    user: state.user
  };
};

export default connect(mapState)(sidemenu);
