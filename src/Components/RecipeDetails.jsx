import React from 'react';

const RecipeDetails = ({recipe}) => {
    console.log(recipe);
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
      <div className="grid grid-cols-3 bg-base-100 shadow-xl  sm:mx-5 md:mx-20 my-7 p-4">
        <figure>
          <img
            className=" object-fill w-80 h-56 md:h-56 xl:h-80 rounded-lg mx-1"
            src={strMealThumb}
            alt="Album"
          />
        </figure>
        <div className="col-span-2 ml-10">
          <h2 className=" text-3xl font-serif">{strMeal}</h2>
          <div className="dropdown dropdown-hover  dropdown-left ">
            <label tabIndex={0} className="btn m-1 bg-amber-600">
              Ingredient:
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-indigo-100 rounded-box w-40 text-xl font-medium"
            >
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
            </ul>
          </div>

          <div className="justify-start "> <span className='text-2xl font-serif'>Instruction:</span>{strInstructions}</div>
        </div>
      </div>
    );
};

export default RecipeDetails;