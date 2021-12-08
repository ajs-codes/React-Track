import Button from "./Button";
const AddUser = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="w-screen flex justify-center py-10">
      <form
        className="flex flex-col w-2/4 bg-white p-4 rounded-md shadow-lg"
        onSubmit={submitHandler}
      >
        <label htmlFor="username" className="text-blue-600 font-semibold">
          User Name :{" "}
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="border-2 border-black rounded-md my-1 p-1"
        />
        <label htmlFor="age" className="text-blue-600 font-semibold">
          Age :
        </label>
        <input
          type="number"
          name="age"
          id="age"
          className="border-2 border-black rounded-md my-1 p-1"
        />
        <div className="text-center">
          <Button
            className={
              "bg-blue-600 py-2 px-4 mt-2 text-white rounded-md shadow-md border-0 outline-none"
            }
            type={"submit"}
            onClick={submitHandler}
          >
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};
export default AddUser;
