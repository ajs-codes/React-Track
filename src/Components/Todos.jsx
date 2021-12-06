function Todos({ todo, id, todos, setTodos }) {
  return (
    <div className="bg-white text-lg flex shadow rounded-md text-white my-2">
      {todo.isdone ? (
        <div className="py-2 px-4 flex-grow text-gray-600 line-through">
          {todo.text}
        </div>
      ) : (
        <div className="py-2 px-4 flex-grow text-gray-600">{todo.text}</div>
      )}

      <button className="py-2 px-4 bg-green-500 hover:bg-green-600 font-semibold">
        C
      </button>
      <button className="py-2 px-4 bg-red-500 hover:bg-red-600 rounded-r-md font-semibold">
        X
      </button>
    </div>
  );
}
export default Todos;
