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

const WriteEditPage = ({ params }) => {
  const { slug } = params;
  const { status } = useSession();
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  //description
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [loading, setLoading] = useState(false);

  let oldImage = "";

  useEffect(() => {
    const fetchWriteUp = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/writeups/${slug}`
        );

        if (response.ok) {
          const post = await response.json();
          setTitle(post.title);
          setValue(post.desc);
          oldImage = post.img;
          setCatSlug(post.catSlug);
        } else {
          console.error("Failed to fetch Writeup:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching Writeup:", error);
      }
    };

    fetchWriteUp();
  }, []);

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
    if ((media = "")) {
      setMedia(oldImage);
    }
    const res = await fetch(`/api/writeups/${slug}`, {
      method: "PUT",
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
      router.push(`/writeups/${data.slug}`);
    }
  };

  return (
    <div className="pt-40">
      <input
        type="text"
        placeholder="Title"
        className="bg-transparent border-b-2 px-10 py-4 text-5xl w-full placeholder-white"
        maxLength={100}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="my-10 flex justify-between">
        <select
          onChange={(e) => setCatSlug(e.target.value)}
          className="bg-brand_primary_dark py-4 px-10 appearance-none rounded-lg cursor-pointer focus:outline-none"
        >
          <option defaultValue>Select a category</option>
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
          disabled={loading || (media && file)}
          accept="image/*"
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

      <textarea
        placeholder="Tell your story..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-transparent w-full h-[50vh] placeholder:text-white placeholder:text-xl text-xl cursor-text p-4 focus:outline-none "
      ></textarea>
      <button
        disabled={!value || !title || loading}
        onClick={handleSubmit}
        className="bg-brand_primary_dark py-4 px-10 border border-transparent hover:bg-transparent hover:border-brand_primary appearance-none rounded-lg cursor-pointer focus:outline-none transition-all duration-300 hover:text-brand_primary disabled:cursor-not-allowed"
      >
        Publish
      </button>
    </div>
  );
};

export default WriteEditPage;
