import Link from "next/link";
import { Blog } from "@/lib/microcms";

interface Props {
  blog: Blog;
}

export default function ArticleList({ blog }: Props) {
  const plainText = blog.content.replace(/<[^>]*>/g, "");

  return (
    <Link href={`/shop/article/${blog.id}`}>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer p-5 flex gap-5 items-start">
        <div className="w-32 h-20 flex-shrink-0">
          {blog.thumbnail ? (
            <img
              src={blog.thumbnail.url}
              alt={blog.title}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">
              No image
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-base font-semibold text-gray-900 truncate mb-1">
            {blog.title}
          </h2>
          <p className="text-sm text-gray-500 line-clamp-2">
            {plainText.slice(0, 80)}...
          </p>
          <span className="text-xs text-gray-400 mt-2 block">
            {new Date(blog.publishedAt ?? blog.createdAt).toLocaleDateString("ja-JP")}
          </span>
        </div>
      </div>
    </Link>
  );
}
