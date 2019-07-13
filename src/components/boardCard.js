import React from "react";
import "./board.css";

function boardCard({ title, url, category, description }) {
  return (
    <div className="card-container">
      <h1 className="card-title">{title}</h1>
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

export default boardCard;
