"use client";
import classNames from "classnames";
import Link from "next/link";
import useModal from "@/store/useModal";

import { usePathname } from "next/navigation";

const Navlink = ({ href, children }) => {
  const { setOpen } = useModal();
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <div
      onClick={() => setOpen(false)}
      className={classNames("px-5 py-3 rounded-[3rem] text-base", {
        "bg-brand_primary_dark": isActive,
      })}
    >
      <Link
        href={href}
        className="border-transparent border-b-2 transition-all hover:border-white block h-full"
      >
        {children}
      </Link>
    </div>
  );
};

export default Navlink;
