import Todos from './Todos.jsx'

function TodoItems({ todos,setTodos,filterTodos }) {
  return (
    <section className="w-2/5 flex-col">
      {filterTodos &&
        filterTodos.map((todo, id) => (
          <Todos key={id} todo={todo} id={id} setTodos={setTodos} todos={todos}/>
        ))}
    </section>
  );
}

export default TodoItems;
