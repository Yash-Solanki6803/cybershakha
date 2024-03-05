"use client";
function DeleteIcon({ width, height, fill, item }) {
  const handleDeleteClick = async () => {
    console.log("Deleting post", item);
    try {
      const response = await fetch(`/api/posts/${item.slug}`, {
        method: "DELETE",
      });

      // const data = await response.json();
      console.log("Response:", response);

      if (response.status === 200) {
        // Handle successful deletion
        console.log("Post deleted successfully");
      } else {
        // Handle error
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <span onClick={handleDeleteClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width} // Set the desired width
        height={height} // Set the desired height
        viewBox="0 0 48 48" // Adjust the viewBox to maintain aspect ratio
        fill={fill || "white"}
        id="delete"
        className="hover:fill-red-600 transition-all duration-150"
      >
        <path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z"></path>
        <path fill="none" d="M0 0h48v48H0z"></path>
      </svg>
    </span>
  );
}

export default DeleteIcon;
