import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full mt-8 sm:mt-16 md:mt-16 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex bg-cyan-500 px-8 rounded-xl font-mono justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">"Publicaciones Recientes"</h2>
        <Link href="/categories/all" className="inline-block py-2 font-medium text-accent hover:scale-105 hover:font-bold dark:text-accentDark underline underline-offset-2 text-base md:text-lg">Ver Todos</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-12">
        {
          sortedBlogs.slice(4, 10).map((blog, index) => {
            return (
              <article key={index} className="col-span-1 row-span-1 relative">
                <BlogLayoutThree blog={blog} />
              </article>
            );
          })
        }
      </div>
    </section>
  );
};

export default RecentPosts;
