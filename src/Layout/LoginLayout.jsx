import React from 'react';
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const LoginLayout = () => {
    return (
      <div>
        <Header></Header>
        <div className="min-h-[calc(100vh-136px)] ">
          <Outlet></Outlet>
        </div>

        <Footer></Footer>
      </div>
    );
};

export default LoginLayout;