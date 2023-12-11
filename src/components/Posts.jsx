import { API } from "@/lib/api.js";
import Post from "./Post.jsx";

export default async function Posts() {
  const res = await fetch(`${API}/api/posts`, { cache: "no-store" });
  const info = await res.json();
  return (
    <div id="posts-container">
      {info.posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}
