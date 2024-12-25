import React from "react";
import { useDispatch } from "react-redux";
import { addSearchTerm } from "../utils/searchSlice";

const ButtonList = () => {
  const dispatch = useDispatch();

  const handleButtonClick = (name) => {
    dispatch(addSearchTerm(name));
  };

  return (
    <div className="flex overflow-y-scroll whitespace-nowrap sticky bg-white">
      {[
        "All",
        "Music",
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
          className="m-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => handleButtonClick(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
