"use client";
// import { useState } from "react";
// import EditPostForm from "./EditPostForm.jsx";
// import NewCommentButton from "./NewCommentButton.jsx";
// import EditPostButton from "./EditPostButton.jsx";
// import DeletePostButton from "./DeletePostButton.jsx";
// import AddLikeButton from "./AddLikeButton.jsx";
// import NewCommentForm from "./NewCommentForm.jsx";
// import Comments from "./Comments.jsx";

export default function Post({ post }) {
  // const [isEditing, setIsEditing] = useState(false);
  // const [isCommenting, setIsCommenting] = useState(false);
  // const [counter, setCounter] = useState(0);

  return (
    <div className="post-containers">
      {post.text}
      {/* {isEditing ? (
        <EditPostForm post={post} setIsEditing={setIsEditing} />
      ) : (
        <div className="regular-posts">
          {post.text}
          <div className="post-buttons-containers">
            <AddLikeButton post={post} />
            <NewCommentButton setIsCommenting={setIsCommenting} />
            <EditPostButton setIsEditing={setIsEditing} />
            <DeletePostButton post={post} />
          </div>
          {isCommenting && (
            <NewCommentForm
              post={post}
              setIsCommenting={setIsCommenting}
              setCounter={setCounter}
            />
          )}
          <Comments post={post} counter={counter} />
        </div>
      )} */}
    </div>
  );
}
