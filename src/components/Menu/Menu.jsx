import React from "react";
// import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";

const Menu = ({ itemType = "" }) => {
  return (
    <div className="">
      <h1 className="text-4xl font-semibold my-5">Most Popular</h1>
      <MenuPosts itemType={itemType} postType="popular" />

      <h1 className="border-t pt-4 text-4xl font-semibold my-5">
        Editors Pick
      </h1>
      <MenuPosts itemType={itemType} postType="editorpicks" />
    </div>
  );
};

export default Menu;
