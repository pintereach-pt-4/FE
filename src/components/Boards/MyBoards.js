import React from 'react';
import { connect } from 'react-redux';
import BoardCard from './BoardCard';
import Layout from '../layout';

const MyBoards = props => {
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
		boards: state.Boards.boards,
		userID: state.Auth.user.id
	};
};
export default connect(mapState)(MyBoards);
