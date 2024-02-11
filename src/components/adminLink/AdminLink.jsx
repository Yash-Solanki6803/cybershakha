const getUser = async () => {
  const res = await fetch(`http://localhost:3000/api/user`, {
    cache: "no-store",
  });
  console.log("res", res);
  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const AdminLink = () => {
  //   const user = await getUser();
  return <div>ISADMdIN2</div>;
};

export default AdminLink;
