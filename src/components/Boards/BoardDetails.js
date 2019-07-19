import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editBoard } from '../../actions/index';
import { Link } from 'react-router-dom';
let md = require('markdown-it')('commonmark');

class BoardDetails extends Component {
	state = {
		board: { title: '', url: '', category: '', description: '', notes: 'hi' }
	};

	_handleChange = e => {
		this.setState({ board: { ...this.state.board, notes: e.target.value } });
	};
	_handleSubmit = e => {
		e.preventDefault();
		this.props.editBoard(this.props.match.params.id, this.state.board);
	};
	render() {
		return (
			<div className="md-area">
				<nav className="md-nav">
					<h1>Pintereach Logo?</h1>
					<ul>
						<li>
							<Link to="/boards">Home</Link>
						</li>
						<li>
							<Link to="/my-boards">My Boards</Link>
						</li>
					</ul>
				</nav>
				<div className="md-content">
					<div className="board-details">
						<div>
							<h1>{this.state.board.title}</h1>
							<p>{this.state.board.description}</p>
							<p>Category: {this.state.board.category}</p>
							<p>
								Article <a href={this.state.board.url}>Read</a>
							</p>
						</div>
						{this.props.user.id === this.state.board.created_by_id ? (
							<>
								<div>
									<textarea
										className="notes-handler"
										onChange={this._handleChange}
										value={this.state.board.notes}
										name="notes"
										id=""
										cols="47"
										rows="10"
									/>
								</div>
								<div>
									<button
										className="btn-form submit"
										onClick={this._handleSubmit}
									>
										Save Board
									</button>
								</div>
							</>
						) : null}
					</div>
					<div className="md-details">
						<h1>Notes Preview</h1>
						<div className="note-details">
							<div
								className="test"
								dangerouslySetInnerHTML={{
									__html: md.render(this.state.board.notes)
								}}
							/>
						</div>
					</div>
				</div>
				<div className="md-footer">&copy; Copyright 2019</div>
			</div>
		);
	}
	componentDidMount() {
		this.setState({
			board: { ...this.props.board[0] }
		});
	}
}

const mapState = (state, ownProp) => {
	return {
		board: state.boards.filter(
			board => `${board.id}` === ownProp.match.params.id
		),
		user: state.user
	};
};

export default connect(
	mapState,
	{ editBoard }
)(BoardDetails);
