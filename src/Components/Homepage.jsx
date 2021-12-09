import { Link } from "react-router-dom";

function Homepage() {
  return (
    <main className="min-h-screen w-screen">
      <h1>Welcome to Ajs React Track</h1>
      <p>Here is some of my mini projects to explore</p>
      <div className="flex flex-col">
        <Link to="/react-todo" className="text-blue-600 underline">
          Mini Todo App
        </Link>
        <Link to="/framer-motion" className="text-blue-600 underline">
          React Animations
        </Link>
        <Link to="/user-project" className="text-blue-600 underline">
          User Project
        </Link>
        <Link to="/reviews-project" className="text-blue-600 underline">
          Slider Project
        </Link>
      </div>
    </main>
  );
}

export default Homepage;
