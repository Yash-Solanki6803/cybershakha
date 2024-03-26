import Image from "next/image";
// import styles from "./card.module.css";
import Link from "next/link";
import classNames from "classnames";
import CardActions from "../cardActions/CardActions";

const Card = ({ item, isInverted = false }) => {
  return (
    <div
      className={classNames(
        "pt-10 border-t sm:border-none flex flex-col  gap-10 my-10",
        {
          "sm:flex-row-reverse": isInverted,
          "sm:flex-row": !isInverted,
        }
      )}
    >
      {item.img && (
        <div className="md:w-3/5 aspect-video w-full">
          <Link
            href={`/posts/${item.slug}`}
            className="block w-full h-full relative"
          >
            <Image
              className=" object-cover rounded-tl-[15%] rounded-br-[15%] shadow-md hover:shadow-white transition-all duration-200"
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
      <div className=" flex flex-col justify-between pb-3 w-full">
        <article>
          <div className="relative ">
            <span>{item.createdAt.substring(0, 10)} - </span>
            <span>{item.catSlug}</span>

            <CardActions item={item} itemtype="posts" />
          </div>
          <Link
            href={`/posts/${item.slug}`}
            className="line-clamp-3 md:text-3xl text-xl font-semibold py-5 block md:w-1/2 cursor-pointer hover:text-brand_primary_dark  transition-all duration-300"
          >
            <h1>{item.title || "This Blog has no title"}</h1>
          </Link>
          {/* <div
            dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}
          /> */}
        </article>
        <Link
          href={`/posts/${item.slug}`}
          className="cursor-pointer border-b-2 border-transparent hover:border-white underline transition-all duration-300"
        >
          Read full article
        </Link>
      </div>
    </div>
  );
};

export default Card;
