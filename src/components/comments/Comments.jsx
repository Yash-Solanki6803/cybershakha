"use client";

import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";
import extractDate from "@/utils/extractDate";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ writeUpSlug }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?writeUpSlug=${writeUpSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, writeUpSlug }),
    });
    mutate();
  };

  return (
    <div className=" w-full">
      <h4 className="my-8 text-4xl font-semibold">Comments</h4>
      {status === "authenticated" ? (
        <div className=" flex">
          <textarea
            className="text-black md:text-xl rounded-tl-3xl rounded-bl-3xl p-2 w-full outline-none focus:outline-none"
            placeholder="Write a comment..."
            maxLength={200}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            className="border border-transparent rounded-tr-3xl rounded-br-3xl bg-brand_primary_dark px-10 md:text-xl text-white cursor-pointer"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      ) : (
        <Link
          href="/login"
          className="border border-transparent block px-10 py-4 rounded-xl bg-red-500 text-lg text-center hover:border-brand_primary hover:bg-transparent transition-all duration-300"
        >
          Login to write a comment
        </Link>
      )}
      <div>
        {isLoading
          ? "loading"
          : data?.map((item, index) => (
              <div
                className="border-t mt-10 flex py-6  md:flex-row flex-col"
                key={index}
              >
                <div className="mt-2 flex gap-4 pr-4 md:border-r">
                  {item?.user?.image && (
                    <Image
                      className="rounded-full w-12 h-12"
                      src={item.user.image}
                      alt="Image of author of the comment"
                      width={500}
                      height={500}
                    />
                  )}
                  <div className="flex flex-col">
                    <span className="font-bold">{item.user.name}</span>
                    <span className="font-thin text-sm ">
                      {extractDate(item.createdAt)}
                    </span>
                  </div>
                </div>
                <p className="text-lg md:pl-4 mt-4">{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
