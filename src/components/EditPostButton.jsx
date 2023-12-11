"use client";
import { useRouter } from "next/navigation.js";
import { API } from "@/lib/api.js";
import { useState } from "react";

export default function EditPostButton({ setIsEditing }) {
  function handleEditButton() {
    setIsEditing(true);
  }
  return (
    <button className="edit-buttons" onClick={handleEditButton}>
      ✏️
    </button>
  );
}
