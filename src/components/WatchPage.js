import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="px-5 flex flex-col w-full">
      {/* Video and LiveChat Section */}
      <div className="px-5 flex w-full gap-5">
        {/* Video Player */}
        <div className="flex-1">
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
        </div>

        <div className="min-w-[22%]">
          <LiveChat />
        </div>
      </div>

      <div className="mt-5">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
