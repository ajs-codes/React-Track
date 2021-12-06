import {useState} from 'react'

function TodoForm({ todos,setTodos }) {
  const [task, setTask] = useState("");
  const addTask = (e) => {
    setTask(e.target.value);
  }
  const addTodo = (e) => {
    e.preventDefault();
    if(task !== "") {
      setTodos([...todos,{text: task, isDone: false}]);
      setTask("");
    }
  }
  return (
    <form className="my-6 flex justify-center">
      <div className="w-2/5 flex gap-2">
        <input
          type="text"
          placeholder="Add your Todo"
          value={task}
          onChange={addTask}
          className="text-xl outline-none py-2 px-4 rounded-md text-gray-600 shadow-md flex-grow"
        />
        <button onClick={addTodo} className="text-white text-xl py-2 px-4 bg-red-500 hover:bg-red-600 rounded-md font-medium shadow-md">
          Add
        </button>
      </div>
    </form>
  );
}
export default TodoForm;
