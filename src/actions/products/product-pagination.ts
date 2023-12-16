"use server";
import { Gender } from "@prisma/client";
import prisma from "../../lib/prisma";
interface PaginationOptions {
  page?: number;
  take?: number;
  gender?: string;
}
export const getPaginatedProductsWithImages = async ({
  page = 1,
  take = 12,
  gender,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    //OBTENER LOS PRODUCTOS

    const products = await prisma.product.findMany({
      take: take,
      skip: (page - 1) * take,
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
      where: {
        gender: gender as Gender,
      },
    });

    //OBTENER TOTAL DE PAGINAS
    const totalProduct = await prisma.product.count({
      where: {
        gender: gender as Gender,
      },
    });
    const totaPage = Math.ceil(totalProduct / take);
    return {
      currentPage: page,
      totalPages: totaPage,
      products: products.map((product) => ({
        ...product,
        images: product.ProductImage.map((image) => image.url),
      })),
    };
  } catch (error) {
    throw new Error("No se pudo cargar los productos");
  }
};
