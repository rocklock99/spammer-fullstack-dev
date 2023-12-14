"use client";

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
