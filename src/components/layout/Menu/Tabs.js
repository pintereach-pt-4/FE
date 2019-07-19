import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../../actions';

function Tabs(props) {
	return (
		<div className="tabs-container">
			{props.tabs.map((tab, i) => (
				<p
					className={props.filter === tab ? 'active' : ''}
					onClick={() => props.setFilter(tab)}
					key={i}
				>
					{tab}
				</p>
			))}
		</div>
	);
}

const mapState = state => {
	return { tabs: state.Filter.tabs, filter: state.Filter.filter };
};

export default connect(
	mapState,
	{ setFilter }
)(Tabs);
