import { prisma } from "@/lib/api.js";
import Post from "./Post.jsx";

export default async function Posts() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div id="posts-container">
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}
