import React from "react";

function Loader() {
  return (
    <div className="grid grid-cols-6 gap-4 ">
      <div className=" w-full h-36 bg-[#1d1d1d] rounded animate-pulse " />
      <div className=" w-full h-36 bg-[#1d1d1d] rounded animate-pulse " />
      <div className=" w-full h-36 bg-[#1d1d1d] rounded animate-pulse " />
      <div className=" w-full h-36 bg-[#1d1d1d] rounded animate-pulse " />
      <div className=" w-full h-36 bg-[#1d1d1d] rounded animate-pulse " />
      <div className=" w-full h-36 bg-[#1d1d1d] rounded animate-pulse " />
    </div>
  );
}

export default Loader;
