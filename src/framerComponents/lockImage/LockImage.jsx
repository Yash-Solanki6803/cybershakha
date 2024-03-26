"use client";
import { motion } from "framer-motion";
import Image from "next/image";
function LockImage() {
  return (
    <motion.div
      className="hidden lg:flex flex-auto lg:mt-0 mt-10 xl:w-2/5 lg:w-1/2 lg:justify-end justify-center relative"
      initial={{ x: 400, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: "easeIn",
        type: "spring",
        bounce: 0.5,
      }}
      viewport={{ once: true }}
    >
      <div className="lg:w-full w-3/4 relative">
        <Image
          src="/images/lock.png"
          alt="Picture of a lock"
          className="object-contain hover:customDropShadow transition-all duration-500 hover:translate-x-6 hover:translate-y-6 hover:scale-105"
          fill
        />
      </div>
    </motion.div>
  );
}

export default LockImage;
