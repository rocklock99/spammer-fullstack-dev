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
