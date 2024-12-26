import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "./Avatar";
import { removeComment } from "../utils/commentSlice";
import { RiDeleteBin6Line } from "react-icons/ri";

const Comment = () => {
  const allComments = useSelector((store) => store.comments?.comments);
  const userName = useSelector((store) => store.user.name);
  const dispatch = useDispatch();
  const handleRemoveComment = (index) => {
    dispatch(removeComment(index));
  };
  return (
    <div>
      {allComments &&
        allComments.map((comment, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer flex justify-between shadow-sm bg-gray-100 p-2 rounded-lg my-2"
            >
              <div className="flex">
                <Avatar />
                <div className="px-3">
                  <p className="font-bold">{userName}</p>
                  <p>{comment}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveComment(index)}
                className="p-2 bg-red-600 rounded-lg text-white"
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Comment;
