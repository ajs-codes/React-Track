import React from "react";
import TodoApp from "./components/TodoApp.jsx";
import Homepage from "./components/Homepage.jsx";
import Animation from "./components/Animation.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/react-todo" element={<TodoApp />}/>
          <Route path="/framer-motion" element={<Animation />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
