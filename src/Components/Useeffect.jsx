import { useEffect, useState } from "react/cjs/react.development";

const Useeffect = () => {
  const [mediaType, setMediaType] = useState("posts");
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${mediaType}`)
    .then(response => response.json())
    .then(json => setData(json))
  },[mediaType]);
  function eventTrigger(e) {
    setMediaType(e.target.dataset.type);
  }
  return (
    <main>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex gap-4 mt-4 justify-center"
      >
        <button
          className="bg-gray-300 py-2 px-4 hover:bg-gray-600 transition-all duration-200 hover:text-gray-50 rounded-md shadow-sm"
          onClick={(e) => eventTrigger(e)}
          data-type="posts"
        >
          Posts
        </button>
        <button
          className="bg-gray-300 py-2 px-4 hover:bg-gray-600 transition-all duration-200 hover:text-gray-50 rounded-md shadow-sm"
          onClick={(e) => eventTrigger(e)}
          data-type="comments"
        >
          comments
        </button>
        <button
          className="bg-gray-300 py-2 px-4 hover:bg-gray-600 transition-all duration-200 hover:text-gray-50 rounded-md shadow-sm"
          onClick={(e) => eventTrigger(e)}
          data-type="albums"
        >
          albums
        </button>
        <button
          className="bg-gray-300 py-2 px-4 hover:bg-gray-600 transition-all duration-200 hover:text-gray-50 rounded-md shadow-sm"
          onClick={(e) => eventTrigger(e)}
          data-type="todos"
        >
          todos
        </button>
      </form>
      <section className="mt-8">
        <h1 className="text-center text-xl">{mediaType}</h1>
        {data && data.map((item) => (
            <div className="my-2 text-center">{JSON.stringify(item)}</div>
        ))}
        
      </section>
    </main>
  );
};

export default Useeffect;
