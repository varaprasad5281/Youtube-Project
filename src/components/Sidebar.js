import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { button } from "react-router-dom";
import { IoMdHome, IoMdTrendingUp } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import {
  MdOutlineSubscriptions,
  MdOutlineShoppingBag,
  MdNewspaper,
} from "react-icons/md";
import { FaMusic, FaPodcast } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { CgMediaLive } from "react-icons/cg";
import { GrGamepad } from "react-icons/gr";
import { GiTrophyCup } from "react-icons/gi";
import { addSearchTerm } from "../utils/searchSlice";

const SidebarItem = ({ icon, label, onClick }) => {
  const textColor = useSelector((store) => store.colors.isDarkMode);

  return (
    <li
      className={`px-3 py-2 flex gap-4 items-center rounded-md cursor-pointer ${
        textColor ? "text-white" : "text-black"
      } hover:bg-gray-300 hover:text-black`}
    >
      <button
        onClick={onClick}
        className="flex items-center gap-4 w-full text-left"
        aria-label={label}
      >
        {icon}
        {label}
      </button>
    </li>
  );
};

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const themeData = useSelector((store) => store.colors.styles[0]);
  const dispatch = useDispatch();

  if (!isMenuOpen) return null;

  const handleSidebarClick = (name) => {
    dispatch(addSearchTerm(name));
  };

  const mainMenuItems = [
    { icon: <IoMdHome />, label: "Home", key: "All" },
    { icon: <SiYoutubeshorts />, label: "Shorts", key: "Shorts" },
    {
      icon: <MdOutlineSubscriptions />,
      label: "Subscriptions",
      key: "subscriptions",
    },
  ];

  const exploreItems = [
    { icon: <IoMdTrendingUp />, label: "Trending", key: "trending" },
    { icon: <MdOutlineShoppingBag />, label: "Shopping", key: "shopping" },
    { icon: <FaMusic />, label: "Music", key: "music" },
    { icon: <BiCameraMovie />, label: "Movies", key: "movies" },
    { icon: <CgMediaLive />, label: "Live", key: "live" },
    { icon: <GrGamepad />, label: "Gaming", key: "gaming" },
    { icon: <MdNewspaper />, label: "News", key: "news" },
    { icon: <GiTrophyCup />, label: "Sports", key: "sports" },
    { icon: <FaPodcast />, label: "Podcast", key: "podcast" },
  ];

  const subscriptionItems = [
    { label: "Aditya Music", key: "aditya music" },
    { label: "Filmymoji", key: "filmymoji" },
    { label: "T-series", key: "t-series" },
    { label: "Hindustan Times", key: "hindustan times" },
  ];

  return (
    <div
      className={`${themeData} sticky h-[93vh] p-5 shadow-lg min-w-[15%] top-16 overflow-y-auto max-lg:hidden`}
    >
      <ul className="flex flex-col gap-2">
        {mainMenuItems.map(({ icon, label, key }) => (
          <SidebarItem
            key={key}
            icon={icon}
            label={label}
            onClick={() => handleSidebarClick(key)}
          />
        ))}
      </ul>

      <h1 className="font-bold py-5">Explore</h1>
      <ul className="flex flex-col gap-2">
        {exploreItems.map(({ icon, label, key }) => (
          <SidebarItem
            key={key}
            icon={icon}
            label={label}
            onClick={() => handleSidebarClick(key)}
          />
        ))}
      </ul>

      <h1 className="font-bold py-5">Subscription</h1>
      <ul className="flex flex-col gap-2">
        {subscriptionItems.map(({ label, key }) => (
          <SidebarItem
            key={key}
            icon={null} // No icon for subscription items
            label={label}
            onClick={() => handleSidebarClick(key)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
