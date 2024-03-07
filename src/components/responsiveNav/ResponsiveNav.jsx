"use client";

import React from "react";
import Navlink from "../navLink/NavLink";
import AuthLinks from "../authLinks/AuthLinks";
import useModal from "@/app/store/useModal";

export default function ResponsiveNav() {
  const { open } = useModal();
  return (
    <>
      {open && (
        <div className="h-[100vh] w-[60vw] fixed right-0 top-0  bg-black py-32 px-12 flex flex-col gap-24">
          <div className="bg-glass p-3 rounded-[2rem] gap-9 flex flex-col ">
            <Navlink href="/">Home</Navlink>
            <Navlink href="/blogs">Blogs</Navlink>
            <Navlink href="/about">About</Navlink>
            <Navlink href="/about#services">Services</Navlink>
          </div>
          {/* AuthLinks */}
          <div className="bg-glass p-3 rounded-[2rem] ">
            <AuthLinks />
          </div>
        </div>
      )}
    </>
  );
}
