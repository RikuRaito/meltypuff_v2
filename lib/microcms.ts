import { createClient, MicroCMSListContent } from "microcms-js-sdk";

export type Blog = MicroCMSListContent & {
  title: string;
  content: string;
  thumbnail?: { url: string };
};

const getClient = () =>
  createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
    apiKey: process.env.MICROCMS_API_KEY!,
  });

export const getBlogs = async () => {
  const res = await getClient().getList<Blog>({ endpoint: "blogs" });
  return res.contents;
};

export const getBlogById = async (id: string) => {
  const res = await getClient().getListDetail<Blog>({
    endpoint: "blogs",
    contentId: id,
  });
  return res;
};
