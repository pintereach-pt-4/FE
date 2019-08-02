import React from "react";
import { connect } from "react-redux";

const Search = props => {
  return (
    <div className="search-nav">
      <input
        className="search-bar"
        onChange={e => props.search(e.target.value)}
        type="text"
        placeholder="Search"
        value={props.filter}
      />
    </div>
  );
};

const MapState = state => {
  return {
    filter: state.Filter.filter
  };
};

const MapDispatch = dispatch => {
  return {
    search: value => {
      dispatch({ type: "SET_FILTER", payload: value });
    }
  };
};

export default connect(
  MapState,
  MapDispatch
)(Search);
