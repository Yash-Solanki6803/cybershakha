import React from "react";
// import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
// import Image from "next/image";
// import Card from "../card/Card";
import WriteUpCard from "../writeUpCard/WriteUpCard";
import VectorComponent from "../vector/Vector";
import Highlighter from "../highlighter/Highlighter";

const getData = async (page, cat) => {
  const res = await fetch(
    `${process.env.WEB_DOMAIN}/api/writeups?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const WriteUpList = async ({ page, cat }) => {
  const { writeUps, count } = await getData(page, cat);

  const POST_PER_PAGE = 5;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className="  relative h-full md:pr-10 lg:border-r ">
      {cat ? (
        <h1 className="text-4xl font-semibold my-5">Category: {cat}</h1>
      ) : (
        <h1 className="text-4xl font-semibold my-5">Recent writeUps</h1>
      )}

      <div>
        {writeUps?.map((item, index) => (
          <WriteUpCard isInverted={index % 2 != 0} item={item} key={index} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
      <VectorComponent
        size={5}
        className="top-0 -left-[500px] transform rotate-180"
      />
      <Highlighter size={3} className="top-0 -left-[500px]" />
    </div>
  );
};

export default WriteUpList;
