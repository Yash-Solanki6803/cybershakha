"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function CategoryCard({ src, title, desc, delay }) {
  const xAnimationValue = delay % 2 === 0 ? -100 : 100;
  return (
    <motion.div
      className="border border-transparent  lg:h-56 2xl:size-72  md:size-[250px] min-h-48 w-full bg-glass-gradient rounded-3xl  p-6 hover:border-brand_primary transition-all duration-500 flex flex-col items-center justify-around xl:py-14"
      initial={{ opacity: 0, x: xAnimationValue }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.4,
        delay: delay * 0.2,
        type: "spring",
        bounce: 0.4,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
    >
      <div className="flex  gap-4 items-center ">
        <div className="sm:w-20 w-10 sm:h-14 h-10 relative ">
          <Image
            className="object-contain"
            alt={`Icon for ${title} category`}
            src={src}
            fill
            sizes="100px"
          />
        </div>
        <h2 className="sm:mt-0 mt-4 md:text-2xl  text-xl font-semibold">
          {title}
        </h2>
      </div>
      <p className="mt-4 text-sm text-center">{desc}</p>
    </motion.div>
  );
}

export default CategoryCard;
