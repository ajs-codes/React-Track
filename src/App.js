import React from "react";
import TodoApp from "./components/todo/TodoApp.jsx";
import Homepage from "./components/Homepage.jsx";
import Animation from "./components/Animation.jsx";
import UserUi from "./components/user-project/UserUi.jsx";
import Reviews from "./components/reviews-project/Reviews.jsx";
import Slider from "./components/slider/slider.js";
import { Routes, Route } from "react-router-dom";

function Routing() {
  return (
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/react-todo" element={<TodoApp />}/>
          <Route path="/framer-motion" element={<Animation />}/>
          <Route path="user-project" element={<UserUi/>} />
          <Route path="/reviews-project" element={<Reviews/>}/>
          <Route path="/slider-project" element={<Slider/>}/>
        </Routes>
  );
}

export default Routing;
