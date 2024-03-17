"use client";
import { useState } from "react";
import { close } from "@/../public/icons";
import Image from "next/image";
function DeleteIcon({ width, height, fill, item, itemtype = "posts" }) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleDeleteClick = async () => {
    console.log("Deleting post:", item.slug);
    try {
      const response = await fetch(`/api/${itemtype}/${item.slug}`, {
        method: "DELETE",
      });

      // const data = await response.json();
      console.log("Response:", response);

      if (response.status === 200) {
        // Handle successful deletion
        console.log("Post deleted successfully");
      } else {
        // Handle error
        console.error("Failed to delete post");
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
          xmlns="http://www.w3.org/2000/svg"
          width={width} // Set the desired width
          height={height} // Set the desired height
          viewBox="0 0 48 48" // Adjust the viewBox to maintain aspect ratio
          fill={fill || "white"}
          id="delete"
          className="hover:fill-red-600 transition-all duration-150 cursor-pointer"
        >
          <path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z"></path>
          <path fill="none" d="M0 0h48v48H0z"></path>
        </svg>
      </span>
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
              Are you sure you want to delete this post? {item.title}
            </h4>

            <div className="flex justify-between mt-10">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={handleDeleteClick}
              >
                Delete
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer"
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

export default DeleteIcon;
