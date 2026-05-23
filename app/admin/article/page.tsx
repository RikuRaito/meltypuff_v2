import { ArticleContainer } from "@/src/components/admin/article/ArticleContainer";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export default async function Article() {
  const articleData = await client.getList({ endpoint: "blogs" });
  return <ArticleContainer articles={articleData.contents} />;
}
