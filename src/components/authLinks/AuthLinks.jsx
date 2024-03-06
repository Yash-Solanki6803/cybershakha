"use client";
import Navlink from "../navLink/NavLink";
import { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";

export default function AuthLinks() {
  //   const [open, setOpen] = useState(false);

  const { status, data } = useSession();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/user");

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error("Failed to fetch user:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      {status === "unauthenticated" ? (
        <Navlink href="/login">Login</Navlink>
      ) : (
        <>
          {user?.isAdmin && <Navlink href="/write">Write Up</Navlink>}
          <Navlink href="/create">Create</Navlink>
          <span
            className="bg-brand_primary_dark px-5 py-3 rounded-[3rem] text-base cursor-pointer"
            onClick={signOut}
          >
            Logout
          </span>
        </>
      )}
      {/* <div   onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div> */}
      {/* {open && ( */}
      {/* <div >
        <Navlink href="/">Homepage</Navlink>
        <Navlink href="/">About</Navlink>
        <Navlink href="/">Contact</Navlink>
        {status === "unauthenticated" ? (
          <Navlink href="/login">Login</Navlink>
        ) : (
          <>
            <Navlink href="/write">Write</Navlink>
            <span>Logout</span>
          </>
        )}
      </div> */}
      {/* )} */}
    </>
  );
}
