import { prisma } from "@/lib/api.js";
import Post from "./Post.jsx";

// export default async function Posts() {
//   const posts = await prisma.post.findMany({
//     orderBy: {
//       createdAt: "desc",
//     },
//   });

//   return (
//     <div id="posts-container">
//       {posts.map((post) => {
//         return <Post key={post.id} post={post} />;
//       })}
//     </div>
//   );
// }

// export default async function Posts() {
//   let posts = [];
//   const response = await fetch(`http://localhost:3000/api/posts`);
//   const postsResponse = await response.json();
//   if (postsResponse.success) {
//     console.log("Initial posts retrieval succeeded.");
//     posts = postsResponse.posts;
//     console.log(posts);
//   } else {
//     console.log("Initial posts retrieval failed.");
//   }

// export async function getServerSideProps() {
//   try {
//     const posts = await prisma.post.findMany({
//       orderBy: { createdAt: "desc" },
//     });

//     console.log("Fetched posts:", posts); // Log fetched posts

//     return {
//       props: { posts },
//     };
//   } catch (error) {
//     console.error("Error in getServerSideProps:", error);
//     return {
//       props: { posts: [] }, // Return an empty array if there's an error
//     };
//   }
// }
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
