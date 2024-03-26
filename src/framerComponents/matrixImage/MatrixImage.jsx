"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function MatrixImage() {
  return (
    <motion.div
      className=" h-3/5 w-3/5 absolute flex items-center rounded-lg shadow-lg hover:shadow-black  hover:scale-105 transition-all duration-700 
        "
      initial={{ y: 300 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0, type: "spring", bounce: 0.5 }}
    >
      <div className="relative w-full h-full">
        <Image
          src="/images/matrix.png"
          alt="Picture of a matrix"
          className="object-cover rounded-lg"
          fill
        />
      </div>
    </motion.div>
  );
}

export default MatrixImage;
