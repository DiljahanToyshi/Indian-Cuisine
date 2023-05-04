import React, { useEffect, useState } from 'react';
import LeftNav from './LefNav';
import RightNav from './RightNav';
const Home = () => {
      const [meals, setMeals] = useState([]);
      useEffect(() => {
        fetch("http://localhost:5000/meals")
          .then((res) => res.json())
          .then((data) => setMeals(data))
          .catch((error) => console.log(error));
      }, []);
    return (
      <div className='md:container sm:mx-auto md:ml-24 bg-[url("https://i.ibb.co/F4fNdtJ/download.jpg")] bg-no-repeat bg-cover bg-fixed w-full h-full '>
        <div className="grid gap-6 mb-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-lg">
          {meals.map((meal) => (
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

        <div className="text-center">
          {" "}
          <LeftNav></LeftNav>
        </div>
      </div>
    );
};

export default Home;