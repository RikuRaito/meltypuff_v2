import { getArticleById } from "@/lib/api/article";

export default function ArticleDetail({ params }: { params: { id: string } }) {
  const articleData = getArticleById(Number(params.id));
  return <div></div>;
}
