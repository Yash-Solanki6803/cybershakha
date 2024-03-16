import CardList from "@/components/cardList/CardList";
// import styles from "./blogPage.module.css";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/data";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div className="pt-40 w-full">
      <div className=" min-h-[60vh] w-full flex lg:flex-row flex-col pb-10 lg:gap-10 border-b">
        <div className=" lg:h-full lg:w-1/2 lg:pr-20 lg:py-10">
          <h1 className="2xl:text-8xl lg:text-6xl md:text-8xl sm:text-6xl text-5xl md:text-left text-center font-bold">
            Insights, Analysis, and Cybersecurity Wisdom
          </h1>
          <p className="2xl:text-3xl text-lg mt-10 md:text-left text-center">
            Explore the CyberShakha Blog for Expert Guidance on Navigating the
            Digital Landscape
          </p>
        </div>
        <div className=" h-full flex flex-col items-start lg:w-1/2 mt-10">
          <Image
            src="/images/typing.png"
            alt="Hero Image"
            className="w-full aspect-video object-cover shadow-2xl hover:shadow-white  rounded-tl-[15%] rounded-br-[15%] transition-all duration-500 ease-in-out"
            objectFit="cover"
            width={500}
            height={500}
          />
          <h3 className="mt-10 xl:text-4xl lg:text-3xl text-xl">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.{" "}
          </h3>
          <Link
            href="/"
            className="mt-10 bg-brand_primary_dark px-16 py-4 rounded-lg hover:bg-transparent hover:text-brand_primary border  border-transparent transition-all duration-300 ease-in-out hover:border-brand_primary"
          >
            Read More
          </Link>
        </div>
      </div>
      <div className="mt-10 flex flex-col">
        <h2 className="text-5xl">Popular Categories</h2>
        <div className=" flex flex-wrap justify-between xl:gap-0 gap-4 mt-10">
          {data.categories.map((category) => (
            <Link
              className="border text-center border-transparent bg-brand_primary_dark w-44 py-4 px-8 rounded-lg hover:bg-transparent hover:border-brand_primary hover:text-brand_primary transition-all duration-300 ease-in-out cursor-pointer"
              key={category.id}
              href="/"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      <div className=" w-full flex lg:flex-row flex-col mt-10 lg:gap-10">
        <div className=" lg:w-2/3 min-h-[50vh] ">
          <CardList page={page} cat={cat} />
        </div>
        <div className="lg:mt-0 mt-10 flex lg:w-1/3 min-h-[50vh] ">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
