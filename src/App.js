import React from "react";
import "./App.css";
import Register from "./components/register";
import Login from "./components/login";
import Boards from "./components/boardsItem";
import NewBoard from "./components/newBoard";
import MyBoards from "./components/myBoards";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <Router>
        <img
          className="bg-bottom"
          src={require("./images/bottom.svg")}
          alt="bottom"
        />
        <img className="bg-top" src={require("./images/top.svg")} alt="top" />
        <Route path="/" exact component={props => <Login {...props} />} />
        <Route
          path="/register"
          exact
          component={props => <Register {...props} />}
        />
        <Route path="/boards" component={Boards} />
        <Route path="/new-board" component={props => <NewBoard {...props} />} />
        <Route path="/my-boards" component={props => <MyBoards {...props} />} />
      </Router>
    </div>
  );
}

export default App;
