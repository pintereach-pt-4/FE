import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { Link } from 'react-router-dom';
import './form.css';

class LoginForm extends Component {
	state = {
		credentials: {
			username: '',
			password: ''
		}
	};
	_handleChange = e => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		});
	};
	_handleSubmit = e => {
		e.preventDefault();
		this.props
			.login(this.state.credentials)
			.then(res => setTimeout(()=>{this.props.history.push('/boards')},1500))
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		return (
			<div className="form-container">
				{/* <img
          className="bottom-bg"
          src={require("../images/bottom.svg")}
          alt="bottom"
        />
        <img className="top-bg" src={require("../images/top.svg")} alt="top" /> */}
				<form className="l-form" onSubmit={this._handleSubmit}>
					<h1 className="form-title">Login</h1>
					<div>
						<input
							onChange={this._handleChange}
							type="text"
							placeholder="username"
							value={this.state.credentials.username}
							required
							autoComplete="off"
							name="username"
						/>
					</div>
					<div>
						<input
							onChange={this._handleChange}
							type="password"
							placeholder="password"
							value={this.state.credentials.password}
							required
							autoComplete="off"
							name="password"
						/>
					</div>
					<div className={`form-message ${this.props.status}`}>
						{this.props.message}
					</div>
					<button className="btn-form submit" type="submit">
						Login
					</button>
					<span className="form-extra">
						<Link to="/register"> Sign Up</Link>
					</span>
				</form>
			</div>
		);
	}
}

const mapState =state=>{
	return {
		message: state.Auth.message,
		status: state.Auth.status
	}
}

export default connect(
	mapState,
	{ login }
)(LoginForm);
