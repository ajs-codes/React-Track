import Todos from './Todos.jsx'

function TodoItems({ todos,setTodos }) {
  return (
    <section className="w-2/5 flex-col">
      {todos &&
        todos.map((todo, id) => (
          <Todos key={id} todo={todo} id={id} todos={todos} setTodos={setTodos}/>
        ))}
    </section>
  );
}

export default TodoItems;
