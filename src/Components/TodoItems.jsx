function TodoItems() {
  return (
    <section className="w-2/5 flex-col gap-2">
      <div className="bg-white text-lg flex shadow rounded-md text-white">
        <div className="py-2 px-4 flex-grow text-gray-600">test1</div>
        <button className="py-2 px-4 bg-green-500 hover:bg-green-600 font-semibold">C</button>
        <button className="py-2 px-4 bg-red-500 hover:bg-red-600 rounded-r-md font-semibold">X</button>
      </div>
    </section>
  );
}

export default TodoItems;
