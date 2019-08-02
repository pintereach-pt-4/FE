import React, { Component } from "react";
import { connect } from "react-redux";

import CreateButtons from "../CreateButtons";
import Layout from "../layout";
import BoardCard from "./BoardCard";
import "./board.css";

class BoardList extends Component {
  render() {
    const filteredBoards = this.props.boards.filter(board => {
      return (
        board.title.toLowerCase().indexOf(this.props.filter.toLowerCase()) !==
        -1
      );
    });
    return (
      <>
        <div className="card-grid">
          {filteredBoards.map(board => (
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
        <CreateButtons />
      </>
    );
  }
}

const mapState = state => {
  return {
    boards: state.Boards.boards,
    userID: state.Auth.user.id,
    filter: state.Filter.filter
  };
};

export default connect(mapState)(BoardList);
