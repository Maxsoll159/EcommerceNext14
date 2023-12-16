import { Pagination, ProductGrid } from '@/components';
import { Title } from '../../components/ui/title/Title';
//import { initialData } from "@/seed/seed";
import { getPaginatedProductsWithImages } from '@/actions';
import { redirect } from 'next/navigation';
//const products = initialData.products

interface Props {
  searchParams: {
    page?: string
  }
}

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1
  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({page})

  if(products.length === 0){
    redirect("/")
  }

  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />
      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  )
}
