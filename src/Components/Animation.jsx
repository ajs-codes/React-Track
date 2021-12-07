import pic from "../pic.jpg";
const Animation = () => {
  return (
    <main className="min-h-screen w-screen flex flex-col items-center bg-blue-300">
      <h1 className="text-center py-12 text-4xl font-semibold text-white">
        Animate Using Framer Motions
      </h1>
      <div className="h-3/4 w-1/4">
        <figure class="bg-gray-100 rounded-xl p-8">
          <div
            style={{ backgroundImage: `url(${pic})` }}
            className="h-36 w-36 rounded-full bg-center bg-cover mx-auto"
          ></div>
          <div class="pt-6 space-y-4">
            <blockquote>
              <p class="text-lg font-semibold">
                “Tailwind CSS is the only framework that I've seen scale on
                large teams. It’s easy to customize, adapts to any design, and
                the build size is tiny.”
              </p>
            </blockquote>
            <figcaption cl>
              <div>Sarah Dayan</div>
              <div>Staff Engineer, Algolia</div>
            </figcaption>
          </div>
        </figure>
      </div>
    </main>
  );
};
export default Animation;
