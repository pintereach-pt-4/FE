import React from "react";
import "./App.css";
import Register from "./components/register";
import Login from "./components/login";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/login" component={props => <Login {...props} />} />
      <Route path="/register" component={props => <Register {...props} />} />
    </Router>
  );
}

export default App;
