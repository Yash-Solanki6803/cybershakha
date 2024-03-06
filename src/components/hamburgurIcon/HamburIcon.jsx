"use client";
import useModal from "@/app/store/useModal";
import "./hamburIcon.css";
import classNames from "classnames";
// import ResponsiveNav from "../responsiveNav/ResponsiveNav";

export default function HamburIcon({ className = "" }) {
  const { open, setOpen } = useModal();
  return (
    <div
      id="nav-icon3"
      className={classNames(
        "z-20 cursor-pointer block xl:hidden",
        {
          open: open,
        },
        ...className
      )}
      onClick={() => setOpen(!open)}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
