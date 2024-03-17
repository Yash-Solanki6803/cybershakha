import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const posts = await prisma.writeUp.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc", // Order by createdAt in descending order to get the latest posts
      },
      where: {
        pickedByEditor: true,
      },
    });

    return new NextResponse(JSON.stringify({ posts }, { status: 200 }));
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
