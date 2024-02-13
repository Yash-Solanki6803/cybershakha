"use client";
import Link from "next/link";
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
        <Link href="/login">Login</Link>
      ) : (
        <>
          {user?.isAdmin && <Link href="/writeup">Write Up</Link>}
          {/* {console.log(user?.isAdmin)} */}
          <Link href="/write">Write</Link>
          <span onClick={signOut}>Logout</span>
        </>
      )}
      {/* <div   onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div> */}
      {/* {open && ( */}
      {/* <div >
        <Link href="/">Homepage</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        {status === "unauthenticated" ? (
          <Link href="/login">Login</Link>
        ) : (
          <>
            <Link href="/write">Write</Link>
            <span>Logout</span>
          </>
        )}
      </div> */}
      {/* )} */}
    </>
  );
}
