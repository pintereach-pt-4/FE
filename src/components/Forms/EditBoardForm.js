import React, { Component } from 'react';
import Layout from '../layout';

import { editBoard, getBoards } from '../../actions';
import { connect } from 'react-redux';

class EditBoardForm extends Component {
	state = {
		board: {
			title: '',
			url: '',
			category: '',
			description: ''
		}
	};
	_handleChange = e => {
		this.setState({
			board: { ...this.state.board, [e.target.name]: e.target.value }
		});
	};

	_handleSubmit = e => {
		e.preventDefault();
		this.props.editBoard(this.props.match.params.id, this.state.board);
		this.props.getBoards();
		setTimeout(this.props.history.push('/boards'), 1500);
	};
	_handleCancel = e => {
		e.preventDefault();
		this.props.history.push('/boards');
	};
	render() {
		return (
			<Layout>
				<div className="form-container">
					<form className="l-form" onSubmit={this._handleSubmit}>
						<h1 className="form-title">Edit Board</h1>
						<div>
							<input
								onChange={this._handleChange}
								type="text"
								name="title"
								required
								value={this.state.board.title}
							/>
							<span>Title</span>
						</div>
						<div>
							<input
								onChange={this._handleChange}
								type="url"
								name="url"
								required
								value={this.state.board.url}
							/>
							<span>Url</span>
						</div>
						<div>
							<select onChange={this._handleChange} name="category">
								<option value="...">Category...</option>
								<option value="Life">Life</option>
								<option value="Productivity">Productivity</option>
								<option value="Computer Science">Computer Science</option>
								<option value="Other">Other</option>
							</select>
						</div>
						<div>
							<textarea
								onChange={this._handleChange}
								type="textarea"
								name="description"
								required
								value={this.state.board.description}
								placeholder="Description"
							/>
						</div>
						<div className="btn-container">
							<button
								className="btn-form btn-cancel"
								onClick={this._handleCancel}
							>
								Cancel
							</button>
							<button className="btn-form btn-submit " type="submit">
								Done
							</button>
						</div>
					</form>
				</div>
			</Layout>
		);
	}
	componentDidMount() {
		this.setState({ board: { ...this.props.board[0] } });
	}
}

const mapState = (state, ownProp) => {
	return {
		board: state.Boards.boards.filter(
			board => `${board.id}` === ownProp.match.params.id
		)
	};
};

export default connect(
	mapState,
	{ editBoard, getBoards }
)(EditBoardForm);
