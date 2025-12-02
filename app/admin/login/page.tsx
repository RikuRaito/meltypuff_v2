import { auth } from "@/auth";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

export default async function AuthLogin() {
  // cookieからセッションを自動取得して検証
  const session = await auth();

  // 既にログインしている場合、ダッシュボードにリダイレクト
  if (session) {
    const userRole = (session.user as { role?: string })?.role;
    if (userRole === "admin") {
      redirect("/admin/dashboard");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            管理者ログイン
          </h2>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
