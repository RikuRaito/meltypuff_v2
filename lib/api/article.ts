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

export const getArticleById = async (id: number) => {
  try {
    const res = await prisma.article.findUnique({
      where: { id: id },
    });
    if (!res) {
      return {
        success: false,
        message: "記事情報の取得中にエラーが発生しました",
      };
    }
    return { success: true, message: "記事情報を取得しました", data: res };
  } catch (err) {
    console.error("記事情報の取得中にエラーが発生しました");
    throw err;
  }
};
