import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
const Main = () => {
  const themeData = useSelector((store) => store.colors.styles[0]);
  return (
    <div className={`${themeData} w-full  overflow-hidden`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default Main;
