import React from "react";
import fs from "fs";
import Link from "next/link";

const getBlogMetadata = () => {
  const folder = "blogs/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((files) => files.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
};

const Blog = () => {
  const blogMetadata = getBlogMetadata();
  const blogPreviews = blogMetadata.map((slug) => (
    <div key={slug}>
      <Link href={`/blog/${slug}`}>
        <h1>{slug}</h1>
      </Link>
    </div>
  ));

  return (
    <div className="bg-bgcolor h-screen flex flex-col">
      <div className="flex justify-center items-center mt-8">
        <div className="flex items-center justify-evenly border rounded-sm w-32 h-8">
          <div className="bg-primary">
            <h2 className="">Blogs</h2>
          </div>
          <div className="border-l border-white h-8">

          </div>
          <div className="">
            <h2 className="">Notes</h2>
          </div>
        </div>
      </div>
      {blogPreviews}
    </div>
  );
};

export default Blog;
