"use client";

import React from "react";
import Navlink from "../navLink/NavLink";
import AuthLinks from "../authLinks/AuthLinks";
import useModal from "@/store/useModal";
import classNames from "classnames";
import Image from "next/image";

export default function ResponsiveNav() {
  const { open } = useModal();
  return (
    <div
      className={classNames(
        "h-[100vh] w-[60vw] fixed  top-0  bg-brand_black py-32 md:px-12 px-6 flex flex-col gap-24 transition-all duration-300",
        {
          "-right-[2000px]": !open,
          "right-0": open,
        }
      )}
    >
      <div className="absolute top-5 left-0 px-5 ">
        <div className="h-16 w-16 relative">
          <Image
            src="/assets/newLogo.png"
            alt="logo"
            fill
            className="rounded-full object-contain"
            sizes="64px"
          />
        </div>
      </div>
      <div className="bg-glass p-3 rounded-[2rem] sm:gap-9 flex flex-col">
        <Navlink href="/">Home</Navlink>
        <Navlink href="/posts">Blogs</Navlink>
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
