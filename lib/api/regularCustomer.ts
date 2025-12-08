"use server";
import { prisma } from "../prisma";

export const getRegularCustomer = async () => {
  try {
    const customerList = await prisma.regularCustomer.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return customerList;
  } catch (err) {
    console.log("エラーが発生しました", err);
    throw err;
  }
};
