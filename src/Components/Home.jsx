import React, { useEffect, useState } from 'react';
import LeftNav from './LefNav';
import RightNav from './RightNav';

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
        
        <div className="grid grid-cols-3 gap-4 mx-auto">
            <div className=" bg-slate-500 ...">
             <LeftNav></LeftNav>
            </div>
            <div className=" bg-green-100 lg:col-span-2 "><RightNav></RightNav></div>
          </div>
      </div>
    );
};

export default Home;