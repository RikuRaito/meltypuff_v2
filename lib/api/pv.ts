"use server";
import { prisma } from "../prisma";

export async function getAllPv() {
  try {
    const res = await prisma.pageView.findMany();
    return res;
  } catch (err) {
    console.error("PV数データの取得時にエラーが発生しました", err);
    throw err;
  }
}
