import React from "react";
import Image from "next/image";

function CategoryCard({ src, title, desc }) {
  return (
    <div className="border border-transparent size-[300px] bg-glass-gradient rounded-3xl p-6 hover:border-brand_primary transition-all duration-500">
      <Image src={src} width={60} height={60} />
      <h2 className="mt-4 text-3xl font-semibold">{title}</h2>
      <p className="mt-4">{desc}</p>
    </div>
  );
}

export default CategoryCard;
