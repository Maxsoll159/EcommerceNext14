"use client"

import { QuantitySelector } from "@/components"
import { useCartStore } from "@/store"
import { currencyFormat } from "@/utils"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"


export const ProductsInCart = () => {

    const productsInCart = useCartStore(state => state.cart)
    const updateProductQuantity = useCartStore(state => state.updateProductQuantity)
    const removeProductToCard = useCartStore(state => state.removeProductToCard)
    const [loaded, setLoaded] = useState<boolean>(false)
   
    useEffect(()=>{
        setLoaded(true)
    }, [])

    if(!loaded){
        return <p>Cargando.....</p>
    }


    return (
        <>
            {
                productsInCart.map((product) => (
                    <div key={`${product.slug}-${product.size}`} className="flex mb-5 items-centerx">
                        <Image style={{ width: "100px", height: "100px" }} src={`/products/${product.image}`} width={100} height={100} alt={product.title} className="mr-5 rounded" />
                        <div>
                            <Link className="hover:underline cursor-pointer" href={`product/${product.slug}`}>
                               {product.size} - {product.title}
                            </Link>
                            <p className="mb-3 font-semibold">{currencyFormat(product.price)}</p>
                            <QuantitySelector quantity={product.quantity}
                                onQuantityChanged={(quantity) => updateProductQuantity(product, quantity)}
                            />

                            <button onClick={()=>removeProductToCard(product)} className="underline mt-3">
                                Remover
                            </button>

                        </div>
                    </div>
                ))
            }

        </>
    )
}
