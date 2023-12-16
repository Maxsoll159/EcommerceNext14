-- CreateTable
CREATE TABLE "ProductImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "prodcutId" TEXT NOT NULL,

    CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_prodcutId_fkey" FOREIGN KEY ("prodcutId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
