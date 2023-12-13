import { prisma } from "@/lib/api.js";
import { NextResponse } from "next/server.js";

export async function PUT(request, response) {
  try {
    const { postId } = response.params;
    if (!postId) {
      return NextResponse.json({
        success: false,
        error: "Post Id was not included in the request URL.",
      });
    }
    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: { likes: { increment: 1 } },
    });
    if (!updatedPost) {
      return NextResponse.json({
        success: false,
        error: "Failed to update database.",
      });
    }
    return NextResponse.json({ success: true, updatedPost });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
