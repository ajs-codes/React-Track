import { Link } from "react-router-dom";
import TodoItems from "./TodoItems.jsx";
import TodoForm from "./TodoForm.jsx";
import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  return (
    <main className="min-h-screen min-w-screen bg-gradient-to-r from-yellow-300 to-red-400">
      <h1 className="text-center text-4xl text-white font-normal py-10">
        React Todo
      </h1>
      <TodoForm todos={todos} setTodos={setTodos}/>
      <section className="my-6 flex justify-center">
        <TodoItems todos={todos} setTodos={setTodos}/>
      </section>
      <div className="text-center my-4">
        <Link
          to="/"
          className="bg-red-500 hover:bg-red-600 text-white font-medium p-2 text-lg rounded-md shadow-md"
        >
          Back to Homepage
        </Link>
      </div>
    </main>
  );
}

export default TodoApp;
