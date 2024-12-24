import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoContainer from "./VideoContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [isRecommended, setIsRecommended] = useState(true);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  const hanldeRecommended = () => {
    setIsRecommended(!isRecommended);
  };

  return (
    <div className="md:px-5 flex flex-col w-full sm:px-2">
      <div className="flex-col md:px-5 flex justify-between w-full gap-5 sm:px-2">
        <div className="flex-col w-full">
          <iframe
            className="w-full rounded-lg"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="w-full hidden md:mt-5 md:block">
            <CommentsContainer />
          </div>
        </div>
        <div className="md:max-w-[22%] w-full md:block">
          <button
            className="bg-green-500 p-3 rounded-lg"
            onClick={hanldeRecommended}
          >
            {isRecommended ? "Live Chat" : "Recommended Videos"}
          </button>
          {isRecommended ? <VideoContainer /> : <LiveChat />}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
