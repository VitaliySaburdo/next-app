"use client";
import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { getPosts } from "@/services/getPosts";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPosts()
      .then(setPosts)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h1 className="title">Blog</h1>
      <PostSearch onSearch={setPosts}/>
      {isLoading ? (
        <h3 className="title">Loading...</h3>
      ) : (
        <Posts posts={posts} />
      )}
    </>
  );
}
