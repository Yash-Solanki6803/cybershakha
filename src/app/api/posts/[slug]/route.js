import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const DELETE = async (req, { params }) => {
  const { slug } = params;

  // Fetch information about the current user from /api/user
  const userResponse = await fetch("/api/user");
  const user = await userResponse.json();

  try {
    // Check if the user is an admin or the author of the post
    const canDelete =
      user.isAdmin ||
      (
        await prisma.post.findUnique({
          where: { slug },
          select: { userId: true },
        })
      )?.userId === user.id;

    if (canDelete) {
      // User has permission to delete the post
      await prisma.post.delete({
        where: { slug },
      });

      return new NextResponse(
        JSON.stringify(
          { message: "Post deleted successfully" },
          { status: 200 }
        )
      );
    } else {
      return new NextResponse(
        JSON.stringify(
          { message: "Unauthorized to delete this post" },
          { status: 403 }
        )
      );
    }
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
