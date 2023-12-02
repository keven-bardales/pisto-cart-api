/*
  Warnings:

  - Added the required column `imageUrl` to the `ProductCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductCategory" ADD COLUMN     "imageUrl" TEXT NOT NULL;
