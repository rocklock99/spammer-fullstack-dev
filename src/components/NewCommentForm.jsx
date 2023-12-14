"use client";
import { useRouter } from "next/navigation.js";
import { useState } from "react";

export default function NewCommentForm({ post, setIsCommenting, setCounter }) {
  const [comment, setComment] = useState("");

  const router = useRouter();

  function handleCancelButton() {
    setIsCommenting(false);
  }

  function handleInputChanges(event) {
    setComment(event.target.value);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    const response = await fetch(`/api/posts/${post.id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: comment,
      }),
      cache: "no-store",
    });
    const info = await response.json();
    if (info.success) {
      console.log("New comment successful");
      setIsCommenting(false);
      setComment("");
      setCounter((prevCounter) => prevCounter + 1);
      router.refresh();
    } else {
      console.log("New comment failed");
    }
  }
  return (
    <form id="new-comment-form" onSubmit={handleFormSubmit}>
      <textarea
        className="comment-text-areas"
        type="text"
        value={comment}
        placeholder="Write your comment here.."
        onChange={handleInputChanges}
      ></textarea>
      <div className="comment-buttons-containers">
        <button
          type="submit"
          id="submit-comment-button"
          className="comment-form-buttons"
        >
          Submit
        </button>
        <button
          id="cancel-comment-button"
          className="comment-form-buttons"
          type="button"
          onClick={handleCancelButton}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
