import classNames from "classnames";
import Link from "next/link";
import React from "react";

function Button({
  children = "Button",
  className = "",
  onClick = () => {},
  href = "#",
}) {
  return (
    <Link
      className={classNames(
        " rounded-md bg-brand_primary_dark py-6 px-16 text-2xl hover:bg-transparent hover:text-brand_primary hover:border-2 hover:border-brand_primary_dark transition-all duration-200 ease-in-out text-white border-2 border-brand_primary_dark cursor-pointer",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
}

export default Button;
