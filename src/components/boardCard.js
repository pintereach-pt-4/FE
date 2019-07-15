import React from "react";
import "./board.css";
import { connect } from "react-redux";
import { deleteBoard } from "../actions";
import { Link } from "react-router-dom";

function boardCard({
  title,
  url,
  category,
  description,
  userID,
  boardID,
  createdBy,
  deleteBoard
}) {
  const _handleDelete = e => {
    deleteBoard(boardID);
  };

  return (
    <div className="card-container">
      <h1 className="card-title">{title}</h1>
      {userID === createdBy ? (
        <div>
          <button onClick={_handleDelete}>Delete</button>
          <Link to={`/edit-board/${boardID}`}>Edit</Link>
        </div>
      ) : null}
      <p className="card-article">
        Article:
        <a target="_blank" href={`${url}`} rel="noopener noreferrer">
          Read
        </a>
      </p>
      <p>{description}</p>
      <p className="card-category-container">
        Category:
        <span className="card-category">{category}</span>
      </p>
    </div>
  );
}

export default connect(
  null,
  { deleteBoard }
)(boardCard);
