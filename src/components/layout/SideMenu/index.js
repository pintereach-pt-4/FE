import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logOut } from '../../../actions';

function index(props) {
	const _handleClick = e => {
		e.preventDefault();
		props.logOut();
		props.history.push('/');
	};
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
						{' '}
						<Link to="/my-boards">My Boards</Link>
					</li>
					<div className="side-menu-profile-links">
						<li>
							<Link to="/settings">Settings</Link>
						</li>
						<li onClick={_handleClick} className="nav-items">
							Logout
						</li>
					</div>
				</ul>
			</div>
		</div>
	);
}

const mapState = state => {
	return {
		user: state.user
	};
};
const wrappedSideMenu = withRouter(index);
export default connect(
	mapState,
	{ logOut }
)(wrappedSideMenu);
