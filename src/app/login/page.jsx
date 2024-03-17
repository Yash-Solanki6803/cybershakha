"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { google } from "@/../public/icons";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className=" min-h-[70vh] py-60 flex justify-center">
      <div className="py-28 md:px-32 px-4 flex justify-center items-center xl:w-3/4 rounded-2xl bg-brand_black shadow-2xl shadow-slate-500">
        <div
          className="border flex items-center bg-slate-300 rounded-full lg:px-32 md:px-14 px-4 md:py-10 py-6 sm:gap-20 gap-4"
          onClick={() => signIn("google")}
        >
          <Image
            className="md:w-16 w-10 h-auto"
            src={google}
            alt="google"
            width={75}
            height={75}
            priority
          />
          <p className="lg:text-4xl md:text-3xl text-xl text-brand_black">
            Sign in with Google
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
