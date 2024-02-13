import Menu from "@/components/Menu/Menu";
// import styles from "./singlePage.module.css";
import Image from "next/image";
// import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
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

  return (
    <div>
      <div>
        <div>
          <h1>{data?.title}</h1>
          <div>
            {data?.user?.image && (
              <div>
                <Image src={data.user.image} alt="" fill />
              </div>
            )}
            <div>
              <span>{data?.user.name}</span>
              <span>01.01.2024</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div>
            <Image src={data.img} alt="" fill />
          </div>
        )}
      </div>
      <div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: data?.desc }} />
          <div>
            {/* <Comments postSlug={slug} /> */}
            Comments ....
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
