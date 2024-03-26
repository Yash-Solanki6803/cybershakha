import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import CardActions from "../cardActions/CardActions";
import Markdown from "markdown-to-jsx";
const WriteUpCard = ({ item, isInverted = false }) => {
  return (
    <div
      className={classNames(" flex flex-col  gap-10 my-10", {
        "md:flex-row-reverse": isInverted,
        "md:flex-row": !isInverted,
      })}
    >
      {item.img && (
        <div className="md:w-3/5 aspect-video w-full">
          <Link
            href={`/writeups/${item.slug}`}
            className="block w-full h-full relative"
          >
            <Image
              className="  object-cover rounded-tl-[15%] rounded-br-[15%] shadow-md hover:shadow-white transition-all duration-150"
              src={item.img}
              alt={`Image for ${item.title}`}
              fill
              placeholder="blur"
              blurDataURL={item.img}
              priority={false}
              sizes="(min-width:600px)50vw,100vw"
            />
          </Link>
        </div>
      )}
      <div className="flex flex-col justify-between pb-3 w-full">
        <article>
          <div className="relative ">
            <span>{item.createdAt.substring(0, 10)} - </span>
            <span>{item.catSlug}</span>
            <CardActions item={item} itemtype="writeups" />
          </div>
          <Link
            href={`/writeups/${item.slug}`}
            className="text-xl font-semibold py-5 block w-1/2 cursor-pointer hover:text-brand_primary_dark  transition-all duration-300"
          >
            <h1>{item.title}</h1>
          </Link>
          <div className="line-clamp-1">
            <Markdown>{item?.desc}</Markdown>
          </div>
        </article>
        <Link
          href={`/writeups/${item.slug}`}
          className="cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default WriteUpCard;
