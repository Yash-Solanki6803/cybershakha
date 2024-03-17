const extractDate = (createdAt) => {
  const dateObj = new Date(createdAt);

  // Extract the date components
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Adding 1 because getMonth() returns zero-based index
  const day = String(dateObj.getDate()).padStart(2, "0");

  // Format the date
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

export default extractDate;
