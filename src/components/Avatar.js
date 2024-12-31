import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAvatarChange } from "../utils/appSlice";

const Avatar = () => {
  const userName = useSelector((store) => store?.user?.name);
  const dispatch = useDispatch();

  const firstLetter = userName ? userName.charAt(0).toUpperCase() : "V";

  const handleUserChange = () => {
    window.sessionStorage.clear();
    dispatch(isAvatarChange());
  };

  return (
    <div onClick={handleUserChange} className="cursor-pointer hidden sm:block">
      <div className="sm:flex items-center justify-center p-3 bg-blue-500 rounded-3xl h-9">
        <p className="text-white text-xl">{firstLetter}</p>
      </div>
    </div>
  );
};

export default Avatar;
