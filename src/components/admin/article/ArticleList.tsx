import Image from "next/image";
import { MicroCMSListContent } from "microcms-js-sdk";

type BlogContent = MicroCMSListContent & {
  title: string;
  content: string;
  thumbnail?: { url: string };
};

interface Props {
  article: BlogContent;
}

export const ArticleList = ({ article }: Props) => {
  const plainText = article.content.replace(/<[^>]*>/g, "");

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full flex gap-10 items-start">
      <div className="w-24 h-16 flex-shrink-0">
        {article.thumbnail ? (
          <Image
            src={article.thumbnail.url}
            alt={article.title}
            width={96}
            height={64}
            className="w-full h-full object-cover rounded"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center text-gray-400 text-xs">
            なし
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0 px-3">
        <span className="text-xs text-gray-400">#{article.id}</span>
        <h3 className="text-base font-semibold text-gray-900 truncate">
          {article.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {plainText.slice(0, 50)}...
        </p>
        <div className="flex gap-4 mt-2 text-xs text-gray-400">
          <span>作成: {new Date(article.createdAt).toLocaleDateString("ja-JP")}</span>
          <span>更新: {new Date(article.updatedAt).toLocaleDateString("ja-JP")}</span>
        </div>
      </div>
    </div>
  );
};
