import { Blog } from "@/lib/microcms";

interface Props {
  blog: Blog;
}

export default function ArticleDetailContainer({ blog }: Props) {
  return (
    <div>
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
}
