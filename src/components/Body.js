import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollTop";

const Body = () => {
  return (
    <div className="flex">
      <ScrollToTop />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
