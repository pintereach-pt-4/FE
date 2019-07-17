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
      const filteredBoard = this.props.boards.filter(board => {
        if (this.props.filter === "All") {
          return board;
        } else {
          return board.category === this.props.filter;
        }
      });
      return (
        <Layout>
          <div className="card-grid">
            {filteredBoard.map(board => (
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
    userID: state.user.id,
    filter: state.filter
  };
};

export default connect(
  mapState,
  { getBoards }
)(boardsItem);
