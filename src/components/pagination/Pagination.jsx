"use client";

import React from "react";
// import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";
import classNames from "classnames";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className=" flex justify-between xl:px-20 ">
      <button
        className={classNames(
          "cursor-pointer border border-transparent bg-brand_primary_dark py-2  sm:w-48 w-32 sm:rounded-full rounded-2xl sm:text-lg hover:bg-transparent hover:border-brand_primary hover:text-brand_primary transition-all duration-300",
          {
            "cursor-not-allowed": !hasPrev,
          }
        )}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        className={classNames(
          "cursor-pointer border border-transparent bg-brand_primary_dark py-2 sm:w-48 w-32 sm:rounded-full rounded-2xl sm:text-lg hover:bg-transparent hover:border-brand_primary hover:text-brand_primary transition-all duration-300",
          {
            "cursor-not-allowed": !hasNext,
          }
        )}
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
