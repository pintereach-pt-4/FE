import React, { Component } from "react";
import { connect } from "react-redux";

import CreateButtons from "../CreateButtons";
import { getBoards } from "../../actions";
import Layout from "../layout";
import BoardCard from "./BoardCard";
import Pagination from "../Pagination";
import "./board.css";
import FilteredBoards from "./FilteredBoards";

class BoardList extends Component {
  state = { perPage: 6, currentPage: 1 };
  componentDidMount() {
    this.props.getBoards();
  }
  page = number => {
    this.setState({ currentPage: number });
  };
  render() {
    const last = this.state.currentPage * this.state.perPage;
    const first = last - this.state.perPage;
    const currentBoards = this.props.boards.slice(first, last);
    if (this.props.loading) {
      return (
        <Layout>
          <h1>Loading...</h1>
        </Layout>
      );
    } else
      return (
        <Layout>
          {this.props.filter === "" ? (
            <>
              <div className="card-grid">
                {currentBoards.map(board => (
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
              <Pagination
                total={this.props.boards.length}
                perPage={this.state.perPage}
                page={this.page}
                selected={this.state.currentPage}
              />
              <CreateButtons />
            </>
          ) : (
            <FilteredBoards />
          )}
        </Layout>
      );
  }
}

const mapState = state => {
  return {
    boards: state.Boards.boards,
    userID: state.Auth.user.id,
    filter: state.Filter.filter,
    loading: state.Boards.loading
  };
};

export default connect(
  mapState,
  { getBoards }
)(BoardList);
