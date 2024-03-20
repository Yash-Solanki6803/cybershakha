import { getAuthSession } from "@/utils/auth";
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

//delete a WriteUp
export const DELETE = async (req, { params }) => {
  const { slug } = params;
  const session = await getAuthSession();
  console.log("Api delete called");

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  // Fetch information about the current user from /api/user
  try {
    // Check if the user is an admin or the author of the Writeup
    const canDelete = true;

    if (canDelete) {
      console.log("Deleting WriteUp");
      const res = await prisma.writeUp.delete({
        where: { slug },
      });
      console.log(res);
      return new NextResponse(
        JSON.stringify(
          { message: "WriteUp deleted successfully" },
          { status: 200 }
        )
      );
    }
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// UPDATE A WriteUp
export const PUT = async (req, { params }) => {
  const { slug } = params;
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const writeUp = await prisma.writeUp.update({
      where: { slug },
      data: {
        ...body,
        userEmail: session.user.email,
      },
    });

    return new NextResponse(JSON.stringify(writeUp, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
