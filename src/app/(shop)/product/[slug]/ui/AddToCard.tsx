"use client"
import { useState } from "react"

import { QuantitySelector, SizeSelector } from "@/components"
import { CartProduct, Product, Size } from "@/interfaces"
import { useCartStore } from "@/store"

interface Props {
    product: Product
}


export const AddToCard = ({ product }: Props) => {

    const addProductToCart = useCartStore(state => state.addProductToCard)

    const [size, setSize] = useState<Size | undefined>()
    const [quantity, setQuantity] = useState<number>(1);
    const [posted, setPosted] = useState(false)

    const addToCard = () => {
        setPosted(true)
        if (!size) return

        const cartProduct: CartProduct = {
            id: product.id,
            slug: product.slug,
            title: product.title,
            price: product.price,
            offer: product.offer,
            quantity: quantity,
            size: size,
            image: product.images[0]
        }

        addProductToCart(cartProduct);
        setPosted(false)
        setQuantity(1)
        setSize(undefined)
    }

    return (
        <>
            {
                posted && !size && (
                    <span className="mt-2 text-red-500">
                        Debe de seleccionar una talla
                    </span>
                )
            }

            {/**Selector de Tallas */}
            <SizeSelector selectedSize={size} availableSize={product.sizes} onSizeChanged={setSize} />
            {/**Selector de Cantidad */}
            <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />
            {/**button */}
            <button className="btn-primary my-5" onClick={addToCard}>Agregar al Carrito</button>
        </>
    )
}
