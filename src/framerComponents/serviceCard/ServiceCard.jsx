"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function ServiceCard({ src, title, description, delay }) {
  return (
    <motion.div
      className="border-2 border-transparent h-full lg:w-full bg-glass-gradient object-contain rounded-3xl relative lg:px-4 px-10 lg:py-14 py-6 hover:-translate-y-3 hover:border-brand_primary transition-all duration-1000 ease-out hover:shadow-lg hover:shadow-slate-700"
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
    >
      <div className="bg-black lg:size-20 size-14 rounded-full flex items-center justify-center absolute border-2 border-brand_primary top-0 left-0 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2  hover:scale-105 hover:shadow-lg hover:shadow-slate-700 transition-all duration-200 ">
        <Image
          className="object-contain animate-pulse size-6 lg:size-8"
          src={src}
          alt="icon"
          width={30}
          height={30}
        />
      </div>
      <h4 className="xl:text-3xl lg:text-2xl text-xl text-center font-semibold lg:w-full ">
        {title}
      </h4>
      <p className="mt-6 lg:text-sm text-sm text-center">{description}</p>
    </motion.div>
  );
}

export default ServiceCard;
