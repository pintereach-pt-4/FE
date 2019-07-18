import React, { Component } from 'react';
import { connect } from 'react-redux';
import marked from 'markdown-it';
let md = marked();

class BoardDetails extends Component {
	state = { markDown: '' };

	_handleChange = e => {
		this.setState({ markDown: e.target.value });
	};
	render() {
		console.log(this.state.markDown);
		return (
			<div className="details-container">
				<div className="board-details">
					<div>
						<h1>Boards</h1>
					</div>
					<div>
						<textarea
							onChange={this._handleChange}
							name="notes"
							id=""
							cols="30"
							rows="10"
						/>
					</div>
				</div>
				<div className="notes-section">
					<div>
						<h1>Notes Section</h1>
					</div>
					<div
						dangerouslySetInnerHTML={{ __html: md.render(this.state.markDown) }}
					/>
				</div>
			</div>
		);
	}
}

export default connect(null)(BoardDetails);
