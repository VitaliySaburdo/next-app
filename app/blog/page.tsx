"use client";
import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { usePosts } from "@/store";
import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";

export default function Blog() {
  const [posts, loading, getPosts] = usePosts(
    (state) => [state.posts, state.loading, state.getPosts],
    shallow
  );

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <h1 className="title">Blog</h1>
      <PostSearch />
      {loading ? (
        <h3 className="title">Loading...</h3>
      ) : (
        <Posts posts={posts} />
      )}
    </>
  );
}
