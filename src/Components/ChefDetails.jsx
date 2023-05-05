import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import LoadingSpinner from './LoadingSpinner';

const ChefDetails = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  if (navigation.state === "loading") {
    retrun < LoadingSpinner > <LoadingSpinner />;
  }
  const chefs = useLoaderData();

  const {
    Chef_Name,
    recipes,
    Chef_Picture,
    Numbers_of_recipes,
    Likes,
    description,
  } = chefs;
  return (
    <div>
      <div className="place-content-center">
        <div className=" md:inline card w-96 glass place-content-center">
          <figure>
            <img src={Chef_Picture} className="rounded-xl" alt="car!" />
          </figure>
          <div className="card-body md:inline-block md:ml-72 md:pl-64">
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
        <div className="mx-auto">
          {recipes.map((recipe) => (
            <RecipeDetails key={recipe.id} recipe={recipe}></RecipeDetails>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ChefDetails; 

           
           