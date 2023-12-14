"use client";

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
