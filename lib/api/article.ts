"use server";
import { prisma } from "../prisma";

export const getAllArticle = async () => {
  try {
    const res = await prisma.article.findMany();
    return { success: true, data: res };
  } catch (err) {
    console.error("記事情報の取得中にエラーが発生しました", err);
    throw err;
  }
};
