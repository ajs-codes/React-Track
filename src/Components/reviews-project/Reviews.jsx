import userData from './data'
import Card from "./Card";
import { useState } from 'react/cjs/react.development';
const Reviews = () => {
const [index, setIndex] = useState(0);
const {id,title, body} = userData[index];
  return (
    <main className="bg-blue-200 min-h-screen w-screen font-poppins">
      <header>
        <h1 className="text-center p-12 text-4xl text-blue-600 font-semibold">
          Slider Project
        </h1>
      </header>
      <section className="flex justify-center items-center flex-grow">
        <Card id={id} title={title} msg={body} setIndex={setIndex} index={index}/>
      </section>
    </main>
  );
};

export default Reviews;
