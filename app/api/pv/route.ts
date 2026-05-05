import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { path, sessionId } = await request.json();

  await prisma.pageView.create({
    data: { path, sessionId },
  });

  return NextResponse.json({ success: true });
}
