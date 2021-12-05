import { Link } from "react-router-dom";

function TodoApp() {
  return (
    <>
      <h1>hello world</h1>
      <Link to="/" className="text-blue-600 underline">Back to Homepage</Link>
    </>
  );
}

export default TodoApp;
