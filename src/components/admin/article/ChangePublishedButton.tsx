"use client";
import { useState } from "react";

export const ChangePublishedButton = (
  articleId: number,
  isPublished: boolean,
) => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handlePublishedUpdate = async (articleId: number) => {};

  return (
    <div>
      <div>
        <button
          className=""
          onClick={() => setIsModalActive(true)}
        >
          {isPublished ? "公開する" : "非公開にする"}
        </button>
      </div>
      <>
        <div className="inset-0" />
        <button onClick={() => handlePublishedUpdate(articleId)}></button>
      </>
    </div>
  );
};
