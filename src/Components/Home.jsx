import React, { useEffect, useState } from 'react';

const Home = () => {
      const [meals, setMeals] = useState([]);
      useEffect(() => {
        fetch("http://localhost:5000/meals")
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      }, []);
    return (
        <div>
            <p>homeeee</p>
        </div>
    );
};

export default Home;