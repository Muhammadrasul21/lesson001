import React from "react";

const Posts = ({ post }) => {
  return (
    <div className="p-4 flex flex-col items-center gap-4 border bg-[#000] rounded-lg border-gray-600">
      <h3 className="text-xl font-semibold text-white line-clamp-1 cursor-pointer text-center">
        {post.title}
      </h3>
      <p className="cursor-pointer text-[14px] text-gray-300">{post.body}</p>
    </div>
  );
};

export default Posts;
