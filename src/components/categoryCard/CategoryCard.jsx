import React from "react";
import Image from "next/image";

function CategoryCard({ src, title, desc }) {
  return (
    <div className="border border-transparent  lg:h-56 2xl:size-72  md:size-[250px] min-h-48 w-full bg-glass-gradient rounded-3xl  p-6 hover:border-brand_primary transition-all duration-500">
      <div className="flex  gap-4 items-center">
        <Image
          className="sm:w-14 w-10 sm:h-14 h-10"
          alt={`Icon for ${title} category`}
          src={src}
          width={60}
          height={60}
        />
        <h2 className="mt-4 md:text-2xl text-xl font-semibold">{title}</h2>
      </div>
      <p className="mt-4 text-sm text-center">{desc}</p>
    </div>
  );
}

export default CategoryCard;
