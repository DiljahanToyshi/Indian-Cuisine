import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';


const Main = () => {
    return (
      <div className="">
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