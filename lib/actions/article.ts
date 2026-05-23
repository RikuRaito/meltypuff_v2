"use server";
import { prisma } from "../prisma";

export const updateIsPublished = async (articleId: number) => {
  try {
    const article = await prisma.article.findUnique({
      where: { id: articleId },
      select: { isPublished: true },
    });

    if (!article) {
      return { success: false, data: "記事が見つかりません" };
    }

    const res = await prisma.article.update({
      where: { id: articleId },
      data: { isPublished: !article.isPublished },
    });
    return { success: true, data: "記事の情報を更新しました" };
  } catch (err) {
    console.error("記事の情報の更新中にエラーが発生しました");
    throw err;
  }
};
