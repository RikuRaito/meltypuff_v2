"use client";
import { Blog } from "@/lib/microcms";
import { useRouter } from "next/navigation";
import ArticleList from "./ArticleList";

interface Props {
  blogs: Blog[];
}

export default function ArticleConteiner({ blogs }: Props) {
  const router = useRouter();
  return (
    <main className="pt-30 w-[72%] sm:w-[92%] max-w-6xl mx-auto ">
      <h1 className="text-black font-bold text-2xl mb-2">記事一覧</h1>
      {blogs.map((item) => (
        <ArticleList
          key={item.id}
          blog={item}
        />
      ))}
    </main>
  );
}
