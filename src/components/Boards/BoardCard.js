import React from 'react';
import './board.css';
import { connect } from 'react-redux';
import { deleteBoard } from '../../actions';
import { Link } from 'react-router-dom';

function BoardCard({
	title,
	url,
	category,
	description,
	userID,
	boardID,
	createdBy,
	deleteBoard
}) {
	const _handleDelete = e => {
		deleteBoard(boardID);
	};

	const _handleExcerpt = text => {
		if (text.length >= 100) {
			return text.slice(0, 100).concat('...');
		}
		return text;
	};

	return (
		<div className="card-container">
			<h1 className="card-title">{title}</h1>
			<p className="card-article">
				Article:
				<a target="_blank" href={`${url}`} rel="noopener noreferrer">
					Read
				</a>
			</p>
			<p>{_handleExcerpt(description)}</p>
			<p className="card-category-container">
				Category:
				<span className="card-category">{category}</span>
			</p>
			<div className="card-buttons">
				<Link to={`/board-details/${boardID}`}>View Board</Link>
				{userID === createdBy ? (
					<>
						<button onClick={_handleDelete}>Delete</button>
						<Link to={`/edit-board/${boardID}`}>Edit</Link>
					</>
				) : null}
			</div>
		</div>
	);
}

export default connect(
	null,
	{ deleteBoard }
)(BoardCard);
