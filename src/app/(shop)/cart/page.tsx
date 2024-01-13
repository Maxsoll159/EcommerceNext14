import {  Title } from "@/components";
import { initialData } from "@/seed/seed";
import Link from 'next/link';
import { ProductsInCart } from "./ui/ProductsInCart";
import { OrderSummary } from "./ui/OrderSummary";


export default function CartPage() {

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col container">
        <Title title="Carrito " />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/**Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar mas items</span>
            <Link href="/" className="underline mb-5">Continua Comprando</Link>

            <ProductsInCart />
          </div>


          {/**Resumen de orden */}

           <OrderSummary />


        </div>
      </div>
    </div>
  );
}