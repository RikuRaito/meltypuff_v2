/*
  Warnings:

  - Added the required column `stock` to the `Product_Nic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `Product_Non` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product_Nic" ADD COLUMN     "stock" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product_Non" ADD COLUMN     "stock" INTEGER NOT NULL;
