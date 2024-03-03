//check if the current user is author of the given post
export const isAuthor = async (req, slug) => {
  const userResponse = await fetch("/api/user");
  const user = await userResponse.json();
  const postResponse = await fetch(`/api/posts/${slug}`);
  const post = await postResponse.json();
  return post.user.id === user.id;
};
