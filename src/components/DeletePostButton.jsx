"use client";
import { useRouter } from "next/navigation.js";

export default function DeletePostButton({ post }) {
  const router = useRouter();
  async function handleDeleteButton() {
    const response = await fetch(`/api/posts/${post.id}`, {
      method: "DELETE",
    });
    const info = await response.json();
    router.refresh();
  }
  return (
    <button className="delete-buttons" onClick={handleDeleteButton}>
      🗑️
    </button>
  );
}
