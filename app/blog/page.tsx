"use client";
import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";

export default function Blog() {
  return (
    <>
      <h1 className="title">Blog</h1>
      <PostSearch />
      <Posts />
    </>
  );
}
