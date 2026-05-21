import { Article } from "@prisma/client";
import Image from "next/image";

interface Props {
  article: Article;
}

export const ArticleList = ({ article }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full flex gap-10 items-start">
      <div className="w-24 h-16 flex-shrink-0">
        {article.thumbnail ? (
          <Image
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-full object-cover rounded"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center text-gray-400 text-xs">
            なし
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0 px-3">
        <div className="flex items-center gap-2 mb-1">
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-medium ${
              article.isPublished
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {article.isPublished ? "公開" : "非公開"}
          </span>
          <span className="text-xs text-gray-400">#{article.id}</span>
        </div>
        <h3 className="text-base font-semibold text-gray-900 truncate">
          {article.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {article.content.slice(0, 50)}...
        </p>
        <div className="flex gap-4 mt-2 text-xs text-gray-400">
          <span>{article.writtenBy}</span>
          <span>
            作成: {new Date(article.createdAt).toLocaleDateString("ja-JP")}
          </span>
          <span>
            更新: {new Date(article.updatedAt).toLocaleDateString("ja-JP")}
          </span>
        </div>
      </div>
    </div>
  );
};
