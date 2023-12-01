/*
  Warnings:

  - You are about to drop the column `productStateId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `ProductState` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productStatusId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_productStateId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "productStateId",
ADD COLUMN     "productStatusId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "ProductState";

-- CreateTable
CREATE TABLE "ProductStatus" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductStatus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productStatusId_fkey" FOREIGN KEY ("productStatusId") REFERENCES "ProductStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
