//check if the current user is an admin
export const isAdmin = async (req) => {
  const userResponse = await fetch("/api/user");
  const user = await userResponse.json();
  return user.isAdmin;
};
