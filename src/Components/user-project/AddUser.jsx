import { useState } from "react/cjs/react.development";
import Button from "./Button";
const AddUser = () => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      alert("User Name or Age is not entered");
    } else if (age < 1) {
      alert("age should be greater than 0");
    } else {
      setUserName("");
      setAge("");
    }
  };
  const usernameChange = (e) => {
    setUserName(e.target.value);
  };
  const ageChange = (e) => {
    setAge(e.target.value);
  };
  return (
    <section className="w-screen flex justify-center py-10">
      <form
        className="flex flex-col w-2/4 bg-white p-4 rounded-md shadow-lg"
        onSubmit={submitHandler}
      >
        <label htmlFor="username" className="text-blue-600 font-semibold">
          User Name :
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="border-2 border-black rounded-md my-1 p-1"
          value={userName}
          onChange={usernameChange}
        />
        <label htmlFor="age" className="text-blue-600 font-semibold">
          Age :
        </label>
        <input
          type="number"
          name="age"
          id="age"
          className="border-2 border-black rounded-md my-1 p-1"
          value={age}
          onChange={ageChange}
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
