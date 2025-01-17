"use client";
import { useState } from "react";
import { close } from "@/../public/icons";
import Image from "next/image";
import useToast from "@/utils/useToast";
function EditorPickIcon({
  width,
  height,
  fill,
  item,
  itemtype = "posts",
  className = "",
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [showToast, showToastWithTimeout, Toast] = useToast();
  const handleAddToEditorPicks = async () => {
    console.log("Adding to EditorPicks", item.slug);
    try {
      const response = await fetch(`/api/${itemtype}/${item.slug}`, {
        method: "PUT",
        body: JSON.stringify({ pickedByEditor: true }),
      });

      // const data = await response.json();
      console.log("Response:", response);

      if (response.status === 200) {
        // Handle successful deletion
        console.log("Added to Editor Picks successfully");
        showToastWithTimeout();
      } else {
        // Handle error
        console.error("Failed to add to Editor Picks");
      }
      setModalOpen(false);
    } catch (error) {
      console.error("Error:", error);
      setModalOpen(false);
    }
  };

  const handleRemoveFromEditorPicks = async () => {
    console.log("Removing from EditorPicks", item.slug);
    try {
      const response = await fetch(`/api/${itemtype}/${item.slug}`, {
        method: "PUT",
        body: JSON.stringify({ pickedByEditor: false }),
      });

      // const data = await response.json();
      console.log("Response:", response);

      if (response.status === 200) {
        // Handle successful deletion
        console.log("Removed from Editor Picks successfully");
      } else {
        // Handle error
        console.error("Failed to remove from Editor Picks");
      }
      setModalOpen(false);
    } catch (error) {
      console.error("Error:", error);
      setModalOpen(false);
    }
  };
  return (
    <>
      <span onClick={() => setModalOpen(true)}>
        <svg
          fill={fill || "red"}
          width={width} // Set the desired width
          height={height}
          id="EditorPickIcon"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="-122.64 -122.64 716.98 716.98"
          stroke="#red"
          className={
            "hover:fill-red-600 transition-all duration-150 cursor-pointer " +
            className
          }
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="red"
            strokeWidth="4"
          />

          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path
                fill="red"
                strokeWidth={4}
                d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1 c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3 l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4 C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3 s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4 c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3 C444.801,187.101,434.001,213.101,414.401,232.701z"
              />{" "}
            </g>{" "}
          </g>
        </svg>
      </span>
      {showToast && <Toast title="Added to Editor Picks" type="success" />}
      {modalOpen && (
        <div className="border rounded-xl  bg-white w-[350px] h-[200px] p-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
          <article className=" mt-6">
            <h4 className="text-black font-bold">
              Change Editor's Pick Status for {item.title}
            </h4>

            <div className="flex justify-between mt-10">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={handleAddToEditorPicks}
              >
                Add
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={handleRemoveFromEditorPicks}
              >
                Remove
              </button>
            </div>
          </article>
        </div>
      )}
    </>
  );
}

export default EditorPickIcon;
