import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const latestPickedPosts = await prisma.post.findMany({
      take: 8,
      orderBy: {
        createdAt: "desc", // Order by createdAt in descending order to get the latest posts
      },
      where: {
        pickedByEditor: true,
      },
    });

    return new NextResponse(
      JSON.stringify({ latestPickedPosts }, { status: 200 })
    );
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
