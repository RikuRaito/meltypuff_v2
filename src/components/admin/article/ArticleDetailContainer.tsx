"use client";
import { Article } from "@prisma/client";
import { useState } from "react";
import { ContentInput } from "./ContentInput";
import { InputPreview } from "./InputPreview";

interface Props {
  article: Article;
}

export const ArticleDetailContainer = ({ article }: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div className="h-screen flex h-full w-full gap-3">
      <div className="w-1/2 flex flex-col h-full min-h-0">
        <h3 className="text-black text-xl font-bold py-3">入力画面</h3>
        <ContentInput
          content={content}
          onChange={setContent}
        />
      </div>
      <div className="w-1/2 flex flex-col h-full min-h-0">
        <h3 className="text-black text-xl font-bold py-3">プレビュー</h3>
        <InputPreview content={content} />
      </div>
    </div>
  );
};
