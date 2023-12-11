"use client";
import { useRouter } from "next/navigation.js";
import { API } from "@/lib/api.js";
import { useState } from "react";

export default function EditPostForm({ post, setIsEditing }) {
  const [postText, setPostText] = useState(post.text);

  const router = useRouter();

  function handleCancelButton() {
    setIsEditing(false);
  }

  function handleInputChanges(event) {
    setPostText(event.target.value);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    const response = await fetch(`${API}/api/posts/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: postText,
      }),
    });
    console.log(response.ok);
    const info = await response.json();
    console.log(info);
    if (info.success) {
      console.log("Edit successful");
      setIsEditing(false);
      router.refresh();
    } else {
      console.log("Edit failed");
    }
  }
  return (
    <form className="edit-post-forms" onSubmit={handleFormSubmit}>
      <textarea
        className="edit-text-areas"
        type="text"
        value={postText}
        placeholder="Place message here.."
        onChange={handleInputChanges}
      ></textarea>
      <div className="edit-buttons-containers">
        <button
          type="submit"
          id="submit-edited-post-button"
          className="edit-form-buttons"
        >
          Submit
        </button>
        <button
          id="cancel-edit-button"
          className="edit-form-buttons"
          type="button"
          onClick={handleCancelButton}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
