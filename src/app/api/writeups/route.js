import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");
  const cat = searchParams.get("cat");

  const WRITEUP_PER_PAGE = 5;

  const query = {
    take: WRITEUP_PER_PAGE,
    skip: WRITEUP_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
  };

  try {
    const [writeUps, count] = await prisma.$transaction([
      prisma.writeUp.findMany(query),
      prisma.writeUp.count({ where: query.where }),
    ]);
    return new NextResponse(
      JSON.stringify({ writeUps, count }, { status: 200 })
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// CREATE A WriteUp
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const writeUp = await prisma.writeUp.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(writeUp, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
