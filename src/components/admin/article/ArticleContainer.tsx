import { Article } from "@prisma/client";
import { ArticleList } from "./ArticleList";

interface Props {
  articles: Article[];
}

export const ArticleContainer = ({ articles }: Props) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-15 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">記事管理</h1>
      </div>
      <div className="mx-auto max-w-7xl flex flex-col gap-3">
        {articles.map((item) => (
          <ArticleList
            key={item.id}
            article={item}
          />
        ))}
      </div>
    </div>
  );
};
