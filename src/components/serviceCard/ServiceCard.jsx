import React from "react";
import Image from "next/image";

function ServiceCard({ src, title, description }) {
  return (
    <div className="border-2 border-transparent h-[60%] md:w-1/4 bg-glass-gradient object-contain rounded-3xl relative px-10 md:py-14 py-2 hover:-translate-y-3 hover:border-brand_primary transition-all duration-150 hover:shadow-lg hover:shadow-slate-700">
      <div className="bg-black md:size-20 size-14 rounded-full flex items-center justify-center absolute border-2 border-brand_primary top-0 left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2  hover:scale-105 hover:shadow-lg hover:shadow-slate-700 transition-all duration-200 ">
        <Image
          className="object-contain animate-pulse size-6 md:size-8"
          src={src}
          alt="icon"
          width={30}
          height={30}
        />
      </div>
      <h4 className="md:text-3xl text-xl text-center font-semibold md:w-full ">
        {title}
      </h4>
      <p className="mt-6 text-center">{description}</p>
    </div>
  );
}

export default ServiceCard;
