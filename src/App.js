import React from "react";

import Header from "./components/Header.jsx";
import User from "./components/User.jsx"
import Person from "./components/Person.jsx";

function App() {
  let userName = ["Sharan AJ","Ravi kumar K","Sairam S","Karthic Raja LV"];
  let name = "Sharan"
  return (
    <div className="h-screen w-screen">
      <Header title="Welcome To My First React Application" />
      <User names={userName}/>
      <Person name={name} msg={"Welcome to this react track "+ name}/>
    </div>
  );
}

export default App;
