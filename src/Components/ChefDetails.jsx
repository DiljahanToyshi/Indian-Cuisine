import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import LoadingSpinner from './LoadingSpinner';
import { FaThumbsUp } from 'react-icons/fa';

const ChefDetails = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  if (navigation.state === "loading") {
    retrun < LoadingSpinner > <LoadingSpinner />;
  }
  const chefs = useLoaderData();
console.log(chefs)
  const {
    Chef_Name,
    recipes,
    Chef_Picture,
    Numbers_of_recipes,Years_of_experience
,
    Likes,
    description,
  } = chefs;
  return (
    <div>
      <div className="">
      <div className="lg:flex lg:flex-row-reverse gap-8 bg-slate-100 shadow-xl lg:px-40 lg:py-20 py-10">
      <figure className="flex justify-center w-full lg:w-2/5">
            <img src={Chef_Picture} className="rounded-lg lg:h-80" alt="car!" />
          </figure>
          <div className="text-left text-neutral lg:w-3/5 self-center space-y-3 p-8 lg:p-0">
          <h2 className="text-3xl font-bold tracking-wide text-orange-600 ">
              {Chef_Name}</h2>
              <h2 className="text-tag">
								Signature Recipes :
								<span className="text-base"> {Numbers_of_recipes} items</span>
							</h2>
              <h2 className="text-tag">
								{Years_of_experience
} years of Experience
							</h2>
            <div className="mt-0">
								<button className="btn-primary m-0 cursor-none">
									<div className="flex justify-between">
										<p className="text-xl font-semibold text-orange-600 flex gap-1">
											<FaThumbsUp />
											<span className="ml-2 -mt-1">{Likes}K</span>
										</p>
									</div>
								</button>
							</div>
            <h2 className="text-tag">
								Bio :
								<span className="text-base leading-loose"> {description}</span>
							</h2>
          </div>
        </div>
        
        <h2 className="my-10 text-4xl font-serif title-text">
        Signature Recipes of :{Chef_Name}
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

           
           