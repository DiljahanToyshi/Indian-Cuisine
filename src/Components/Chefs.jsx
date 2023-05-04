import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Chef from "./ChefDetails";

const Chefs = () => {
  const { id } = useParams();
  const chefs = useLoaderData();
  console.log(chefs);

  return (
    <div>
      <h2>this is chefs:{chefs.length}</h2>
      {/* <div>
                {
chefs.map(chef=>{
    <div></div>
} )
                }
            </div> */}
    </div>
  );
};

export default Chefs;
