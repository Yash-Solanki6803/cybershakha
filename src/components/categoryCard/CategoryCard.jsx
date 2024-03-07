import React from "react";
import Image from "next/image";

function CategoryCard({ src, title, desc }) {
  return (
    <div className="border border-transparent sm:size-[300px] size-56 bg-glass-gradient rounded-3xl sm:p-6 p-4 hover:border-brand_primary transition-all duration-500">
      <Image className="sm:w-16 w-20" src={src} width={60} height={60} />
      <h2 className="mt-4 sm:text-3xl text-2xl font-semibold">{title}</h2>
      <p className="mt-4 sm:block hidden">{desc}</p>
    </div>
  );
}

export default CategoryCard;
