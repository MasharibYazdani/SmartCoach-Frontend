import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SideBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
