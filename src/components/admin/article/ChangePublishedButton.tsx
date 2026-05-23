"use client";
import { updateIsPublished } from "@/lib/actions/article";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  articleId: number;
  isPublished: boolean;
}

export const ChangePublishedButton = ({ articleId, isPublished }: Props) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handlePublishedUpdate = async (articleId: number) => {
    const res = await updateIsPublished(articleId);
    if (!res.success) {
      setIsError(true);
      setErrorMessage(res.data);
    }
    setIsModalActive(false);
    router.refresh();
  };

  return (
    <div>
      <button
        className="px-3 py-1.5 text-sm font-medium rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
        onClick={() => setIsModalActive(true)}
      >
        {isPublished ? "非公開にする" : "公開する"}
      </button>

      {isModalActive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative bg-white rounded-lg shadow-lg p-6 w-80">
            <h2 className="text-base font-semibold text-gray-900 mb-2">
              {isPublished ? "非公開にしますか？" : "公開しますか？"}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              この操作は後から変更できます。
            </p>
            <div className="flex gap-2 justify-end">
              <button
                className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setIsModalActive(false)}
              >
                キャンセル
              </button>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                onClick={() => handlePublishedUpdate(articleId)}
              >
                確定
              </button>
            </div>

            {isError && (
              <div
                className="absolute inset-0 bg-white rounded-lg p-6 flex flex-col justify-between cursor-pointer"
                onClick={() => setIsError(false)}
              >
                <div onClick={(e) => e.stopPropagation()}>
                  <h2 className="text-base font-semibold text-red-600 mb-2">
                    エラーが発生しました
                  </h2>
                  <p className="text-sm text-gray-500">{errorMessage}</p>
                </div>
                <div className="flex justify-end" onClick={(e) => e.stopPropagation()}>
                  <button
                    className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                    onClick={() => setIsError(false)}
                  >
                    閉じる
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
