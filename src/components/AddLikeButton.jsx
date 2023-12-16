"use client";
import { useRouter } from "next/navigation.js";

export default function AddLikeButton({ post }) {
  const router = useRouter();
  async function handleAddLikeButton() {
    const response = await fetch(`/api/posts/${post.id}/likes`, {
      method: "PUT",
    });
    const info = await response.json();
    if (response.ok) {
      console.log("Adding like succeeded.");
      router.refresh();
    } else {
      console.log("Adding like failed.");
    }
  }
  return (
    <button className="add-like-buttons" onClick={handleAddLikeButton}>
      👍{post.likes}
    </button>
  );
}
