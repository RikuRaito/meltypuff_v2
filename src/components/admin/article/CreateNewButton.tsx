"use client";
import { createNewArticle } from "@/lib/actions/article";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const CreateNewButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleCreate = async () => {
    setIsLoading(true);
    const res = await createNewArticle();
    if (!res.success) {
      setIsLoading(false);
      setErrorMessage(res.message ?? "記事の新規作成に失敗しました");
    }
    const id = res.data;
    router.push(`/admin/article/${id}`);
  };

  return (
    <button
      onClick={handleCreate}
      disabled={isLoading}
      className="px-4 py-1.5 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      {isLoading ? "作成中..." : "新規作成する"}
    </button>
  );
};
