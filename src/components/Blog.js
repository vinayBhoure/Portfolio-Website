import React from "react";
import BlogItem from "./BlogItem";
import { blogArr } from "../assets/data";

export default function Blog() {
  const blogs = blogArr;

  return (
    <div className="max-w-screen-lg mx-auto px-3 my-5 py-3 border-t">
  
      <div className="text-[2rem] font-bold">
        Read my blogs:
      </div>

      <div className="h-1 w-[100px] bg-blue-500 my-5"></div>

      <div className="flex justify-between">
        {blogs.map((blog) => {
          return (
            <BlogItem
              title={blog.title}
              description={blog.description}
              imageURL={blog.image}
              date={blog.date}
            />
          );
        })}
      </div>
    </div>
  );
}
