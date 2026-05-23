export const dynamic = "force-dynamic";
import { getBlogById } from "@/lib/microcms";
import ArticleDetailContainer from "@/src/components/shop/article/ArticleDetailContainer";

export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const blog = await getBlogById((await params).id);

  return (
    <main className="pt-30 w-[72%] sm:w-[92%] max-w-6xl mx-auto ">
      <ArticleDetailContainer blog={blog} />
    </main>
  );
}
