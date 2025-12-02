import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // /admin/* で認証チェック（/admin/login は除外）
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    // Edge Runtimeではauth()が使えないため、cookieの存在のみをチェック
    // 詳細な認証チェックは各ページのrequireAuth()で行う
    const cookies = request.cookies.getAll();
    const hasSessionCookie = cookies.some(
      (cookie) =>
        cookie.name.includes("next-auth.session-token") ||
        cookie.name.includes("__Secure-next-auth.session-token")
    );

    // セッションcookieがない場合、ログインページにリダイレクト
    if (!hasSessionCookie) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // /shop/* では何もしない（認証不要）
  // 将来的にヘッダーを変更する場合は、ここで処理を追加可能

  return NextResponse.next();
}

export const config = {
  matcher: [
    // /admin/* のすべてのパス（/admin/login は除外される）
    "/admin/:path*",
    // /shop/* のすべてのパス（将来のヘッダー変更用）
    "/shop/:path*",
  ],
};
