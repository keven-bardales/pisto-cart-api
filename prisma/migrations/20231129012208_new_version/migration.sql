/*
  Warnings:

  - You are about to drop the column `colorDiscountsId` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `colorDiscountsId` on the `CartOrder` table. All the data in the column will be lost.
  - You are about to drop the `ColorDiscounts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductStates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TaxRates` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `cartStatusId` on table `Cart` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_cartStatusId_fkey";

-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_colorDiscountsId_fkey";

-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_productId_fkey";

-- DropForeignKey
ALTER TABLE "CartDetail" DROP CONSTRAINT "CartDetail_colorDiscountId_fkey";

-- DropForeignKey
ALTER TABLE "CartDetail" DROP CONSTRAINT "CartDetail_taxRateId_fkey";

-- DropForeignKey
ALTER TABLE "CartOrder" DROP CONSTRAINT "CartOrder_colorDiscountsId_fkey";

-- DropForeignKey
ALTER TABLE "OrderDetail" DROP CONSTRAINT "OrderDetail_colorDiscountId_fkey";

-- DropForeignKey
ALTER TABLE "OrderDetail" DROP CONSTRAINT "OrderDetail_taxRateId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_productStateId_fkey";

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "colorDiscountsId",
DROP COLUMN "productId",
DROP COLUMN "quantity",
ALTER COLUMN "cartStatusId" SET NOT NULL;

-- AlterTable
ALTER TABLE "CartOrder" DROP COLUMN "colorDiscountsId";

-- DropTable
DROP TABLE "ColorDiscounts";

-- DropTable
DROP TABLE "ProductStates";

-- DropTable
DROP TABLE "TaxRates";

-- CreateTable
CREATE TABLE "ProductState" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductState_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ColorDiscount" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "discountPerecentage" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ColorDiscount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaxRate" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rate" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TaxRate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productStateId_fkey" FOREIGN KEY ("productStateId") REFERENCES "ProductState"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_cartStatusId_fkey" FOREIGN KEY ("cartStatusId") REFERENCES "CartStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartDetail" ADD CONSTRAINT "CartDetail_colorDiscountId_fkey" FOREIGN KEY ("colorDiscountId") REFERENCES "ColorDiscount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartDetail" ADD CONSTRAINT "CartDetail_taxRateId_fkey" FOREIGN KEY ("taxRateId") REFERENCES "TaxRate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderDetail" ADD CONSTRAINT "OrderDetail_colorDiscountId_fkey" FOREIGN KEY ("colorDiscountId") REFERENCES "ColorDiscount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderDetail" ADD CONSTRAINT "OrderDetail_taxRateId_fkey" FOREIGN KEY ("taxRateId") REFERENCES "TaxRate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
