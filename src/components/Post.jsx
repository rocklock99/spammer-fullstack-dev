import DeletePost from "./DeletePost.jsx";

export default function Post({ post }) {
  return (
    <div className="post-containers">
      {post.text}
      <div className="post-buttons-containers">
        <DeletePost post={post} />
      </div>
    </div>
  );
}
