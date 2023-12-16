import { initialData } from "./seed";
import prisma from "../lib/prisma";
async function main() {

  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();


  const { categories } = initialData;
  //Categorias
  const categoriData = categories.map((category) => ({
    name: category,
  }));

  await prisma.category.createMany({
    data: categoriData,
  });

  const categoriesDB = await prisma.category.findMany();
  console.log(categoriesDB);

  const categoriesMap = categoriesDB.reduce((map, cagegory) => {
    map[cagegory.name] = cagegory.id;
    return map;
  }, {} as Record<string, string>);

  console.log(categoriesMap);

  //Product
  initialData.products.forEach(async (product) => {
    const { type, images, ...rest } = product;
    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type],
      },
    });

    //IMAGES
    const imageData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: imageData,
    });

    const productos = await prisma.product.findMany()
    console.log(product)


  });
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
