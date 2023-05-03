import { Container } from "postcss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
const LeftNav = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mt-12">
      <h2 className="text-4xl mt-36 mb-20 font-serif text-white">Know Our Chefs </h2>
      <div className="">
        <Marquee>
          {chefs.map((chef) => (
            <div key={chef.id} className="mx-3">
              <img
                className="object-fill w-80 h-56 md:h-56 xl:h-80 rounded-lg mx-1"
                src={chef.Chef_Picture}
                alt=""
              />
              <p>{chef.Chef_Name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LeftNav;
