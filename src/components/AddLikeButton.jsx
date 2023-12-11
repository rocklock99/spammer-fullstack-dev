"use client";
import { useRouter } from "next/navigation.js";
import { API } from "@/lib/api.js";
import { useState } from "react";

export default function AddLikeButton({ post }) {
  const router = useRouter();
  async function handleAddLikeButton() {
    const response = await fetch(`${API}/api/posts/${post.id}/likes`, {
      method: "POST",
    });
    const info = await response.json();
    if (response.ok) {
      router.refresh();
    } else {
      console.log("Adding likes failed.");
    }
  }
  return (
    <button className="add-like-buttons" onClick={handleAddLikeButton}>
      👍{post.likes}
    </button>
  );
}
