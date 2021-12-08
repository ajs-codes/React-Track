import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Routing from "./App";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routing />
      </Router>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
