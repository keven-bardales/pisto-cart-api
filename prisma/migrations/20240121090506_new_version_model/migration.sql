/*
  Warnings:

  - You are about to alter the column `total` on the `Cart` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,4)`.
  - You are about to alter the column `subTotal` on the `Cart` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,4)`.
  - You are about to alter the column `subTotalDiscount` on the `Cart` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,4)`.
  - You are about to alter the column `subTotalTax` on the `Cart` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,4)`.
  - You are about to alter the column `discount` on the `Cart` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,4)`.
  - You are about to alter the column `tax` on the `Cart` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,4)`.
  - The primary key for the `CartDetail` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `CartDetail` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `total` on the `CartOrder` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,4)`.
  - You are about to alter the column `subTotal` on the `CartOrder` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,4)`.
  - You are about to alter the column `subTotalDiscount` on the `CartOrder` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,4)`.
  - You are about to alter the column `subTotalTax` on the `CartOrder` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,4)`.
  - You are about to alter the column `discount` on the `CartOrder` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,4)`.
  - You are about to alter the column `tax` on the `CartOrder` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,4)`.
  - The primary key for the `CartOrderDetail` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `price` on the `CartOrderDetail` table. All the data in the column will be lost.
  - The `id` column on the `CartOrderDetail` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `total` on the `CartOrderDetail` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,4)`.
  - You are about to alter the column `discount` on the `CartOrderDetail` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,4)`.
  - You are about to alter the column `tax` on the `CartOrderDetail` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,4)`.
  - You are about to alter the column `discountPerecentage` on the `CartOrderDetail` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,4)`.
  - The primary key for the `ColorDiscount` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `discountPerecentage` on the `ColorDiscount` table. All the data in the column will be lost.
  - The `id` column on the `ColorDiscount` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `PaymentMethods` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `PaymentMethods` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,4)`.
  - You are about to alter the column `cost` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,4)`.
  - The primary key for the `ProductCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ProductCategory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `parentCategoryId` column on the `ProductCategory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `rate` on the `TaxRate` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(10,4)`.
  - You are about to drop the column `googleId` on the `User` table. All the data in the column will be lost.
  - The primary key for the `UserRol` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `UserRol` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `quantity` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discount` to the `CartDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salePrice` to the `CartDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subTotal` to the `CartDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subTotalDiscount` to the `CartDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subTotalTax` to the `CartDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tax` to the `CartDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `CartDetail` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `productId` on the `CartDetail` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `colorDiscountId` on the `CartDetail` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `paymentMethodId` on the `CartOrder` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `salePrice` to the `CartOrderDetail` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `productId` on the `CartOrderDetail` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `colorDiscountId` on the `CartOrderDetail` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `discountPercentage` to the `ColorDiscount` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `productCategoryId` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `rolId` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "CartDetail" DROP CONSTRAINT "CartDetail_colorDiscountId_fkey";

-- DropForeignKey
ALTER TABLE "CartDetail" DROP CONSTRAINT "CartDetail_productId_fkey";

-- DropForeignKey
ALTER TABLE "CartOrder" DROP CONSTRAINT "CartOrder_paymentMethodId_fkey";

-- DropForeignKey
ALTER TABLE "CartOrderDetail" DROP CONSTRAINT "CartOrderDetail_colorDiscountId_fkey";

-- DropForeignKey
ALTER TABLE "CartOrderDetail" DROP CONSTRAINT "CartOrderDetail_productId_fkey";

-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_userId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_productCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "ProductCategory" DROP CONSTRAINT "ProductCategory_parentCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_rolId_fkey";

-- DropIndex
DROP INDEX "User_googleId_key";

-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "quantity" INTEGER NOT NULL,
ALTER COLUMN "total" SET DATA TYPE DECIMAL(10,4),
ALTER COLUMN "subTotal" SET DATA TYPE DECIMAL(10,4),
ALTER COLUMN "subTotalDiscount" SET DATA TYPE DECIMAL(10,4),
ALTER COLUMN "subTotalTax" SET DATA TYPE DECIMAL(10,4),
ALTER COLUMN "discount" SET DATA TYPE DECIMAL(10,4),
ALTER COLUMN "tax" SET DATA TYPE DECIMAL(10,4);

-- AlterTable
ALTER TABLE "CartDetail" DROP CONSTRAINT "CartDetail_pkey",
ADD COLUMN     "discount" DECIMAL(10,4) NOT NULL,
ADD COLUMN     "salePrice" DECIMAL(10,4) NOT NULL,
ADD COLUMN     "subTotal" DECIMAL(10,4) NOT NULL,
ADD COLUMN     "subTotalDiscount" DECIMAL(10,4) NOT NULL,
ADD COLUMN     "subTotalTax" DECIMAL(10,4) NOT NULL,
ADD COLUMN     "tax" DECIMAL(10,4) NOT NULL,
ADD COLUMN     "total" DECIMAL(10,4) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "productId",
ADD COLUMN     "productId" INTEGER NOT NULL,
DROP COLUMN "colorDiscountId",
ADD COLUMN     "colorDiscountId" INTEGER NOT NULL,
ADD CONSTRAINT "CartDetail_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CartOrder" DROP COLUMN "paymentMethodId",
ADD COLUMN     "paymentMethodId" INTEGER NOT NULL,
ALTER COLUMN "total" SET DATA TYPE DECIMAL(10,4),
ALTER COLUMN "subTotal" SET DATA TYPE DECIMAL(10,4),
ALTER COLUMN "subTotalDiscount" SET DATA TYPE DECIMAL(10,4),
ALTER COLUMN "subTotalTax" SET DATA TYPE DECIMAL(10,4),
ALTER COLUMN "discount" SET DATA TYPE DECIMAL(10,4),
ALTER COLUMN "tax" SET DATA TYPE DECIMAL(10,4);

-- AlterTable
ALTER TABLE "CartOrderDetail" DROP CONSTRAINT "CartOrderDetail_pkey",
DROP COLUMN "price",
ADD COLUMN     "salePrice" DECIMAL(10,4) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "productId",
ADD COLUMN     "productId" INTEGER NOT NULL,
ALTER COLUMN "total" SET DATA TYPE DECIMAL(10,4),
ALTER COLUMN "discount" SET DATA TYPE DECIMAL(10,4),
ALTER COLUMN "tax" SET DATA TYPE DECIMAL(10,4),
ALTER COLUMN "discountPerecentage" SET DATA TYPE DECIMAL(10,4),
DROP COLUMN "colorDiscountId",
ADD COLUMN     "colorDiscountId" INTEGER NOT NULL,
ADD CONSTRAINT "CartOrderDetail_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ColorDiscount" DROP CONSTRAINT "ColorDiscount_pkey",
DROP COLUMN "discountPerecentage",
ADD COLUMN     "discountPercentage" DECIMAL(10,4) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ColorDiscount_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "PaymentMethods" DROP CONSTRAINT "PaymentMethods_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "PaymentMethods_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,4),
ALTER COLUMN "cost" SET DATA TYPE DECIMAL(10,4),
DROP COLUMN "productCategoryId",
ADD COLUMN     "productCategoryId" INTEGER NOT NULL,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ProductCategory" DROP CONSTRAINT "ProductCategory_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "parentCategoryId",
ADD COLUMN     "parentCategoryId" INTEGER,
ADD CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "TaxRate" ALTER COLUMN "rate" SET DATA TYPE DECIMAL(10,4);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "googleId",
DROP COLUMN "rolId",
ADD COLUMN     "rolId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UserRol" DROP CONSTRAINT "UserRol_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "UserRol_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Customer";

-- CreateTable
CREATE TABLE "Module" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RolPermission" (
    "id" SERIAL NOT NULL,
    "rolId" INTEGER NOT NULL,
    "permissionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RolPermission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RolPermissionrolId" ON "RolPermission"("rolId");

-- CreateIndex
CREATE INDEX "RolPermissionpermissionId" ON "RolPermission"("permissionId");

-- CreateIndex
CREATE INDEX "CartDetailproductId" ON "CartDetail"("productId");

-- CreateIndex
CREATE INDEX "CartOrderpaymentMethodId" ON "CartOrder"("paymentMethodId");

-- CreateIndex
CREATE INDEX "OrderDetailproductId" ON "CartOrderDetail"("productId");

-- CreateIndex
CREATE INDEX "productCategoryId" ON "Product"("productCategoryId");

-- CreateIndex
CREATE INDEX "UserrolId" ON "User"("rolId");

-- AddForeignKey
ALTER TABLE "RolPermission" ADD CONSTRAINT "RolPermission_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "UserRol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolPermission" ADD CONSTRAINT "RolPermission_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "UserRol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productCategoryId_fkey" FOREIGN KEY ("productCategoryId") REFERENCES "ProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_parentCategoryId_fkey" FOREIGN KEY ("parentCategoryId") REFERENCES "ProductCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartDetail" ADD CONSTRAINT "CartDetail_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartDetail" ADD CONSTRAINT "CartDetail_colorDiscountId_fkey" FOREIGN KEY ("colorDiscountId") REFERENCES "ColorDiscount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartOrder" ADD CONSTRAINT "CartOrder_paymentMethodId_fkey" FOREIGN KEY ("paymentMethodId") REFERENCES "PaymentMethods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartOrderDetail" ADD CONSTRAINT "CartOrderDetail_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartOrderDetail" ADD CONSTRAINT "CartOrderDetail_colorDiscountId_fkey" FOREIGN KEY ("colorDiscountId") REFERENCES "ColorDiscount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
