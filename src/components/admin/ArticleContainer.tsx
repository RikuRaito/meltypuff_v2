import { Article } from "@prisma/client";
import { ArticleList } from "./ArticleList";

interface Props {
  articles: Article[];
}

export const ArticleContainer = ({ articles }: Props) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-15 md:p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">記事管理</h1>

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
