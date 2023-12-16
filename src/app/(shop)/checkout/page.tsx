import {  Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from 'next/link';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]
export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-10 px-10 sm:px-0">
      <div className="flex flex-col container">
        <Title title="Verificar orden " />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/**Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar Elementos</span>
            <Link href="/" className="underline mb-5">Editar Carrito</Link>

            {
              productsInCart.map((product) => (
                <div key={product.slug} className="flex mb-5 items-center">
                  <Image style={{ width: "100px", height: "100px" }} src={`/products/${product.images[0]}`} width={100} height={100} alt={product.title} className="mr-5 rounded" />
                  <div>
                    <p>{product.title}</p>
                    <p>${product.price} x 3</p>
                    <p className="font-bold">Subtotal: ${product.price}</p>

                  </div>
                </div>
              ))
            }
          </div>


          {/**Resumen de orden */}

          <div className="bg-white rounded-xl shadow-xl p-7">

            <h2 className="text-2xl font-bold">Direccion de entrega</h2>

            <div className="mb-10">
              <p className="text-xl">Martin Rios Tineo</p>
              <p className="font-bold">Av. Siempre Viva 123</p>
              <p>Col. Centro</p>
              <p>Alcaldia Causdsdsdd</p>
              <p>Ciudad de Mexico</p>
              <p>CP 123123123</p>
              <p>123.123.123.123</p>
            </div>

            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />


            <h2 className="text-2xl mb-2">Resumen de order</h2>
            
            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 articulos</span>


              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">$ 100</span>

              <span className="mt-5 text-2xl">Total</span>
              <span className="text-right mt-5 text-2xl">$ 100</span>
            </div>


             <p className="mb-5">
              <span className="text-xs">
                Al hacer clic en &quotColocar orden&quot, aceptas nuestros <a className="underline" href="#">terminos y condiciones</a> 
                <a href="#"> politica de privacidad</a>
              </span>
             </p>

            <div>
              <Link className="flex btn-primary justify-center mt-5 mb-2 w-full" href="/orders/123">Colocar orden</Link>
            </div>

          </div>


        </div>
      </div>
    </div>
  );
}