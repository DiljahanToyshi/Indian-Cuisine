import React, { useState } from "react";
import Swal from "sweetalert2";
import {   FaHeart} from 'react-icons/fa';
const RecipeDetails = ({ recipe }) => {
  const [fav, setFav] = useState(false);
  const [fold, setFold] = useState(true);

  const handleFav = () =>{
    setFav(true) ; 
    if(! fav){
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        className: 'text-orange-400',
        title: "It's your favourite!"
      });
    }     
  };
  const {
    strMealThumb,
    price,
    strIngredient1,
    strIngredient3,
    strIngredient2,
    strInstructions,
    strIngredient4,
    strMeal,
    strIngredient5,
  } = recipe;
  return (
    <div className="lg:flex shadow-xl mt-5 lg:mt-14 rounded-lg bg-orange-50 lg:p-10">
      <figure className="self-center h-72 p-5 lg:w-2/5 rounded-lg overflow-hidden">
        <img className=" object-cover  " src={strMealThumb} alt="Album" />
      </figure>
      <div className="text-left p-5 lg:w-3/5 space-y-3">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-orange-600">
          {strMeal}
        </h2>

        <div className="justify-end">
							<div className="flex justify-between">									
              <p><span className="text-2xl font-serif text-tag">Price</span>:{price}Tk     </p>
	
								<div
									onClick={handleFav}
                  className={`text-xl font-semibold flex gap-1 pt-2 pr-2 ${
										fav ? 'text-amber-500 disable=false' : 'text-gray-400'
									}`}
								>
									<FaHeart /></div>
						</div>
						</div>
           <div className="">        <span className="text-2xl font-serif text-tag">Ingredients:</span>
        <a> {strIngredient1}</a>,<a> {strIngredient2}</a>,
        <a> {strIngredient3}</a>,<a> {strIngredient4}</a>,
        <a> {strIngredient5}</a></div>
        <div className="justify-start ">
          {" "}
          {fold ? (
            <>
              <p className="">
                {" "}
                <span className="text-2xl font-serif text-tag">
                  Instruction:
                </span>
                { strInstructions.substring(0, 100)}.....
              </p>
              <span
                className="cursor-pointer font-medium text-orange-500 "
                onClick={() => setFold(!fold)}
              >
                Read More
              </span>
            </>
          ) : (
            <>
              <p className="">
                {" "}
                <span className="text-2xl font-serif text-tag">
                  Instruction:
                </span>
                {strInstructions}
              </p>
              <span
                className="cursor-pointer font-medium text-orange-500 "
                onClick={() => setFold(!fold)}
              >
                Read Less
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
