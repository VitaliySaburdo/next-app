"use client";

import { usePosts } from "@/store";
import { FormEventHandler, useState } from "react";

export const PostSearch = () => {
  const getPostsBySearch = usePosts((state) => state.getPostsBySearch);
  const [search, setSearch] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await getPostsBySearch(search);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
