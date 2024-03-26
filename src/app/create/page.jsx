"use client";

import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import dynamic from "next/dynamic";
import { app } from "@/utils/firebase";
// import ReactQuill from "react-quill";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import Loader from "@/components/loader/loader";
import { data } from "@/data";
import useToast from "@/utils/useToast";

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, showToastWithTimeout, Toast] = useToast();
  const [toastContent, setToastContent] = useState({});

  const ALLOWED_SIZE = 512000; //500kb

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      if (file.size > ALLOWED_SIZE) {
        alert("File size is too large : Max 500kb");
        return;
      }
      setLoading(true);
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done :: ");

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
            setLoading(false);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (status === "unauthenticated" && typeof window !== "undefined") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      showToastWithTimeout();
      setToastContent({
        title: "Post uploaded successfully",
        type: "success",
      });

      router.push(`/posts/${data.slug}`);
    } else {
      showToastWithTimeout();
      setToastContent({
        title: "Post upload failed",
        type: "error",
      });
    }
  };

  return (
    <div className="pt-28 md:pt-40">
      {showToast && (
        <Toast title={toastContent.title} type={toastContent.type} />
      )}
      <input
        type="text"
        placeholder="Title"
        className="bg-transparent border-b-2 px-4 lg:px-10 py-4 text-2xl lg:text-5xl w-full placeholder-white outline-none focus:outline-none"
        maxLength={100}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <div className="relative my-10 flex md:flex-row flex-col gap-4 justify-between md:items-center">
        <select
          onChange={(e) => setCatSlug(e.target.value)}
          className="bg-brand_primary_dark py-4 px-4 md:w-[175px]  appearance-none rounded-lg cursor-pointer focus:outline-none text-left"
        >
          <option defaultValue className="text-lg text-center">
            Category
          </option>
          {/* <option value="style">style</option> */}
          {data.categories.map((category, index) => (
            <option
              className="text-left"
              value={category.name}
              key={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
        {media && file && (
          <p className="text-xl font-thin">Image {file.name} uploaded</p>
        )}
        {loading && (
          <p className="text-xl font-thin flex">
            Uploading <Loader className="ml-10" />
          </p>
        )}
        <input
          type="file"
          id="image"
          className="disabled:cursor-not-allowed"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ display: "none" }}
          disabled={loading || (media && file)}
          accept="image/*"
        />
        <button
          disabled={loading || (media && file)}
          className="bg-brand_primary_dark py-4 px-10 disabled:cursor-not-allowed appearance-none rounded-lg cursor-pointer focus:outline-none"
        >
          <label htmlFor="image">Add Image</label>
        </button>
        <div className=" w-full py-2 absolute top-full translate-x-1/2 right-1/2 md:translate-x-0 md:right-0">
          *Image size must be below 500kb
        </div>
      </div>
      <ReactQuill
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="Tell your story..."
        className="h-[50vh] border-t mt-14 pt-6"
      />

      <button
        disabled={loading || !title || !value || !catSlug}
        onClick={handleSubmit}
        className="bg-brand_primary_dark w-full lg:w-auto mt-10 py-4 px-10 border border-transparent hover:bg-transparent hover:border-brand_primary appearance-none rounded-lg cursor-pointer focus:outline-none transition-all duration-300 hover:text-brand_primary disabled:cursor-not-allowed"
      >
        Publish
      </button>
    </div>
  );
};

export default WritePage;
