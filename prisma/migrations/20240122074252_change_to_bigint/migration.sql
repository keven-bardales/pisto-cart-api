/*
  Warnings:

  - You are about to alter the column `total` on the `Cart` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `subTotal` on the `Cart` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `subTotalDiscount` on the `Cart` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `subTotalTax` on the `Cart` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `discount` on the `Cart` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `tax` on the `Cart` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `discount` on the `CartDetail` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `salePrice` on the `CartDetail` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `subTotal` on the `CartDetail` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `subTotalDiscount` on the `CartDetail` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `subTotalTax` on the `CartDetail` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `tax` on the `CartDetail` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `total` on the `CartDetail` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `total` on the `CartOrder` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `subTotal` on the `CartOrder` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `subTotalDiscount` on the `CartOrder` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `subTotalTax` on the `CartOrder` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `discount` on the `CartOrder` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `tax` on the `CartOrder` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `total` on the `CartOrderDetail` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `discount` on the `CartOrderDetail` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `tax` on the `CartOrderDetail` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `discountPerecentage` on the `CartOrderDetail` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `salePrice` on the `CartOrderDetail` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `discountPercentage` on the `ColorDiscount` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.
  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `Integer`.
  - You are about to alter the column `cost` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `Integer`.
  - You are about to alter the column `rate` on the `TaxRate` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `BigInt`.

*/
-- AlterTable
ALTER TABLE "Cart" ALTER COLUMN "total" SET DATA TYPE BIGINT,
ALTER COLUMN "subTotal" SET DATA TYPE BIGINT,
ALTER COLUMN "subTotalDiscount" SET DATA TYPE BIGINT,
ALTER COLUMN "subTotalTax" SET DATA TYPE BIGINT,
ALTER COLUMN "discount" SET DATA TYPE BIGINT,
ALTER COLUMN "tax" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "CartDetail" ALTER COLUMN "discount" SET DATA TYPE BIGINT,
ALTER COLUMN "salePrice" SET DATA TYPE BIGINT,
ALTER COLUMN "subTotal" SET DATA TYPE BIGINT,
ALTER COLUMN "subTotalDiscount" SET DATA TYPE BIGINT,
ALTER COLUMN "subTotalTax" SET DATA TYPE BIGINT,
ALTER COLUMN "tax" SET DATA TYPE BIGINT,
ALTER COLUMN "total" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "CartOrder" ALTER COLUMN "total" SET DATA TYPE BIGINT,
ALTER COLUMN "subTotal" SET DATA TYPE BIGINT,
ALTER COLUMN "subTotalDiscount" SET DATA TYPE BIGINT,
ALTER COLUMN "subTotalTax" SET DATA TYPE BIGINT,
ALTER COLUMN "discount" SET DATA TYPE BIGINT,
ALTER COLUMN "tax" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "CartOrderDetail" ALTER COLUMN "total" SET DATA TYPE BIGINT,
ALTER COLUMN "discount" SET DATA TYPE BIGINT,
ALTER COLUMN "tax" SET DATA TYPE BIGINT,
ALTER COLUMN "discountPerecentage" SET DATA TYPE BIGINT,
ALTER COLUMN "salePrice" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "ColorDiscount" ALTER COLUMN "discountPercentage" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "price" SET DATA TYPE INTEGER,
ALTER COLUMN "cost" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "TaxRate" ALTER COLUMN "rate" SET DATA TYPE BIGINT;
