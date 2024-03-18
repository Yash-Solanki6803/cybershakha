import Image from "next/image";
// import styles from "./card.module.css";
import Link from "next/link";
import classNames from "classnames";
import CardActions from "../cardActions/CardActions";

const Card = ({ item, isInverted = false }) => {
  return (
    <div
      className={classNames(" flex flex-col  gap-10 my-10", {
        "md:flex-row-reverse": isInverted,
        "md:flex-row": !isInverted,
      })}
    >
      {item.img && (
        <div>
          <Link href={`/posts/${item.slug}`}>
            <Image
              className="w-[550px] aspect-video object-cover rounded-tl-[15%] rounded-br-[15%] shadow-md hover:shadow-white transition-all duration-150"
              src={item.img}
              alt={`Image for ${item.title}`}
              width={1000}
              height={700}
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
            className="text-xl font-semibold py-5 block w-1/2 cursor-pointer hover:text-brand_primary_dark  transition-all duration-300"
          >
            <h1>{item.title}</h1>
          </Link>
          {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
          <div
            dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}
          />
        </article>
        <Link
          href={`/posts/${item.slug}`}
          className="cursor-pointer border-b-2 border-transparent hover:border-white transition-all duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
