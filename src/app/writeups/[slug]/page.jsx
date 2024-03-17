import Menu from "@/components/Menu/Menu";
import Image from "next/image";
// import Comments from "@/components/comments/Comments";
import Markdown from "markdown-to-jsx";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/writeups/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);
  const extractDate = (createdAt) => {
    const dateObj = new Date(createdAt);

    // Extract the date components
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Adding 1 because getMonth() returns zero-based index
    const day = String(dateObj.getDate()).padStart(2, "0");

    // Format the date
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  return (
    <div className=" lg:pt-64 pt-52">
      {/* Writeup Header */}
      <div className=" min-h-[60vh] flex lg:flex-row flex-col pb-10 lg:gap-10 border-b">
        <div className="lg:h-full   flex flex-col justify-around  lg:w-1/2 lg:pr-20 lg:py-10">
          {/* Title and Desc */}
          <h1 className="2xl:text-8xl lg:text-6xl md:text-8xl sm:text-6xl text-5xl md:text-left text-center font-bold">
            {data?.title}
          </h1>
          <div className="line-clamp-3 text-2xl font-light mt-10 md:text-left text-center">
            <Markdown>{data?.desc}</Markdown>
          </div>

          {/* Author Info */}
          <div className="flex  items-center  lg:mt-20 mt-10">
            {data?.user?.image && (
              <div>
                <Image
                  className="rounded-full"
                  src={data.user.image}
                  alt={`Image of ${data.user.name}`}
                  width={75}
                  height={75}
                />
              </div>
            )}
            <div className="ml-4 flex flex-col">
              <span className="text-2xl">{data?.user.name}</span>
              <span className="font-light">{extractDate(data?.createdAt)}</span>
            </div>
            <div className="ml-4 px-6 py-2 bg-gray-700 capitalize rounded-lg">
              {data?.catSlug}
            </div>
          </div>
        </div>
        {/* IMG */}
        {data.img && (
          <div className=" h-full flex flex-col items-start lg:w-1/2  lg:mt-0 mt-10">
            <Image
              src={data?.img}
              alt={`Image of ${data?.title}`}
              className="w-full aspect-video object-cover shadow-2xl hover:shadow-white  rounded-tl-[15%] rounded-br-[15%] transition-all duration-500 ease-in-out"
              objectFit="cover"
              width={500}
              height={500}
            />
          </div>
        )}
      </div>

      <div className=" w-full flex lg:flex-row flex-col mt-10 lg:gap-10">
        <div className=" lg:w-2/3 min-h-[50vh] md:pr-10 lg:border-r flex flex-col items-center">
          <div className="text-white prose prose-2xl prose-neutral w-full prose-headings:text-white prose-p:text-white prose-a:text-brand_primary prose-blockquote:text-slate-400 prose-code:text-green-300">
            <Markdown>{data?.desc}</Markdown>
          </div>

          <div>
            {/* <Comments postSlug={slug} /> */}
            Comments ....
          </div>
        </div>
        <div className=" lg:mt-0 mt-10 flex lg:w-1/3 min-h-[50vh] ">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
