import { authOptions, fetchIsAdmin } from "@/utils/auth";
import NextAuth from "next-auth";

const handler = NextAuth({
  ...authOptions,
  // callbacks: {
  //   async jwt(token, user) {
  //     if (user) {
  //       token.isAdmin = await fetchIsAdmin(user.email);
  //     }
  //     console.log("token ", token);
  //     return token;
  //   },
  // },
});

export { handler as GET, handler as POST };
