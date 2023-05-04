import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

const ChefDetails = () => {
  const chefs = useLoaderData();
  
  const { Chef_Name,recipes, Chef_Picture, Numbers_of_recipes, Likes, description } =
    chefs;
  return (
    <div className="place-content-center">
      <div className=" md:inline card w-96 glass place-content-center">
        <figure>
          <img src={Chef_Picture} className="rounded-xl" alt="car!" />
        </figure>
        <div className="card-body md:inline-block md:ml-80 md:pl-80">
          <h2 className="card-title text-2xl font-serif">{Chef_Name}</h2>
          <p>
            <span className="text-xl font-serif"> Recipes:</span>
            {Numbers_of_recipes}
          </p>
          <p>
            <span className="text-xl font-serif"> Like:</span>
            {Likes}
          </p>
          <p className="w-80">
            <span className=" text-xl font-serif"> Description:</span>{" "}
            {description}
          </p>
        </div>
      </div>
      <h2 className="my-10 text-4xl font-serif text-center">
        The Recipes Are :
      </h2>
      <div className='mx-auto'>
        {recipes.map((recipe) => (
<RecipeDetails key={recipe.id} recipe={recipe}></RecipeDetails>        ))}
      </div>
    </div>
  );
};

export default ChefDetails; 
 {/* {
 chef.map((c) => (
            <div key={c.id} className="mx-3 text-white">
              <img
                className="object-fill w-80 h-56 md:h-56 xl:h-80 rounded-lg mx-1"
                src={c.Chef_Picture}
                alt=""
              />
              <div className="text-start md:ml-4">
                {" "}
                <p>Name:{c.Chef_Name}</p>
                <p>Experience:{c.Years_of_experience}Year</p>
                <p>Recipes:{c.Numbers_of_recipes}</p>
                <p>Like:{c.Likes}</p>
              
              </div>
            </div>
          ))} */}
           
           