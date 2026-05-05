import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { path } = await request.json();

  await prisma.pageView.create({
    data: { path },
  });

  return NextResponse.json({ success: true });
}
