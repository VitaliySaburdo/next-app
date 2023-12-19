"use client";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: id,
  };
}

export default function Post({ params: { id } }: Props) {
  return <h2>Post page {id}</h2>;
}
