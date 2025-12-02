import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          // まず管理者を検索
          const admin = await prisma.admin.findUnique({
            where: {
              email: credentials.email as string,
            },
          });

          if (admin) {
            // 管理者のパスワードを検証
            const isPasswordValid = await compare(
              credentials.password as string,
              admin.passwd
            );

            if (!isPasswordValid) {
              return null;
            }

            // 管理者として認証成功
            return {
              id: admin.id.toString(),
              email: admin.email,
              name: admin.inAppId,
              type: "admin",
            };
          }

          // 管理者が見つからない場合、通常ユーザーを検索
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email as string,
            },
          });

          if (!user) {
            return null;
          }

          // ユーザーのパスワードを検証
          const isPasswordValid = await compare(
            credentials.password as string,
            user.passwd
          );

          if (!isPasswordValid) {
            return null;
          }

          // ユーザーとして認証成功
          return {
            id: user.id.toString(),
            email: user.email,
            name: user.email, // ユーザー名としてemailを使用（必要に応じて変更可能）
            type: "user",
          };
        } catch (error) {
          console.error("認証エラー:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        // typeプロパティを追加（"admin" または "user"）
        const userWithType = user as { type?: string };
        if (userWithType.type) {
          token.type = userWithType.type;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        // typeプロパティを追加（"admin" または "user"）
        (session.user as { type?: string }).type = token.type as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
});
