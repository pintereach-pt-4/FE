import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBoard } from '../../actions';
import Layout from '../layout';

class NewBoardForm extends Component {
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
		this.props.addBoard(this.state.board);
		this.setState({
			board: {
				title: '',
				url: '',
				category: '',
				description: ''
			}
		});
		this.props.history.push('/boards');
	};
	_handleReset = e => {
		e.preventDefault();
		this.setState({
			board: {
				title: '',
				url: '',
				category: '',
				description: ''
			}
		});
	};

	render() {
		return (
			<Layout>
				<div className="form-container">
					<form className="l-form" onSubmit={this._handleSubmit}>
						<h1 className="form-title">New Board</h1>
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
								<option value="">Category...</option>
								<option value="None">None</option>
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
								type="reset"
								onClick={this._handleReset}
							>
								Cancel
							</button>
							<button className="btn-form btn-submit " type="submit">
								Add
							</button>
						</div>
					</form>
				</div>
			</Layout>
		);
	}
}

export default connect(
	null,
	{ addBoard }
)(NewBoardForm);
