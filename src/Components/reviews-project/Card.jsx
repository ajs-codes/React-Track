import userData from "./data";
const Card = ({ id, title, msg, setIndex, index }) => {
  function prevData() {
    if (index === 0) {
      setIndex(userData.length - 1);
    } else {
      setIndex((prevIndex) => prevIndex - 1);
    }
  }
  function nextData() {
    if (index === userData.length - 1) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  }

  return (
    <div
      className="bg-white p-6 rounded-md shadow-md w-1/5"
    >
      <article className="text-blue-600 p-6 flex flex-col gap-2 text-center">
        <h4>{id}</h4>
        <h1 className="text-xl">{"Title : " + title}</h1>
        <p className="text-lg">{"Body : " + msg}</p>
      </article>
      <div className="flex justify-between">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={prevData}
        >
          Prev
        </button>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={nextData}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Card;
