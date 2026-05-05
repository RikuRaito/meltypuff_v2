import { headers } from "next/headers";
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
        cookie.name.includes("__Secure-next-auth.session-token"),
    );

    // セッションcookieがない場合、ログインページにリダイレクト
    if (!hasSessionCookie) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  if (pathname.startsWith("/shop") && process.env.NODE_ENV === "production") {
    let sessionId = request.cookies.get("session_id")?.value;
    const response = NextResponse.next();

    if (!sessionId) {
      sessionId = crypto.randomUUID();
      response.cookies.set("session_id", sessionId, {
        maxAge: 60 * 30, //30分
      });
    }
    fetch(new URL("/api/pv", request.url), {
      method: "POST",
      body: JSON.stringify({ path: pathname, sessionId: sessionId }),
      headers: { "Content-Type": "application/json" },
    });
    return response;
  }
}

export const config = {
  matcher: [
    // /admin/* のすべてのパス（/admin/login は除外される）
    "/admin/:path*",
    // /shop/* のすべてのパス（将来のヘッダー変更用）
    "/shop/:path*",
  ],
};
