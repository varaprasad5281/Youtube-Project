import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return
  if (!isMenuOpen) return null;
  return (
    <div className="sticky h-[93vh] p-5 shadow-lg min-w-[15%] top-16 bottom-0 bg-white overflow-y-auto max-lg:hidden transition-all duration-700 delay-700 ease-linear	">
      <ul className="flex flex-col gap-2">
        <li className="p-1 bg-gray-300 rounded-md cursor-pointer">Home</li>
        <li className="p-1 hover:bg-gray-300 rounded-md cursor-pointer">
          Shorts
        </li>
        <li className="p-1 hover:bg-gray-300 rounded-md cursor-pointer">
          Subscriptions
        </li>
      </ul>
      <h1 className="font-bold py-5">subscription</h1>
      <ul className="flex flex-col gap-2">
        <li className="p-1 hover:bg-gray-300 rounded-md cursor-pointer">
          Aditya Music
        </li>
        <li className="p-1 hover:bg-gray-300 rounded-md cursor-pointer">
          Filmymoji
        </li>
        <li className="p-1 hover:bg-gray-300 rounded-md cursor-pointer">
          T-series
        </li>
        <li className="p-1 hover:bg-gray-300 rounded-md cursor-pointer">
          Hindustan Times
        </li>
      </ul>

      <h1 className="font-bold py-5">Watch Later</h1>
      <ul className="flex flex-col gap-2">
        <li className="p-1 hover:bg-gray-300 rounded-md cursor-pointer">
          Music
        </li>
        <li className="p-1 hover:bg-gray-300 rounded-md cursor-pointer">
          Sports
        </li>
        <li className="p-1 hover:bg-gray-300 rounded-md cursor-pointer">
          Gaming
        </li>
        <li className="p-1 hover:bg-gray-300 rounded-md cursor-pointer">
          Movies
        </li>
      </ul>

      <h1 className="font-bold py-5">Explore</h1>
      <ul className="flex flex-col gap-2">
        <li className="p-1 hover:bg-gray-300 rounded-md cursor-pointer">
          Trending
        </li>
        <li className="p-1 hover:bg-gray-300 rounded-md cursor-pointer">
          Shopping
        </li>
        <li className="p-1 hover:bg-gray-300 rounded-md cursor-pointer">
          Music
        </li>
        <li className="p-1 hover:bg-gray-300 rounded-md cursor-pointer">
          Movies
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
