"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function Testimonial({
  image = "/clients/Image1.jpg",
  name = "Miss Sammy Feeney",
  position = "HOD , at ABC",
  rating = 5,
  text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet saepe provident nobis, porro optio vero perferendis nostrum velit aliquam inventore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, optio.",
  delay,
}) {
  return (
    <motion.div
      className=" flex flex-col gap-2 lg:w-full  rounded-lg sm:h-[250px] sm:w-3/4 p-4 bg-black_light"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 * delay }}
    >
      <div className="h-1/2 ">
        <p>{text}</p>
      </div>
      <div className="h-1/2  flex justify-start items-center gap-4">
        <div className=" flex items-center rounded-full h-[80px] w-[80px] relative ">
          <Image
            src={image}
            alt="Picture of the client"
            fill
            sizes="100px"
            className="rounded-full object-contain"
          />
        </div>

        <div className=" flex flex-col items-start justify-between h-full w-full">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p>{position}</p>
          <p>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span key={i} className="text-brand_primary">
                  &#11088;
                </span>
              ))}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Testimonial;
