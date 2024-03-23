import React from "react";

function Loader({ className = "" }) {
  return (
    <div className=" flex justify-center items-center">
      <div
        className={
          "animate-spin ease-linear rounded-full border-t-4 border-gray-200 h-6 w-6 " +
          className
        }
      ></div>
    </div>
  );
}

export default Loader;
