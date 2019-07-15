import React, { Component } from "react";
import { connect } from "react-redux";
import { getBoards } from "../actions";
import Layout from "./layout";
import BoardCard from "./boardCard";
import "./board.css";

class boardsItem extends Component {
  componentDidMount() {
    this.props.getBoards();
  }
  render() {
    if (!this.props.boards) {
      return (
        <Layout>
          <h1>Loading...</h1>
        </Layout>
      );
    } else {
      return (
        <Layout>
          <div className="card-grid">
            {this.props.boards.map(board => (
              <BoardCard
                key={board.id}
                title={board.title}
                url={board.url}
                category={board.category}
                description={board.description}
                createdBy={board.created_by_id}
                userID={this.props.userID}
                boardID={board.id}
              />
            ))}
          </div>
        </Layout>
      );
    }
  }
}

const mapState = state => {
  return {
    boards: state.allBoards,
    userID: state.user.id
  };
};

export default connect(
  mapState,
  { getBoards }
)(boardsItem);
