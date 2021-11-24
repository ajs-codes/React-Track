import React from "react";

import Header from "./components/Header.jsx";
import User from "./components/User.jsx"

function App() {
  let userName = ["Sharan AJ","Ravi kumar K","Sairam S","Karthic Raja LV"];
  return (
    <div className="h-screen w-screen">
      <Header title="Welcome To My First React Application" />
      <User names={userName}/>
    </div>
  );
}

export default App;
