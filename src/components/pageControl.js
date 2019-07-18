import React from "react";
import { connect } from "react-redux";
import { getBoards } from "../actions";

class pageControl extends React.Component {
  state = { counter: 0 };
  nextPage = e => {
    e.preventDefault();
    this.props.getBoards(this.state.counter, 6);
    this.setState({ counter: this.state.counter + 6 });
  };
  prevPage = e => {
    e.preventDefault();
    this.props.getBoards(this.state.counter, 6);
    this.setState({ counter: this.state.counter - 6 });
  };
  render() {
    console.log(this.state.counter);
    return (
      <div className="page-controls">
        <div className="page-controls-container">
          <button onClick={this.prevPage}>Prev</button>
          <button onClick={this.nextPage}>Next</button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getBoards }
)(pageControl);
