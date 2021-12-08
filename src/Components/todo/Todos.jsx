function Todos({ todo, id, setTodos, todos }) {
  const removeTodo = () => {
    const temp = todos.filter((todos, index) => index !== id);
    setTodos(temp);
  };
  const checkTodo = () => {
    setTodos(todos.map((todo, index) => {
        if(index === id) {
          return {
            ...todo,
            isDone: !todo.isDone
          }
        }
        return todo;
    }));
  };
  return (
    <div className="bg-white text-lg flex shadow rounded-md text-white my-2">
      <div className={`py-2 px-4 flex-grow ${(todo.isDone === true ? 'line-through text-gray-400' : 'text-gray-600')}`}>
          {todo.text}
        </div>
      <button
        onClick={checkTodo}
        className="py-2 px-4 bg-green-500 hover:bg-green-600 font-semibold"
      >
        C
      </button>
      <button
        onClick={removeTodo}
        className="py-2 px-4 bg-red-500 hover:bg-red-600 rounded-r-md font-semibold"
      >
        X
      </button>
    </div>
  );
}
export default Todos;
