import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Marquee from 'react-fast-marquee';


const Main = () => {
    return (
      <div className="">
        <Header></Header>
        <Marquee className="p-3 md:p-5 lg:p-8 ">
          <p className="text-center text-3xl md:text-5xl lg:text-7xl text-amber-300 font-serif ">
            Welcome To  Indian Cuisine
          </p>
        </Marquee>
        <div className="min-h-[calc(100vh-136px)] ">
          <Outlet></Outlet>
         
        </div>

        <Footer></Footer>
      </div>
    );
};

export default Main;