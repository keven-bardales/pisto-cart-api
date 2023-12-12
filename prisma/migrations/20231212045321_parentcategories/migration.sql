-- DropIndex
DROP INDEX "categoryCode";

-- DropIndex
DROP INDEX "categoryLevel";

-- DropIndex
DROP INDEX "categoryname";

-- DropIndex
DROP INDEX "parentCategoryId";

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_parentCategoryId_fkey" FOREIGN KEY ("parentCategoryId") REFERENCES "ProductCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
