import { getPosts } from "@/lib/api";
import Posts from "@/components/Posts";
import React from "react";

const PostsPage = async () => {
  const posts = await getPosts();

  return (
    <div className="p-4 flex flex-col items-center gap-4">
      <p className="my-4 font-semibold text-2xl text-cyan-400">Posts</p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {posts?.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
