import pic from "../pic.jpg";
import { motion } from "framer-motion";
const Animation = () => {
  return (
    <main className="min-h-screen w-screen flex flex-col items-center bg-blue-300">
      <motion.h1
        animate={{ scale: 1.2, color: "#1E40AF" }}
        transition={{ duration: 0.5 }}
        className="text-center py-12 text-4xl font-semibold text-white"
      >
        Animate Using Framer Motions
      </motion.h1>
      <motion.div initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.3, ease: "linear"}} className="h-3/4 w-1/4 mt-4">
        <figure className="bg-gray-100 rounded-xl p-8">
          <div
            style={{ backgroundImage: `url(${pic})` }}
            className="h-36 w-36 rounded-full bg-center bg-cover mx-auto"
          ></div>
          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg font-semibold italic">
                “Tailwind CSS is the only framework that I've seen scale on
                large teams. It’s easy to customize, adapts to any design, and
                the build size is tiny.”
              </p>
            </blockquote>
            <motion.figcaption
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut",delay: 0.5 }}
            >
              <div>Sarah Dayan</div>
              <div>Staff Engineer, Algolia</div>
            </motion.figcaption>
          </div>
        </figure>
      </motion.div>
    </main>
  );
};
export default Animation;
