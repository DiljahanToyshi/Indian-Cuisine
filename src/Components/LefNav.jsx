import { Container } from "postcss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
const LeftNav = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-server-diljahantoyshi.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="mt-6 md:mt-12">
      <h2 className=" title-text">
        Know Our Chefs{" "}
      </h2>
      
      <Marquee>
          {chefs.map((chef) => (
            <div key={chef.id} className="mx-3 rounded-lg font-medium text-lg shadow-md bg-orange-200 ">
              <img
                className="object-fill w-80 h-56 xl:h-80 rounded-xl p-4 md:p-6"
                src={chef?.Chef_Picture}
                alt=""
              />
              <div className="text-start ml-4 md:ml-6">
                {" "}
                <p>Name:{chef?.Chef_Name}</p>
                <p>Experience:{chef?.Years_of_experience}Years</p>
                <p>Recipes:{chef?.Numbers_of_recipes}</p>
                <p>Like:{chef?.Likes}</p>
                <Link to={`/chefs/${chef.id}`} className="text-center">
                  <button className="btn-primary px-3 py-3 mb-3 md:mb-5">
                    View Recipes Button
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </Marquee>
    </div>
  );
};

export default LeftNav;
