import React from "react";
import { MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineLightMode } from "react-icons/md";
import { addTheme } from "../utils/colorTheme";

const Theme = () => {
  const themeSelector = useSelector((store) => store.colors.isDarkMode);
  const dispatch = useDispatch();
  const handleThemeChange = () => {
    dispatch(addTheme());
  };
  return (
    <div
      onClick={handleThemeChange}
      className="bg-transparent p-3 rounded-full cursor-pointer hover:bg-gray-500 shadow-lg"
    >
      {themeSelector ? <MdOutlineLightMode /> : <MdDarkMode />}
    </div>
  );
};

export default Theme;
