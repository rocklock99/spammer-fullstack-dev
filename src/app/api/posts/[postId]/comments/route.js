import { prisma } from "@/lib/api.js";
import { NextResponse } from "next/server.js";

export async function GET(request, response) {
  try {
    const { postId } = response.params;
    const comments = await prisma.comment.findMany({
      where: { postId },
    });
    return NextResponse.json({ success: true, comments });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(request, response) {
  try {
    const { postId } = response.params;
    if (!postId) {
      return NextResponse.json({
        success: false,
        error: "Post Id was not included in the request URL.",
      });
    }
    // const foundPost = await prisma.post.findFirst({ where: { postId } });
    // if (!foundPost) {
    //   return NextResponse.json({
    //     success: false,
    //     error: "Post id not found in the database.",
    //   });
    // }
    const { text } = await request.json();
    if (!text) {
      return NextResponse.json({
        success: false,
        error: "No text property was provided in the request.",
      });
    }
    const comment = await prisma.comment.create({
      data: { postId, text },
    });
    if (!comment) {
      return NextResponse.json({
        success: false,
        error: "Failed to update database.",
      });
    }
    return NextResponse.json({ success: true, comment });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
