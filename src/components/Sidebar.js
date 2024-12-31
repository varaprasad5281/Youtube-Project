import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { addSearchTerm } from "../utils/searchSlice";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const themeData = useSelector((store) => store.colors.styles[0]);
  const textColor = useSelector((store) => store.colors.isDarkMode);

  // Early return
  if (!isMenuOpen) return null;
  const handleSidebarClick = (name) => {
    dispatch(addSearchTerm(name));
  };

  return (
    <div
      className={`${themeData} sticky h-[93vh] p-5 shadow-lg min-w-[15%] top-16 bottom- overflow-y-auto max-lg:hidden`}
    >
      <ul className="flex flex-col gap-2">
        <li
          className={`px-3 py-2 flex gap-4 items-center rounded-md cursor-pointer ${
            textColor ? "text-white" : "text-black"
          } hover:bg-gray-300 hover:text-black`}
        >
          <button
            onClick={() => handleSidebarClick("All")}
            className="flex items-center gap-4 w-full text-left"
          >
            <IoMdHome />
            Home
          </button>
        </li>
        <li
          className={`px-3 py-2 flex gap-4 items-center rounded-md cursor-pointer ${
            textColor ? "text-white" : "text-black"
          } hover:bg-gray-300 hover:text-black`}
        >
          <button
            onClick={() => handleSidebarClick("Shorts")}
            className="flex items-center gap-4 w-full text-left"
          >
            <SiYoutubeshorts />
            Shorts
          </button>
        </li>
        <li
          className={`px-3 py-2 flex gap-4 items-center rounded-md cursor-pointer ${
            textColor ? "text-white" : "text-black"
          } hover:bg-gray-300 hover:text-black`}
        >
          <button
            onClick={() => handleSidebarClick("subscriptions")}
            className="flex items-center gap-4 w-full text-left"
          >
            <MdOutlineSubscriptions />
            Subscriptions
          </button>
        </li>
      </ul>

      <h1 className="font-bold py-5">Explore</h1>
      <ul className="flex flex-col gap-2">
        <li
          className={`px-3 py-2 flex gap-4 items-center rounded-md cursor-pointer ${
            textColor ? "text-white" : "text-black"
          } hover:bg-gray-300 hover:text-black`}
        >
          <button
            onClick={() => handleSidebarClick("trending")}
            className="flex items-center gap-4 w-full text-left"
          >
            <IoMdTrendingUp />
            Trending
          </button>
        </li>
        <li
          className={`px-3 py-2 flex gap-4 items-center rounded-md cursor-pointer ${
            textColor ? "text-white" : "text-black"
          } hover:bg-gray-300 hover:text-black`}
        >
          <button
            onClick={() => handleSidebarClick("shopping")}
            className="flex items-center gap-4 w-full text-left"
          >
            <MdOutlineShoppingBag />
            Shopping
          </button>
        </li>
        <li
          className={`px-3 py-2 flex gap-4 items-center rounded-md cursor-pointer ${
            textColor ? "text-white" : "text-black"
          } hover:bg-gray-300 hover:text-black`}
        >
          <button
            onClick={() => handleSidebarClick("music")}
            className="flex items-center gap-4 w-full text-left"
          >
            <FaMusic />
            Music
          </button>
        </li>
        <li
          className={`px-3 py-2 flex gap-4 items-center rounded-md cursor-pointer ${
            textColor ? "text-white" : "text-black"
          } hover:bg-gray-300 hover:text-black`}
        >
          <button
            onClick={() => handleSidebarClick("movies")}
            className="flex items-center gap-4 w-full text-left"
          >
            <BiCameraMovie />
            Movies
          </button>
        </li>
        <li
          className={`px-3 py-2 flex gap-4 items-center rounded-md cursor-pointer ${
            textColor ? "text-white" : "text-black"
          } hover:bg-gray-300 hover:text-black`}
        >
          <button
            onClick={() => handleSidebarClick("live")}
            className="flex items-center gap-4 w-full text-left"
          >
            <CgMediaLive />
            Live
          </button>
        </li>
        <li
          className={`px-3 py-2 flex gap-4 items-center rounded-md cursor-pointer ${
            textColor ? "text-white" : "text-black"
          } hover:bg-gray-300 hover:text-black`}
        >
          <button
            onClick={() => handleSidebarClick("gaming")}
            className="flex items-center gap-4 w-full text-left"
          >
            <GrGamepad />
            Gaming
          </button>
        </li>
        <li
          className={`px-3 py-2 flex gap-4 items-center rounded-md cursor-pointer ${
            textColor ? "text-white" : "text-black"
          } hover:bg-gray-300 hover:text-black`}
        >
          <button
            onClick={() => handleSidebarClick("news")}
            className="flex items-center gap-4 w-full text-left"
          >
            <MdNewspaper />
            News
          </button>
        </li>
        <li
          className={`px-3 py-2 flex gap-4 items-center rounded-md cursor-pointer ${
            textColor ? "text-white" : "text-black"
          } hover:bg-gray-300 hover:text-black`}
        >
          <button
            onClick={() => handleSidebarClick("sports")}
            className="flex items-center gap-4 w-full text-left"
          >
            <GiTrophyCup />
            Sports
          </button>
        </li>
        <li
          className={`px-3 py-2 flex gap-4 items-center rounded-md cursor-pointer ${
            textColor ? "text-white" : "text-black"
          } hover:bg-gray-300 hover:text-black`}
        >
          <button
            onClick={() => handleSidebarClick("podcast")}
            className="flex items-center gap-4 w-full text-left"
          >
            <FaPodcast />
            Podcast
          </button>
        </li>
      </ul>
      <h1 className="font-bold py-5">Subscription</h1>
      <ul className="flex flex-col gap-2">
        <li
          className={`px-3 py-2 flex gap-4 items-center rounded-md cursor-pointer ${
            textColor ? "text-white" : "text-black"
          } hover:bg-gray-300 hover:text-black`}
        >
          <button
            onClick={() => handleSidebarClick("aditya music")}
            className="flex items-center gap-4 w-full text-left"
          >
            Aditya Music
          </button>
        </li>
        <li
          className={`px-3 py-2 flex gap-4 items-center rounded-md cursor-pointer ${
            textColor ? "text-white" : "text-black"
          } hover:bg-gray-300 hover:text-black`}
        >
          <button
            onClick={() => handleSidebarClick("filmymoji")}
            className="flex items-center gap-4 w-full text-left"
          >
            Filmymoji
          </button>
        </li>
        <li
          className={`px-3 py-2 flex gap-4 items-center rounded-md cursor-pointer ${
            textColor ? "text-white" : "text-black"
          } hover:bg-gray-300 hover:text-black`}
        >
          <button
            onClick={() => handleSidebarClick("t-series")}
            className="flex items-center gap-4 w-full text-left"
          >
            T-series
          </button>
        </li>
        <li
          className={`px-3 py-2 flex gap-4 items-center rounded-md cursor-pointer ${
            textColor ? "text-white" : "text-black"
          } hover:bg-gray-300 hover:text-black`}
        >
          <button
            onClick={() => handleSidebarClick("Hindustan times")}
            className="flex items-center gap-4 w-full text-left"
          >
            Hindustan Times
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
