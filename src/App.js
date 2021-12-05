import React from "react";
import TodoApp from "./Components/TodoApp.jsx";
import Homepage from "./Components/Homepage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="h-screen w-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/react-todo" element={<TodoApp />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
