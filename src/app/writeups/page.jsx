import WriteUpList from "@/components/writeUpList/WriteUpList";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/data";
import CategoryButton from "@/components/categoryButton/CategoryButton";
import TopPost from "@/components/topBlog/TopBlog";
const WriteUpPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div className="pt-40 w-full">
      <div className=" min-h-[60vh] w-full flex lg:flex-row flex-col pb-10 lg:gap-10 border-b">
        <div className=" lg:h-full lg:w-1/2 lg:pr-20 lg:py-10">
          <h1 className="2xl:text-8xl lg:text-6xl md:text-8xl sm:text-6xl text-5xl text-left font-bold">
            Insights, Analysis, and Cybersecurity Wisdom
          </h1>
          <p className="2xl:text-3xl text-lg mt-10 text-left">
            Explore the CyberShakha Blog for Expert Guidance on Navigating the
            Digital Landscape
          </p>
        </div>
        <TopPost itemType="writeups" />
      </div>
      <div className="mt-10 flex flex-col">
        <h2 className="text-5xl">Popular Categories</h2>
        <div className=" flex flex-wrap justify-between xl:gap-0 gap-4 mt-10">
          {data.categories.map((category) => (
            <CategoryButton
              itemType="writeups"
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
      <div className=" w-full flex lg:flex-row flex-col mt-10 lg:gap-10">
        <div className=" lg:w-2/3 min-h-[50vh] ">
          <WriteUpList page={page} cat={cat} />
        </div>
        <div className="lg:mt-0 mt-10 flex lg:w-1/3 min-h-[50vh] ">
          <Menu itemType="writeups" />
        </div>
      </div>
    </div>
  );
};

export default WriteUpPage;
