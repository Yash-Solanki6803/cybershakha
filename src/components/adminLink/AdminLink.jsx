const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/user`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const AdminLink = async () => {
  //   const user = await getUser();
  const data = await getData();
  return <div> {data?.email} is Admin</div>;
};

export default AdminLink;
