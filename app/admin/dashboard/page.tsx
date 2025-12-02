import { requireAuth } from "@/lib/auth";
import LogoutButton from "./LogoutButton";

export default async function AdminPage() {
  const session = await requireAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">
            管理者ダッシュボード
          </h1>
          <LogoutButton />
        </div>
        <div className="mt-8">
          <p className="text-gray-600">ようこそ、{session.user?.email}さん</p>
          <div className="mt-4 rounded-lg bg-white p-6 shadow">
            <h2 className="text-xl font-semibold text-gray-900">管理者機能</h2>
            <p className="mt-2 text-gray-600">
              ここに管理者向けの機能を追加できます
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
