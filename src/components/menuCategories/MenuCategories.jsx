import Link from "next/link";
import React from "react";
// import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div>
      <Link href="/blog?cat=style">Style</Link>
      <Link href="/blog">Fashion</Link>
      <Link href="/blog">Food</Link>
      <Link href="/blog">Travel</Link>
      <Link href="/blog">Culture</Link>
      <Link href="/blog">Coding</Link>
    </div>
  );
};

export default MenuCategories;
