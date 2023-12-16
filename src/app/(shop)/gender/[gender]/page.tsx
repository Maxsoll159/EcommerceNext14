
import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { Gender } from "@prisma/client";
import { redirect } from "next/navigation";

//import { initialData } from "@/seed/seed";
//const seedProductos = initialData.products

interface Props {
  params: {
    gender: string
  }
  searchParams: {
    page?: string
  }
}


export default async function CategoryPage({ params, searchParams }: Props) {
  const { gender } = params
  const page = searchParams.page ? parseInt(searchParams.page) : 1
  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page, gender: gender as Gender })

  if (products.length === 0) {
    redirect(`/gender/${gender}`)
  }


  const labels: Record<string, string> = {
    'men': "Hombres",
    'women': "Mujeres",
    'kid': "Niños",
    'unisex': 'Todos'
  }

  return (
    <div>
      <Title title={`Articulos de ${labels[gender]}`} subtitle="Todos los productos" className="mb-2" />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}