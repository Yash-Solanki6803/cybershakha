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
      <Image
        src="/images/matrix.png"
        alt="Picture of a matrix"
        className="w-full h-full object-cover rounded-lg"
        width={400}
        height={400}
      />
    </motion.div>
  );
}

export default MatrixImage;
