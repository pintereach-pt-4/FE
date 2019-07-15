import React, { Component } from "react";
import { connect } from "react-redux";
import { addBoard } from "../actions";

class newBoard extends Component {
  state = {
    board: {
      title: "",
      url: "",
      category: "",
      description: ""
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
        title: "",
        url: "",
        category: "",
        description: ""
      }
    });
    this.props.history.push("/boards");
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
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
          <select onChange={this._handleChange} name="category" id="" required>
            <option value="...">...</option>
            <option value="None">None</option>
            <option value="Life">Life</option>
            <option value="Productivity">Productivity</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Other">Other</option>
          </select>
          <span>Category</span>
        </div>
        <div>
          <input
            onChange={this._handleChange}
            type="textarea"
            name="description"
            required
            value={this.state.board.description}
          />
          <span>Description</span>
        </div>
        <button className="btn btn-form " type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  { addBoard }
)(newBoard);
