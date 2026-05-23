export const dynamic = "force-dynamic";
import { getBlogs } from "@/lib/microcms";
import ArticleConteiner from "@/src/components/shop/article/ArticleContainer";

export default async function Article() {
  const blogs = await getBlogs();
  return <ArticleConteiner blogs={blogs} />;
}
