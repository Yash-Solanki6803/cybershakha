import Image from "next/image";
import Link from "next/link";
const getData = async ({ itemType }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEB_DOMAIN}/api/${itemType}/editorpicks`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

async function TopPost({ itemType = "posts" }) {
  const { posts } = await getData({ itemType });
  const TopPost = posts[0];
  return (
    <div className=" h-full flex flex-col items-start lg:w-1/2 mt-10">
      <div className=" w-full aspect-video relative">
        <Image
          src={TopPost?.img || "/images/typing.png"}
          alt="Image of the Top Post picked by the Editor"
          className="  object-cover shadow-2xl hover:shadow-white  rounded-tl-[15%] rounded-br-[15%] transition-all duration-500 ease-in-out"
          fill
          priority={false}
          placeholder="blur"
          blurDataURL={TopPost?.img || "/images/typing.png"}
          sizes="(min-width:1024px)50vw,100vw"
        />
      </div>
      <h3 className="mt-10 xl:text-4xl lg:text-3xl text-xl font-semibold">
        {TopPost?.title ||
          "Lorem ipsum dolor sit amet alim consectetur adipisicing elit."}
      </h3>
      <Link
        href={`/${itemType}/${TopPost?.slug || "lorem-ipsum"}`}
        className="mt-10 bg-brand_primary_dark px-16 py-4 rounded-lg hover:bg-transparent hover:text-brand_primary border  border-transparent transition-all duration-300 ease-in-out hover:border-brand_primary"
      >
        Read More
      </Link>
    </div>
  );
}

export default TopPost;
