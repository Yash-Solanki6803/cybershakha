import React from "react";
import Image from "next/image";

function CategoryCard({ src, title, desc }) {
  return (
    <div className="border border-transparent  lg:h-56 2xl:size-72  md:size-[250px] h-48 w-full bg-glass-gradient rounded-3xl md:p-6 p-4 hover:border-brand_primary transition-all duration-500">
      <div className="flex  gap-4 items-center">
        <Image className="  w-14 h-14" src={src} width={60} height={60} />
        <h2 className="mt-4 text-2xl font-semibold">{title}</h2>
      </div>
      <p className="mt-4 ">{desc}</p>
    </div>
  );
}

export default CategoryCard;
