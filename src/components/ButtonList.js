import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchTerm } from "../utils/searchSlice";

const ButtonList = () => {
  const dispatch = useDispatch();
  const textColor = useSelector((store) => store.colors.isDarkMode);

  const handleButtonClick = (name) => {
    dispatch(addSearchTerm(name));
  };

  return (
    <div className="flex overflow-y-scroll whitespace-nowrap sticky">
      {[
        "All",
        "Music",
        "Pawan Kalyan",
        "K Drama",
        "Telugu Cinema",
        "T-series",
        "Live",
        "Puppets",
        "Thrillers",
        "Recently Uploaded",
        "Watched",
        "New to you",
      ].map((name) => (
        <button
          key={name}
          className={`m-2 px-4 py-2 ${
            textColor ? "text-white bg-gray-800" : "text-black bg-gray-200"
          }  rounded-md hover:bg-gray-300 hover:text-black`}
          onClick={() => handleButtonClick(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
