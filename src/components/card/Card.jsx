import Image from "next/image";
// import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div key={key} className="flex gap-10 my-10">
      {item.img && (
        <div>
          <Image
            className="w-[350px] aspect-video object-cover rounded-tl-[15%] rounded-br-[15%] shadow-md hover:shadow-white transition-all duration-150"
            src={item.img}
            alt=""
            width={100}
            height={70}
          />
        </div>
      )}
      <div className="flex flex-col justify-between pb-3">
        <article>
          <div>
            <span>{item.createdAt.substring(0, 10)} - </span>
            <span>{item.catSlug}</span>
          </div>
          <Link
            href={`/posts/${item.slug}`}
            className="text-xl font-semibold py-5 block cursor-pointer hover:text-brand_primary_dark  transition-all duration-300"
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
