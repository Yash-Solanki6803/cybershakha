"use client";
import Link from "next/link";

function SingleMenuPost({ itemType = "", item, key }) {
  return (
    <Link
      key={key}
      className=" my-4 py-1 block border-b border-transparent hover:border-white transition-all duration-300"
      href={`/${itemType}/${item?.slug}`}
    >
      <div key={key} className="my-4 py-1 block">
        <span className="text-sm px-4 py-1 rounded-md bg-gray-700">
          {item?.catSlug}
        </span>
        <h3 className="mt-2 font-semibold 2xl:text-lg">{item?.title}</h3>
      </div>
    </Link>
  );
}

export default SingleMenuPost;
