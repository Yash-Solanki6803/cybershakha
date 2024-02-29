"use client";

import Image from "next/image";
// import styles from "./writePage.module.css";
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

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
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
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div>Loading...</div>;
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
        className="bg-transparent border-b-2 px-10 py-4 text-5xl w-full placeholder-white"
        maxLength={100}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="my-10 flex justify-between">
        <select
          onChange={(e) => setCatSlug(e.target.value)}
          className="bg-brand_primary_dark py-4 px-10 appearance-none rounded-lg cursor-pointer focus:outline-none"
        >
          <option defaultValue>Category</option>
          <option value="style">style</option>
          <option value="fashion">fashion</option>
          <option value="food">food</option>
          <option value="culture">culture</option>
          <option value="travel">travel</option>
          <option value="coding">coding</option>
        </select>
        <input
          type="file"
          id="image"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ display: "none" }}
        />
        <button>
          <label
            htmlFor="image"
            className="bg-brand_primary_dark py-4 px-10 appearance-none rounded-lg cursor-pointer focus:outline-none"
          >
            {/* <Image src="/image.png" alt="" width={16} height={16} /> */}
            Add Image
          </label>
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
        disabled={loading}
        onClick={handleSubmit}
        className="bg-brand_primary_dark py-4 px-10 border border-transparent hover:bg-transparent hover:border-brand_primary appearance-none rounded-lg cursor-pointer focus:outline-none transition-all duration-300 hover:text-brand_primary"
      >
        Publish
      </button>
    </div>
  );
};

export default WritePage;
