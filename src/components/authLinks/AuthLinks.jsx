"use client";
import Link from "next/link";
// import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
// import AdminLink from "../adminLink/AdminLink";

export default function AuthLinks() {
  //   const [open, setOpen] = useState(false);

  const { status, data } = useSession();
  // const session = await getAuthSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          {/* {checkAdmin() && <Link href="/writeup">Write Up</Link>} */}

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
