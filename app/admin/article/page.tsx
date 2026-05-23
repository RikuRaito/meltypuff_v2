import { auth } from "@/auth";
import { getAllArticle } from "@/lib/api/article";
import { ArticleContainer } from "@/src/components/admin/article/ArticleContainer";

export default async function Article() {
  const articleData = await getAllArticle();
  const session = auth();

  return <ArticleContainer articles={articleData.data} />;
}
