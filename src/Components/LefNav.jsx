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
    <div className="container mt-12">
      <h2 className="text-4xl mt-36 mb-20 font-serif text-white">
        Know Our Chefs{" "}
      </h2>
      <div className="">
        <Marquee>
          {chefs.map((chef) => (
            <div key={chef.id} className="mx-3 text-white">
              <img
                className="object-fill w-80 h-56 md:h-56 xl:h-80 rounded-lg mx-1"
                src={chef.Chef_Picture}
                alt=""
              />
              <div className="text-start md:ml-4">
                {" "}
                <p>Name:{chef.Chef_Name}</p>
                <p>Experience:{chef.Years_of_experience}Years</p>
                <p>Recipes:{chef.Numbers_of_recipes}</p>
                <p>Like:{chef.Likes}</p>
                <Link to={`/chefs/${chef.id}`}>
                  <button className="bg-amber-400 text-white rounded-md px-3 py-3">
                    View Recipes Button
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LeftNav;
