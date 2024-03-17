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
import { app } from "@/utils/firebase";
import ReactQuill from "react-quill";
import Loader from "@/components/loader/loader";
import { data } from "@/data";

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [loading, setLoading] = useState(false);

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

  if (status === "unauthenticated") {
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
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className="pt-40">
      <input
        type="text"
        placeholder="Title"
        className="bg-transparent border-b-2 px-10 py-4 text-5xl w-full placeholder-white outline-none focus:outline-none"
        maxLength={100}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <div className=" my-10 flex md:flex-row flex-col gap-4 justify-between items-center">
        <select
          onChange={(e) => setCatSlug(e.target.value)}
          className="bg-brand_primary_dark py-4 w-[175px]  appearance-none rounded-lg cursor-pointer focus:outline-none text-center"
        >
          <option defaultValue>Category</option>
          {/* <option value="style">style</option> */}
          {data.categories.map((category, index) => (
            <option
              className="text-center"
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
      </div>
      <ReactQuill
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="Tell your story..."
        className="h-[50vh] "
      />

      <button
        disabled={loading || !title || !value || !catSlug}
        onClick={handleSubmit}
        className="bg-brand_primary_dark mt-10 py-4 px-10 border border-transparent hover:bg-transparent hover:border-brand_primary appearance-none rounded-lg cursor-pointer focus:outline-none transition-all duration-300 hover:text-brand_primary disabled:cursor-not-allowed"
      >
        Publish
      </button>
    </div>
  );
};

export default WritePage;
