import SingleMenuPost from "../singleMenuPost/SingleMenuPost";

const getData = async ({ itemType, postType }) => {
  const res = await fetch(
    `${process.env.WEB_DOMAIN}/api/${itemType}/${postType}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const MenuPosts = async ({ itemType = "posts", postType = "popular" }) => {
  const { posts } = await getData({ itemType, postType });
  return (
    <div>
      {posts?.map((item, index) => (
        <SingleMenuPost itemType={itemType} item={item} key={index} />
      ))}
    </div>
  );
};

export default MenuPosts;
