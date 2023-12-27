import { Container } from "postcss";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { AuthContext } from "./providers/AuthProvider";
import { FaThumbsUp } from "react-icons/fa";

const LeftNav = () => {
  const { chefs } = useContext(AuthContext);
  return (
    <div className="mt-6 md:mt-12">
      <h2 className=" title-text">Know Our Chefs </h2>

      <Marquee>
        {chefs.map((chef) => (
          <div
            key={chef?.id}
            className="mx-3 rounded-lg font-medium text-lg shadow-md bg-orange-100 "
          >
            <img
              className="object-fill w-80 h-56 xl:h-80 rounded-xl p-4 md:p-6"
              src={chef?.Chef_Picture}
              alt=""
            />
            <div className="text-start ml-4 md:ml-6">
              {" "}
              <p className=" text-2xl font-medium text-yellow-400">
                {chef?.Chef_Name}
              </p>
              <p>Experience: {chef?.Years_of_experience}Years</p>
              <p>Signature Recipes: {chef?.Numbers_of_recipes} Items</p>
              <div className="flex items-center justify-between pb-3 md:pb-5 lg:pb-7">
                <div>
                  {" "}
                  <p className="text-2xl font-medium text-yellow-400 flex gap-1">
                    <FaThumbsUp />
<span className="ml-2 ">                    {chef?.Likes}K
</span>                  </p>
                </div>{" "}
                <Link to={`/chefs/${chef.id}`} className="text-center">
                  <button className="btn-primary px-3 py-3 ">
                    View Recipes
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LeftNav;
