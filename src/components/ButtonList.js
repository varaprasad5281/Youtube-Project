import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex overflow-y-scroll whitespace-nowrap sticky bg-white ">
      <Button name="All" />
      <Button name="Music" />
      <Button name="Telugu Cinema" />
      <Button name="T-series" />
      <Button name="Live" />
      <Button name="Puppets" />
      <Button name="Thrillers" />
      <Button name="Recently Uploaded" />
      <Button name="Watched" />
      <Button name="New to you" />
    </div>
  );
};

export default ButtonList;
