import { Container } from "postcss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <h2>all chefs</h2>
      {chefs.map(chef => (
        <p key={chef.id}>
          <Link to={`/chef/${chef.id}`} className="text-3xl font-serif">
            {chef.Chef_Name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
