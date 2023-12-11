"use client";
import { useRouter } from "next/navigation.js";
import { API } from "@/lib/api.js";
import { useState } from "react";

export default function NewCommentButton({ setIsCommenting }) {
  function handleCommentButton() {
    setIsCommenting(true);
  }
  return (
    <button className="comment-buttons" onClick={handleCommentButton}>
      🗨️
    </button>
  );
}
