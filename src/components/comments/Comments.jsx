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
            className="text-black text-xl rounded-tl-3xl rounded-bl-3xl p-4 w-full outline-none focus:outline-none"
            placeholder="Write a comment..."
            maxLength={200}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            className="border border-transparent rounded-tr-3xl rounded-br-3xl bg-brand_primary_dark px-10 text-xl text-white cursor-pointer"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div>
        {isLoading
          ? "loading"
          : data?.map((item) => (
              <div className="border-t mt-10 flex py-6 " key={item._id}>
                <div className="mt-2 flex gap-4 pr-4 border-r">
                  {item?.user?.image && (
                    <Image
                      className="rounded-full"
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                    />
                  )}
                  <div className="flex flex-col">
                    <span className="font-bold">{item.user.name}</span>
                    <span className="font-thin text-sm">
                      {extractDate(item.createdAt)}
                    </span>
                  </div>
                </div>
                <p className="text-lg pl-4 mt-4">{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
