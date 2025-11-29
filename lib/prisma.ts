import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// PostgreSQL接続プールを作成
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Prisma Adapterを作成
const adapter = new PrismaPg(pool);

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({
    adapter,
    log: ["error"],
  });
} else {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({
      adapter,
      log: ["query", "error", "warn"],
    });
  }
  prisma = globalForPrisma.prisma;
}

export { prisma };
