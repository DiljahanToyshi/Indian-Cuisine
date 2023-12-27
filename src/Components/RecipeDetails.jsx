import React, { useState } from 'react';
import Swal from 'sweetalert2';


const RecipeDetails = ({recipe}) => {
    // console.log(recipe);
        const [store, setStore] = useState([]);
        const [fold, setFold] = useState(true)

    const favourite = recipe => {
      console.log(recipe);
        const exists = store.find(fav => fav.id === recipe.id);
        if (exists) {
            Swal.fire("the recipe is your favorite");

        }
        else {
            const newstore = [...store, recipe];
            setStore(newstore);
        }
    }
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
      <div className="grid grid-cols-3  shadow-xl bg-amber-100  sm:mx-5 md:mx-20 my-7 p-4">
        <figure>
          <img
            className=" object-fill w-80 h-56 md:h-56 xl:h-80 rounded-lg mx-1"
            src={strMealThumb}
            alt="Album"
          />
        </figure>
        <div className="col-span-2 ml-10">
          <h2 className=" text-3xl font-serif">{strMeal}</h2>
          <p>
            <span className="text-2xl font-serif">Price</span>:{price}Tk
          </p>
          <button
            onClick={() => favourite(recipe.id)}
            className=" bg-amber-600  rounded-md px-3 py-3"
          >
            Favourite
          </button> <br />
          <span className="text-2xl font-serif">Ingredients:</span>
          <li>
            <a> {strIngredient1}</a>
          </li>
          <li>
            <a> {strIngredient2}</a>
          </li>
          <li>
            <a> {strIngredient3}</a>
          </li>
          <li>
            <a> {strIngredient4}</a>
          </li>
          <li>
            <a> {strIngredient5}</a>
          </li>

          <div className="justify-start ">
            {" "}
            <span className="text-2xl font-serif">Instruction:</span>
            {strInstructions}
          </div>
        </div>
      </div>
    );
};

export default RecipeDetails;