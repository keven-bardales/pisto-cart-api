/*
  Warnings:

  - You are about to drop the `OrderDetail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrderDetail" DROP CONSTRAINT "OrderDetail_colorDiscountId_fkey";

-- DropForeignKey
ALTER TABLE "OrderDetail" DROP CONSTRAINT "OrderDetail_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderDetail" DROP CONSTRAINT "OrderDetail_productId_fkey";

-- DropForeignKey
ALTER TABLE "OrderDetail" DROP CONSTRAINT "OrderDetail_taxRateId_fkey";

-- DropTable
DROP TABLE "OrderDetail";

-- CreateTable
CREATE TABLE "CartOrderDetail" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "total" DECIMAL(10,2) NOT NULL,
    "discount" DECIMAL(10,2) NOT NULL,
    "tax" DECIMAL(10,2) NOT NULL,
    "discountPerecentage" DECIMAL(10,2) NOT NULL,
    "colorDiscountId" TEXT NOT NULL,
    "taxRateId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CartOrderDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "OrderDetailorderId" ON "CartOrderDetail"("orderId");

-- CreateIndex
CREATE INDEX "OrderDetailproductId" ON "CartOrderDetail"("productId");

-- AddForeignKey
ALTER TABLE "CartOrderDetail" ADD CONSTRAINT "CartOrderDetail_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartOrderDetail" ADD CONSTRAINT "CartOrderDetail_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "CartOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartOrderDetail" ADD CONSTRAINT "CartOrderDetail_colorDiscountId_fkey" FOREIGN KEY ("colorDiscountId") REFERENCES "ColorDiscount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartOrderDetail" ADD CONSTRAINT "CartOrderDetail_taxRateId_fkey" FOREIGN KEY ("taxRateId") REFERENCES "TaxRate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
