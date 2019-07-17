import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../actions";

function filterTabs(props) {
  return (
    <div className="tabs-container">
      {props.tabs.map((tab, i) => (
        <p onClick={() => props.setFilter(tab)} key={i}>
          {tab}
        </p>
      ))}
    </div>
  );
}

const mapState = state => {
  return { tabs: state.tabs };
};

export default connect(
  mapState,
  { setFilter }
)(filterTabs);
