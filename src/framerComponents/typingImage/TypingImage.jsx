"use client";
import { motion } from "framer-motion";
import Image from "next/image";
function TypingImage() {
  return (
    <motion.div
      className=" h-3/5 w-3/5 absolute bottom-24 xl:right-10 rounded-lg shadow-lg hover:shadow-black   hover:scale-105 transition-all duration-700"
      initial={{ y: 300 }}
      whileInView={{
        y: 50,
        transition: {
          ease: "linear",
          type: "spring",
          bounce: 0.4,
          duration: 0.3,
        },
      }}
      viewport={{ amount: 0.8, margin: "400px" }}
    >
      <Image
        src="/images/typing.png"
        alt="Picture of a matrix"
        className="w-full h-full object-cover rounded-lg"
        width={400}
        height={400}
      />
    </motion.div>
  );
}

export default TypingImage;
