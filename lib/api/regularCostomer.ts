"use server";
import { prisma } from "../prisma";

export const getRegularCostomer = async () => {
  try {
    const costomerList = await prisma.regularCustomer.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return costomerList;
  } catch (err) {
    console.log("エラーが発生しました", err);
    throw err;
  }
};
