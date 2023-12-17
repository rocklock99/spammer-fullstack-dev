//import NewPostForm from "@/components/NewPostForm.jsx";
import Posts from "@/components/Posts.jsx";
import { prisma } from "@/lib/api.js";

export default function Home() {
  return (
    <main>
      <h1>Spammer</h1>
      {/* <NewPostForm /> */}
      <Posts />
    </main>
  );
}
