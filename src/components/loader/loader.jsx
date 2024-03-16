import React from "react";

function Loader({ className = "" }) {
  return (
    <div className=" flex justify-center items-center">
      <div
        className={
          "animate-spin ease-linear rounded-full border-t-4 border-gray-200 h-10 w-10 " +
          className
        }
      ></div>
    </div>
  );
}

export default Loader;
