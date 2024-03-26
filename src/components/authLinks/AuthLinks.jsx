"use client";
import Navlink from "../navLink/NavLink";
import { useEffect } from "react";
import useUser from "@/store/useUser";
import { signOut, useSession } from "next-auth/react";

export default function AuthLinks() {
  const { status, data } = useSession();
  const { user, setUser } = useUser();

  const fetchURL =
    process.env.NEXT_PUBLIC_MODE == "dev"
      ? "http://localhost:3000"
      : "https://cybershakha.vercel.app";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${fetchURL}/api/user`);

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
            className="bg-brand_primary_dark px-5 py-3 rounded-[3rem] text-base cursor-pointer mt-4 block lg:mt-0"
            onClick={signOut}
          >
            Logout
          </span>
        </>
      )}
    </>
  );
}
