import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <h1>Welcome to Ajs React Track</h1>
      <p>Here is some of my mini projects to explore</p>
      <Link to="/react-todo" className="text-blue-600 underline">Mini Todo App</Link>
    </>
  );
}

export default Homepage;