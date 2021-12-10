import React from "react";
import { Routes, Route } from "react-router-dom";

// importing components
import TodoApp from "./components/todo/TodoApp.jsx";
import Homepage from "./components/Homepage.jsx";
import Animation from "./components/Animation.jsx";
import UserUi from "./components/user-project/UserUi.jsx";
import Reviews from "./components/reviews-project/Reviews.jsx";
import Slider from "./components/slider/slider.js";
import Useeffect from "./components/Useeffect.jsx";
import Useeffect2 from "./components/Useeffect2.jsx";
import ContextUi from "./components/context-project/ContextUi.jsx";
function Routing() {
  return (
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/react-todo" element={<TodoApp />}/>
          <Route path="/framer-motion" element={<Animation />}/>
          <Route path="user-project" element={<UserUi/>} />
          <Route path="/reviews-project" element={<Reviews/>}/>
          <Route path="/slider-project" element={<Slider/>}/>
          <Route path="/use-effect" element={<Useeffect/>}/>
          <Route path="/use-effect-2" element={<Useeffect2/>}/>
          <Route path="/context-project" element={<ContextUi/>}/>
        </Routes>
  );
}

export default Routing;
