import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET SINGLE writeUp
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const writeUp = await prisma.writeUp.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(writeUp, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
