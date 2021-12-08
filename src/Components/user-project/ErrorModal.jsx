import Button from "./Button.jsx";

const ErrorModel = ({title, msg, toggleFalse}) => {
  return (
    <main className="w-screen h-screen bg-black bg-opacity-30 fixed top-0 left-0 flex justify-center items-center z-10">
      <div className="w-2/6 bg-white rounded-md shadow-lg p-4">
        <header className="text-red-600 my-1">
          <h1>Error : {title}</h1>
        </header>
        <section className="text-yellow-300 my-1">
          <p>Message : {msg}</p>
        </section>
        <footer className="text-center mt-2">
          <Button
            className={
              "bg-blue-600 py-2 px-4 mt-2 text-white rounded-md shadow-md border-0 outline-none"
            }
            onClick={toggleFalse}
          >
            Okay
          </Button>
        </footer>
      </div>
    </main>
  );
};

export default ErrorModel;
