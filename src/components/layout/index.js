import React from 'react';
import './layout.css';
import Menu from './Menu';
import Footer from './Footer';
import SideMenu from './SideMenu';

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
