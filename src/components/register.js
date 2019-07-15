import React, { Component } from "react";
import { register } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class registerForm extends Component {
  state = {
    newUser: {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    }
  };
  _handleChange = e => {
    this.setState({
      newUser: { ...this.state.newUser, [e.target.name]: e.target.value }
    });
  };
  _handleSubmit = e => {
    e.preventDefault();
    this.props.register(this.state.newUser);
    this.setState({
      newUser: {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: ""
      }
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="form-container">
        <form className="l-form r-form" onSubmit={this._handleSubmit}>
          <h1 className="form-title">Sign Up</h1>
          <div>
            <input
              onChange={this._handleChange}
              type="text"
              // placeholder=""
              value={this.state.newUser.username}
              required
              autoComplete="off"
              name="username"
            />
            <span>Username</span>
          </div>
          <div>
            <input
              onChange={this._handleChange}
              type="text"
              value={this.state.newUser.first_name}
              required
              autoComplete="off"
              name="first_name"
            />
            <span>First Name</span>
          </div>
          <div>
            <input
              onChange={this._handleChange}
              type="text"
              value={this.state.newUser.last_name}
              required
              autoComplete="off"
              name="last_name"
            />
            <span>Last Name</span>
          </div>
          <div>
            <input
              onChange={this._handleChange}
              type="password"
              value={this.state.newUser.password}
              required
              autoComplete="off"
              name="password"
            />
            <span>Password</span>
          </div>
          <div>
            <input
              onChange={this._handleChange}
              type="email"
              value={this.state.email}
              required
              autoComplete="off"
              name="email"
            />
            <span>Email</span>
          </div>
          <button className="btn btn-form " type="submit">
            register
          </button>
          <span className="form-extra">
            <p>
              Have an account ?<Link to="/"> Login</Link>
            </p>
          </span>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { register }
)(registerForm);
