import { auth } from "@/auth";
import { redirect } from "next/navigation";

/**
 * 管理者認証が必要なページで使用
 * 未認証の場合はログインページにリダイレクト
 */
export async function requireAuth() {
  const session = await auth();

  // 型定義ファイルがない場合、型アサーションが必要
  const userRole = (session?.user as { role?: string })?.role;
  if (!session || userRole !== "admin") {
    redirect("/auth");
  }

  return session;
}

/**
 * 現在のセッションを取得（認証不要）
 */
export async function getSession() {
  return await auth();
}
