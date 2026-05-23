import { createClient, MicroCMSListContent } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export type Blog = MicroCMSListContent & {
  title: string;
  content: string;
  thumbnail?: { url: string };
};

export const getBlogs = async () => {
  const res = await client.getList<Blog>({ endpoint: "blogs" });
  return res.contents;
};

export const getBlogById = async (id: string) => {
  const res = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId: id,
  });
  return res;
};
