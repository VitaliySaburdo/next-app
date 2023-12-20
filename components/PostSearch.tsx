"use client";

import { FormEventHandler, useState } from "react";

type Props = {
    onSearch: (value: any) => void
}

export const PostSearch = ({onSearch}:Props) => {
  const [search, setSearch] = useState("");

const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
e.preventDefault();

}

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
