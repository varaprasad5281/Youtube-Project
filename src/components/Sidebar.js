import React from "react";
import { useSelector } from "react-redux";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { CgMediaLive } from "react-icons/cg";
import { GrGamepad } from "react-icons/gr";
import { MdNewspaper } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import { FaPodcast } from "react-icons/fa";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return
  if (!isMenuOpen) return null;
  return (
    <div className="sticky h-[93vh] p-5 shadow-lg min-w-[15%] top-16 bottom-0 bg-white overflow-y-auto max-lg:hidden transition-all duration-700 delay-700 ease-linear	">
      <ul className="flex flex-col gap-2">
        <li className="px-3 py-2 flex gap-4 items-center bg-gray-300 rounded-md cursor-pointer font-bold">
          <IoMdHome />
          Home
        </li>
        <li className="px-3 py-2 flex gap-4 items-center hover:bg-gray-300 rounded-md cursor-pointer">
          <SiYoutubeshorts />
          Shorts
        </li>
        <li className="px-3 py-2 flex gap-4 items-center hover:bg-gray-300 rounded-md cursor-pointer">
          <MdOutlineSubscriptions />
          Subscriptions
        </li>
      </ul>

      <h1 className="font-bold py-5">Explore</h1>
      <ul className="flex flex-col gap-2">
        <li className="px-3 py-2 flex gap-4 items-center hover:bg-gray-300 rounded-md cursor-pointer">
          <IoMdTrendingUp />
          Trending
        </li>
        <li className="px-3 py-2 flex gap-4 items-center hover:bg-gray-300 rounded-md cursor-pointer">
          <MdOutlineShoppingBag />
          Shopping
        </li>
        <li className="px-3 py-2 flex gap-4 items-center hover:bg-gray-300 rounded-md cursor-pointer">
          <FaMusic />
          Music
        </li>
        <li className="px-3 py-2 flex gap-4 items-center hover:bg-gray-300 rounded-md cursor-pointer">
          <BiCameraMovie />
          Movies
        </li>
        <li className="px-3 py-2 flex gap-4 items-center hover:bg-gray-300 rounded-md cursor-pointer">
          <CgMediaLive />
          Live
        </li>
        <li className="px-3 py-2 flex gap-4 items-center hover:bg-gray-300 rounded-md cursor-pointer">
          <GrGamepad />
          Gaming
        </li>
        <li className="px-3 py-2 flex gap-4 items-center hover:bg-gray-300 rounded-md cursor-pointer">
          <MdNewspaper />
          News
        </li>
        <li className="px-3 py-2 flex gap-4 items-center hover:bg-gray-300 rounded-md cursor-pointer">
          <GiTrophyCup />
          Sports
        </li>
        <li className="px-3 py-2 flex gap-4 items-center hover:bg-gray-300 rounded-md cursor-pointer">
          <FaPodcast />
          PodCast
        </li>
      </ul>
      <h1 className="font-bold py-5">subscription</h1>
      <ul className="flex flex-col gap-2">
        <li className="px-3 py-2 flex gap-4 items-center hover:bg-gray-300 rounded-md cursor-pointer">
          Aditya Music
        </li>
        <li className="px-3 py-2 flex gap-4 items-center hover:bg-gray-300 rounded-md cursor-pointer">
          Filmymoji
        </li>
        <li className="px-3 py-2 flex gap-4 items-center hover:bg-gray-300 rounded-md cursor-pointer">
          T-series
        </li>
        <li className="px-3 py-2 flex gap-4 items-center hover:bg-gray-300 rounded-md cursor-pointer">
          Hindustan Times
        </li>
      </ul>

      {/* <h1 className="font-bold py-5">Watch Later</h1>
      <ul className="flex flex-col gap-2">
        <li className="px-3 py-2 flex gap-4 items-center hover:bg-gray-300 rounded-md cursor-pointer">
          Music
        </li>
        <li className="px-3 py-2 flex gap-4 items-center hover:bg-gray-300 rounded-md cursor-pointer">
          Sports
        </li>
        <li className="px-3 py-2 flex gap-4 items-center hover:bg-gray-300 rounded-md cursor-pointer">
          Gaming
        </li>
        <li className="px-3 py-2 flex gap-4 items-center hover:bg-gray-300 rounded-md cursor-pointer">
          Movies
        </li>
      </ul> */}
    </div>
  );
};

export default Sidebar;
