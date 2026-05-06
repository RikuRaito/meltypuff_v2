"use server";

import { getAllPv } from "../api/pv";

export async function getDailyPvData() {
  try {
    const res = await getAllPv();
    const jstRes = res.map((item) => {
      const jstDate = new Date(item.createdAt.getTime() + 9 * 60 * 60 * 1000);
      const dateStr = jstDate.toISOString().split("T")[0];
      return { ...item, createdAt: dateStr };
    });

    //日付ごとにカウントを集計
    const pvMap = new Map<string, number>();
    for (const item of jstRes) {
      pvMap.set(item.createdAt, (pvMap.get(item.createdAt) ?? 0) + 1);
    }

    //配列に変換
    const pvData = Array.from(pvMap.entries()).map(([date, pv]) => ({
      date,
      pv,
    }));
    return { success: true, data: pvData };
  } catch (err) {
    console.error("PV数データの取得時にエラーが発生しました", err);
    throw err;
  }
}
