import { auth } from "@/auth";
import { redirect } from "next/navigation";

/**
 * 管理者認証が必要なページで使用（/admin/* 専用）
 * 未認証の場合は /admin/login にリダイレクト
 *
 * 注意: /shop/* では使用しない（認証不要）
 */
export async function requireAuth() {
  const session = await auth();

  // 型定義ファイルがない場合、型アサーションが必要
  const userRole = (session?.user as { role?: string })?.role;
  if (!session || userRole !== "admin") {
    redirect("/admin/login");
  }

  return session;
}

/**
 * ユーザー認証が必要なページで使用（将来実装予定）
 * /shop/* で使用する場合は、この関数を使用
 */
// export async function requireUserAuth() {
//   const session = await auth();
//   const userRole = (session?.user as { role?: string })?.role;
//   if (!session || userRole !== "user") {
//     redirect("/shop/login");
//   }
//   return session;
// }

/**
 * 現在のセッションを取得（認証不要）
 */
export async function getSession() {
  return await auth();
}
