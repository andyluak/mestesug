-- CreateTable
CREATE TABLE "Product_Image" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER,
    "product_image_url" VARCHAR(255) NOT NULL,
    "product_image_alt" VARCHAR(255) NOT NULL,

    CONSTRAINT "Product_Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product_Image" ADD CONSTRAINT "Product_Image_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
