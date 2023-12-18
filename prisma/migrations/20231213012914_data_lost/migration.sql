/*
  Warnings:

  - Added the required column `generalStatusId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "generalStatusId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_generalStatusId_fkey" FOREIGN KEY ("generalStatusId") REFERENCES "GeneralStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
