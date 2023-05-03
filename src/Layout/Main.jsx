import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import LefNav from '../Components/LefNav';
import RightNav from '../Components/RightNav';
import Home from '../Components/Home';
import bg from '../assets/bg.jpg'
const Main = () => {
    return (
      <div className="bg-red-100" style={{backgroundImage:`url(${bg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <Header></Header>
        <div className="min-h-[calc(100vh-136px)] ">
          <Outlet></Outlet>
          {/* <div className="grid grid-cols-3 gap-4 mx-auto">
            <div className=" bg-slate-500 ...">
              <LefNav></LefNav>
            </div>
            <div className=" bg-green-100 lg:col-span-2 "></div>
          </div> */}
        </div>

        <Footer></Footer>
      </div>
    );
};

export default Main;