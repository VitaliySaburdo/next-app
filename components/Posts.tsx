'use client'
import { usePosts } from "@/store";
import Link from "next/link";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

export const Posts = () => {
  const [posts, loading, getPosts] = usePosts(
    (state) => [state.posts, state.loading, state.getPosts],
    shallow
  );

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
        <h3 className="title">Loading...</h3>
      ) : (
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )
};
