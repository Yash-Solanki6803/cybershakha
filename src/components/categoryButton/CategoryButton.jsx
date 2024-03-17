import Link from "next/link";
import React from "react";

function CategoryButton({ category }) {
  return (
    <Link
      className="border text-center border-transparent bg-brand_primary_dark w-44 py-4 px-8 rounded-lg hover:bg-transparent hover:border-brand_primary hover:text-brand_primary transition-all duration-300 ease-in-out cursor-pointer"
      key={category.id}
      href={`/posts?page=1&cat=${category.name}`}
    >
      {category.name}
    </Link>
  );
}

export default CategoryButton;
