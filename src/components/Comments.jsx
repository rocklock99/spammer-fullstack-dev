"use client";
import { useRouter } from "next/navigation.js";
import { useEffect, useState } from "react";

export default function Comments({ post, counter }) {
  const [comments, setComments] = useState([]);
  const router = useRouter();

  async function fetchComments() {
    const response = await fetch(`/api/posts/${post.id}/comments`, {
      cache: "no-store",
    });
    const info = await response.json();
    if (info.success) {
      console.log("Fetching comments successful.");
      setComments(info.comments);
      router.refresh();
    } else {
      console.log("Fetching comments failed.");
    }
  }

  useEffect(() => {
    fetchComments();
  }, [counter]);

  return (
    <div className="comments-containers">
      {[...comments].reverse().map((comment) => {
        return (
          <div key={comment.id} className="comments">
            &mdash;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="comment">{comment.text}</span>
          </div>
        );
      })}
    </div>
  );
}
