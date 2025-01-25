import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserName } from "../utils/userSlice";
import { isAvatarChange } from "../utils/appSlice";

const Popup = () => {
  const userName = useRef(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const isPopup = useSelector((store) => store.app.isAvatar);

  const storedUserName = sessionStorage.getItem("userName");

  useEffect(() => {
    if (storedUserName) {
      dispatch(addUserName(storedUserName));
      dispatch(isAvatarChange());
    }
  }, [storedUserName, dispatch]);

  const handleUserInput = (e) => {
    e.preventDefault();
    const inputValue = userName.current.value.trim();

    if (inputValue) {
      sessionStorage.setItem("userName", inputValue);
      dispatch(addUserName(inputValue));
      dispatch(isAvatarChange());
      setError(null);
    } else {
      setError("User name cannot be empty.");
    }
  };

  // Do not show the popup if the username already exists in sessionStorage
  if (!isPopup || storedUserName) return null;

  return (
    <div className="fixed hidden sm:block top-[50%] left-[50%] max-w-96 w-full transform translate-x-[-50%] translate-y-[-50%] p-4 bg-white shadow-lg rounded-lg z-50">
      <h1 className="font-bold text-xl">Enter Your Name to Proceed</h1>
      <form className="flex flex-col gap-4" onSubmit={handleUserInput}>
        <input
          className="border border-green-500 w-full p-2 rounded-lg"
          ref={userName}
          type="text"
          placeholder="Enter your Name..."
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="px-4 py-2 w-full bg-green-500 text-white rounded-lg"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Popup;
