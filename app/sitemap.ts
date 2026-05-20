import { MetadataRoute } from "next";
import { getNonProductsInStock } from "@/lib/api/products";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getNonProductsInStock();

  const productUrls: MetadataRoute.Sitemap = products.map((p) => ({
    url: `https://meltypuff.com/shop/shop-non/${p.id}`,
    lastModified: new Date(),
  }));

  return [
    { url: "https://meltypuff.com/shop/home", lastModified: new Date() },
    { url: "https://meltypuff.com/shop/shop-non", lastModified: new Date() },
    { url: "https://meltypuff.com/shop/contact", lastModified: new Date() },
    ...productUrls,
  ];
}
