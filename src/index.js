import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Routing from "./App";
import { CommentsProvider } from "./components/context-project/CommentsContext";

function App() {
  return (
    <CommentsProvider>
      <React.Fragment>
        <Router>
          <Routing />
        </Router>
      </React.Fragment>
    </CommentsProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
