"use client";

import React from "react";
import Navlink from "../navLink/NavLink";
import AuthLinks from "../authLinks/AuthLinks";
import useModal from "@/app/store/useModal";
import classNames from "classnames";

export default function ResponsiveNav() {
  const { open } = useModal();
  return (
    <div
      className={classNames(
        "h-[100vh] w-[60vw] fixed  top-0  bg-brand_black py-32 px-12 flex flex-col gap-24 transition-all duration-300",
        {
          "-right-[2000px]": !open,
          "right-0": open,
        }
      )}
    >
      <div className="bg-glass p-3 rounded-[2rem] gap-9 flex flex-col ">
        <Navlink href="/">Home</Navlink>
        <Navlink href="/blogs">Blogs</Navlink>
        <Navlink href="/writeups">Write Ups</Navlink>
        <Navlink href="/about">About</Navlink>
      </div>
      {/* AuthLinks */}
      <div className="bg-glass p-3 rounded-[2rem] ">
        <AuthLinks />
      </div>
    </div>
  );
}
