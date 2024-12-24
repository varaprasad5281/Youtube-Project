import React from "react";

const Shimmer = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
      {Array.from({ length: 15 }).map((_, index) => (
        <div className="h-52 bg-slate-200 rounded-lg" key={index}></div>
      ))}
    </div>
  );
};

export default Shimmer;
