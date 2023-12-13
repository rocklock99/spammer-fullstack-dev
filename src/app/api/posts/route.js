import { prisma } from "@/lib/api.js";
import { NextResponse } from "next/server.js";

export async function GET() {
  const posts = await prisma.post.findMany();
  try {
    return NextResponse.json({ success: true, posts });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(request, response) {
  try {
    const { text } = await request.json();
    if (!text) {
      return NextResponse.json({
        success: false,
        error: "No text property was provided in the request.",
      });
    }
    const newPost = await prisma.post.create({ data: { text } });
    if (!newPost) {
      return NextResponse.json({
        success: false,
        error: "Failed to add to database.",
      });
    }
    return NextResponse.json({ success: true, newPost });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
