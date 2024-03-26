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
import Loader from "@/components/loader/loader";
import { htmlToText } from "html-to-text";
import ReactQuill from "react-quill";
import { data } from "@/data";
import useToast from "@/utils/useToast";

const PostEditPage = ({ params }) => {
  const router = useRouter();
  const { slug } = params;
  const { status } = useSession();

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  //description
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const [oldImage, setOldImage] = useState("");
  const [showToast, showToastWithTimeout, Toast] = useToast();
  const [toastContent, setToastContent] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_WEB_DOMAIN}/api/posts/${slug}`
        );

        if (response.ok) {
          const post = await response.json();
          setTitle(post.title);
          setValue(
            htmlToText(post.desc, {
              wordwrap: null,
            })
          );
          setOldImage(post.img);
          setCatSlug(post.catSlug);
        } else {
          console.error("Failed to fetch Post:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching Post:", error);
      }
    };

    fetchPost();
  }, []);

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
            setOldImage("");
            setLoading(false);
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

  const extractImageName = (url) => {
    const parsedUrl = new URL(url);
    const path = parsedUrl.pathname;
    const imageName = path.split("/").pop();
    return imageName;
  };

  const handleSubmit = async () => {
    let bodyObj = JSON.stringify({
      title,
      desc: value,
      // img: media && media,
      slug: slugify(title),
      catSlug: catSlug || "style", //If not selected, choose the general category
    });

    if (media) {
      bodyObj = JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style",
      });
    }
    const res = await fetch(`/api/posts/${slug}`, {
      method: "PUT",
      body: bodyObj,
    });
    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
      showToastWithTimeout();
      setToastContent({
        title: "Post updated successfully",
        type: "success",
      });
    } else {
      showToastWithTimeout();
      setToastContent({
        title: "Failed to update post",
        type: "error",
      });
    }
  };

  return (
    <div className="pt-40">
      <input
        type="text"
        placeholder="Title"
        value={title}
        className="bg-transparent border-b-2 px-10 py-4 text-5xl w-full placeholder-white outline-none focus:outline-none"
        maxLength={100}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className=" my-10 flex items-center justify-between">
        <select
          onChange={(e) => setCatSlug(e.target.value)}
          className="bg-brand_primary_dark py-4 px-10 appearance-none rounded-lg cursor-pointer focus:outline-none text-center"
          value={catSlug}
        >
          <option defaultValue>Select a category</option>
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
          <p className="text-xl font-semibold">
            Image : {file?.name} is uploaded
          </p>
        )}
        {!oldImage && !media && (
          <p className="text-xl font-semibold">Image : is not uploaded</p>
        )}
        {oldImage && (
          <p className="text-xl font-semibold">
            Image : {extractImageName(oldImage)} is already uploaded
          </p>
        )}
        {loading && (
          <div className="text-xl font-thin flex">
            Uploading <Loader className="ml-10" />
          </div>
        )}
        {!oldImage && (
          <>
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
                Add Image
              </label>
            </button>
          </>
        )}
      </div>

      <ReactQuill
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="Tell your story..."
        className="h-[50vh] "
      />
      <button
        disabled={!value || !title || loading}
        onClick={handleSubmit}
        className="bg-brand_primary_dark mt-10 py-4 px-10 border border-transparent hover:bg-transparent hover:border-brand_primary appearance-none rounded-lg cursor-pointer focus:outline-none transition-all duration-300 hover:text-brand_primary disabled:cursor-not-allowed"
      >
        Publish
      </button>
    </div>
  );
};

export default PostEditPage;
