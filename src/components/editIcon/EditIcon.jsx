"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { close } from "../../../public/icons";

function EditIcon({ width, height, fill, itemtype, slug }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <svg
        fill={fill || "white"}
        xmlns="http://www.w3.org/2000/svg"
        width={width} // Set the desired width
        height={height} // Set the desired height
        viewBox="0 0 24 24"
        id="edit"
        className="hover:fill-orange-400 transition-all duration-150"
        onClick={() => setModalOpen(true)}
      >
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
      </svg>
      {modalOpen && (
        <div className="border rounded-xl  bg-white w-[300px]  sm:w-[350px] h-[200px] p-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-end">
            <span>
              <Image
                className="cursor-pointer"
                src={close}
                alt="Close Icon"
                width={20}
                height={20}
                onClick={() => setModalOpen(false)}
              />
            </span>
          </div>
          <article className=" mt-2">
            <h4 className="text-black font-bold text-lg">
              Editing this post will remove all styling and formatting!
            </h4>

            <div className="flex justify-between mt-10">
              <Link
                className="bg-yellow-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-yellow-700 transition-all duration-300"
                href={`/${itemtype}/edit/${slug}`}
              >
                Edit
              </Link>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-700 transition-all duration-300"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </article>
        </div>
      )}
    </>
  );
}

export default EditIcon;
