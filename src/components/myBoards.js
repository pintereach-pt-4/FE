import React from 'react';
import { connect } from 'react-redux';
import BoardCard from './boardCard';
import Layout from './layout';

const myBoards = props => {
	const createdBy = props.boards.filter(
		board => board.created_by_id === props.userID
	);
	return (
		<Layout>
			<div className="card-grid">
				{createdBy.map(board => (
					<BoardCard
						key={board.id}
						title={board.title}
						url={board.url}
						category={board.category}
						description={board.description}
						createdBy={board.created_by_id}
						userID={props.userID}
						boardID={board.id}
					/>
				))}
			</div>
		</Layout>
	);
};
const mapState = state => {
	return {
		boards: state.boards,
		userID: state.user.id
	};
};
export default connect(mapState)(myBoards);
