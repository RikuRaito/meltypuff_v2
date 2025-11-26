/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address_1` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address_2` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `post_code` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "address_1" TEXT NOT NULL,
ADD COLUMN     "address_2" TEXT NOT NULL,
ADD COLUMN     "phone_number" TEXT NOT NULL,
ADD COLUMN     "post_code" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Product_Non" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "image_path" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Product_Non_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product_Nic" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "image_path" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Product_Nic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coupon" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "final_price_rate" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "in_app_id" TEXT NOT NULL,
    "passwd" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Coupon_code_key" ON "Coupon"("code");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
