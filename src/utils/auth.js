import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";
import { getServerSession } from "next-auth";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
};

// export async function fetchIsAdmin(email) {
//   const user = await prisma.user.findUnique({
//     where: { email },
//   });
//   console.log("fetch function", user?.isAdmin);
//   return user?.isAdmin || false;
// }

export const getAuthSession = () => getServerSession(authOptions);
