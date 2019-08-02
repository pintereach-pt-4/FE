import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logOut } from "../../../actions";

const UserMenu = props => {
  const _handleClick = e => {
    e.preventDefault();
    props.logOut();
    props.history.push("/");
  };
  return (
    <div className="user-nav">
      <li>
        <Link to="/boards">Home</Link>
      </li>
      <li>
        <Link to="/">Following</Link>
      </li>
      <li>|</li>
      <li>
        <Link to="/my-boards">{props.user}</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
      <li className="logout" onClick={_handleClick}>
        Logout
      </li>
    </div>
  );
};

const MapState = state => {
  return {
    user: state.Auth.user.firstName
  };
};

const wrappedUserMenu = withRouter(UserMenu);
export default connect(
  MapState,
  { logOut }
)(wrappedUserMenu);
