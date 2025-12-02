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
          // データベースから管理者を検索（メールアドレスで検索）
          const admin = await prisma.admin.findUnique({
            where: {
              email: credentials.email as string,
            },
          });

          if (!admin) {
            return null;
          }

          // パスワードの検証（bcryptjsを使用）
          const isPasswordValid = await compare(
            credentials.password as string,
            admin.passwd
          );

          if (!isPasswordValid) {
            return null;
          }

          // 認証成功
          return {
            id: admin.id.toString(),
            email: admin.email,
            name: admin.inAppId,
            role: "admin",
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
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
});
