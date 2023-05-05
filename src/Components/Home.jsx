import React, { useEffect, useState } from "react";
import LeftNav from "./LefNav";
import Review from "./Review";
import Service from "./Service";
const Home = () => {
  const [meals, setMeals] = useState([]);
  const [showAll, setShowALl] = useState(false);
  const handleShowALl = () => {
    setShowALl(true);
  };
  useEffect(() => {
    fetch("https://assignment-10-server-diljahantoyshi.vercel.app/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className='md:container sm:mx-auto md:ml-24 bg-[url("https://i.ibb.co/F4fNdtJ/download.jpg")] bg-no-repeat bg-cover bg-fixed w-full h-full '>
      {" "}
      <div className="grid gap-6 mb-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-lg">
        {meals.slice(0, showAll ? 12 : 6).map((meal) => (
          <div
            key={meal.id}
            className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl"
          >
            <img
              className="object-fill w-full h-56 md:h-56 xl:h-80"
              src={meal.strMealThumb}
              alt=""
            />
            <div className="bg-amber-700 px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 pt-32 text-center ">
              <p className="font-serif text-2xl ">{meal.strMeal}</p>

              <p className="mt-auto">Price: {meal.price}TK</p>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="text-center">
          <button
            onClick={handleShowALl}
            className="bg-amber-400 sm:ml-2  text-white rounded-md px-3 py-3"
          >
            Show All
          </button>
        </div>
      )}
      <div className="text-center">
        {" "}
        <LeftNav></LeftNav>
      </div>
      <div>
        <h2 className="text-4xl mt-14 m-5 text-center font-serif text-amber-700">
          Our Client Reviews{" "}
        </h2>
        <Review></Review>
      </div>
      <div>
        <h2 className="text-4xl mt-14 m-5 text-center font-serif text-amber-700">
          Our Services{" "}
        </h2>
        <Service></Service>
      </div>
    </div>
  );
};

export default Home;
