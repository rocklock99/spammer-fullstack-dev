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
    const { text } = await request.json();
    if (!text) {
      return NextResponse.json({
        success: false,
        error: "No text property was provided in the request.",
      });
    }
    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: { text },
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

export async function DELETE(request, response) {
  try {
    const { postId } = response.params;
    if (!postId) {
      return NextResponse.json({
        success: false,
        error: "Post Id was not included in the request URL.",
      });
    }
    const deletedPost = await prisma.post.delete({
      where: { id: postId },
    });
    if (!deletedPost) {
      return NextResponse.json({
        success: false,
        error: "Failed to delete from database.",
      });
    }
    return NextResponse.json({ success: true, deletedPost });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
