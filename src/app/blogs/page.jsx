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
      <div className=" h-[80vh] w-full flex gap-10 border-b">
        <div className=" h-full w-1/2 pr-20 py-24">
          <h1 className="text-8xl font-bold">
            Insights, Analysis, and Cybersecurity Wisdom
          </h1>
          <p className="text-lg mt-10">
            Explore the CyberShakha Blog for Expert Guidance on Navigating the
            Digital Landscape
          </p>
        </div>
        <div className=" h-full w-1/2">
          <Image
            src="/images/typing.png"
            alt="Hero Image"
            className="w-full aspect-video object-cover shadow-2xl hover:shadow-white  rounded-tl-[15%] rounded-br-[15%] transition-all duration-500 ease-in-out"
            objectFit="cover"
            width={500}
            height={500}
          />
          <h3 className="mt-10 mb-20 text-4xl">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.{" "}
          </h3>
          <Link
            href="/"
            className="bg-brand_primary_dark px-16 py-4 rounded-lg hover:bg-transparent hover:text-brand_primary  -transparent transition-all duration-300 ease-in-out hover:-brand_primary"
          >
            Read More
          </Link>
        </div>
      </div>
      <div className="mt-10 flex flex-col">
        <h2 className="text-5xl">Popular Categories</h2>
        <div className="flex justify-around mt-10">
          {data.categories.map((category) => (
            <Link
              className="border border-transparent bg-brand_primary_dark py-4 px-8 rounded-lg hover:bg-transparent hover:border-brand_primary hover:text-brand_primary transition-all duration-300 ease-in-out cursor-pointer"
              key={category.id}
              href="/"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full flex mt-10">
        <div className="w-2/3 min-h-[50vh]">
          <CardList page={page} cat={cat} />
        </div>
        <div className="w-1/3"> {/* <Menu /> */}</div>
      </div>
    </div>
  );
};

export default BlogPage;
