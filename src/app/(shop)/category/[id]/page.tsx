
import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
const seedProductos = initialData.products

interface Props {
  params: {
    id: Category
  }
}


export default function CategoryPage({ params }: Props) {
  const { id } = params

  const product = seedProductos.filter((product) => product.gender === id)
  const labels: Record<Category, string> = {
    'men': "Hombres",
    'women': "Mujeres",
    'kid': "Niños",
    'unisex': 'Todos'
  }
  return (
    <div>
      <Title title={`Articulos de ${labels[id]}`} subtitle="Todos los productos" className="mb-2" />
      <ProductGrid products={product} />

    </div>
  );
}