import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Search from "./Search";
import UserMenu from "./UserMenu";
import GeneralMenu from "./GeneralMenu";

function menu(props) {
  return (
    <div className="nav-container">
      <nav className="main-nav">
        <h1 className="nav-logo">
          <Link to="/boards">Pintereach Logo?</Link>
        </h1>
        <Search />
        {props.user === {} ? <GeneralMenu /> : <UserMenu />}
      </nav>
    </div>
  );
}

const MapState = state => {
  return {
    user: state.Auth.user
  };
};

export default connect(MapState)(menu);
