import React, { Component } from "react";
import Layout from "./layout";

import { editBoard, getBoards } from "../actions";
import { connect } from "react-redux";

class editBoardForm extends Component {
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
    this.props.editBoard(this.props.match.params.id, this.state.board);
    this.props.getBoards();
    setTimeout(this.props.history.push("/boards"), 1500);
  };
  render() {
    console.log(this.props.board[0]);
    return (
      <Layout>
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
            <select
              onChange={this._handleChange}
              name="category"
              id=""
              required
            >
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
      </Layout>
    );
  }
  componentDidMount() {
    this.setState({ board: { ...this.props.board[0] } });
  }
}

const mapState = (state, ownProp) => {
  return {
    board: state.allBoards.filter(
      board => `${board.id}` === ownProp.match.params.id
    )
  };
};

export default connect(
  mapState,
  { editBoard, getBoards }
)(editBoardForm);
