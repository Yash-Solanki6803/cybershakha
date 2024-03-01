import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  //   const query = {
  //     take: POST_PER_PAGE,
  //     skip: POST_PER_PAGE * (page - 1),
  //     where: {
  //       ...(cat && { catSlug: cat }),
  //     },
  //   };

  try {
    const topPosts = await prisma.post.findMany({
      take: 4,
      orderBy: {
        views: "desc",
      },
    });
    return new NextResponse(JSON.stringify({ topPosts }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
