import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { prisma } from "../lib/prisma";

async function createAdmin() {
  // 管理者情報を設定
  const email = process.env.ADMIN_EMAIL || "admin@example.com";
  const password = process.env.ADMIN_PASSWORD || "admin123";
  const inAppId = process.env.ADMIN_ID || "admin";

  try {
    // 既存の管理者をチェック
    const existingAdmin = await prisma.admin.findUnique({
      where: { email },
    });

    if (existingAdmin) {
      console.log(`❌ メールアドレス ${email} は既に登録されています`);
      return;
    }

    // パスワードをハッシュ化
    const hashedPassword = await hash(password, 10);

    // 管理者を作成
    const admin = await prisma.admin.create({
      data: {
        email,
        inAppId,
        passwd: hashedPassword,
      },
    });

    console.log("✅ 管理者アカウントが作成されました:");
    console.log(`   ID: ${admin.id}`);
    console.log(`   メールアドレス: ${admin.email}`);
    console.log(`   inAppId: ${admin.inAppId}`);
    console.log(`   パスワード: ${password} (ハッシュ化済み)`);
  } catch (error) {
    console.error("❌ エラーが発生しました:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();
