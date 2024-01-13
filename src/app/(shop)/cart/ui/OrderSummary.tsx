"use client"

import { useCartStore } from "@/store"
import { currencyFormat } from "@/utils";
import Link from "next/link"
import { useEffect, useState } from "react";


export const OrderSummary = () => {
    const [loaded, setLoaded] = useState(false)
    let getSummaryInformation = useCartStore(state => state.getSummaryInformation());

    useEffect(()=>{
        setLoaded(true)
    }, [])

    if(!loaded){
        return <p>Cargando.....</p>
    }

    return (
        <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Resumen de order</h2>
            <div className="grid grid-cols-2">
                <span>No. Productos</span>
                <span className="text-right">{getSummaryInformation.itemsInCart} articulos</span>


                <span>Subtotal</span>
                <span className="text-right">{currencyFormat(getSummaryInformation.subTotal)}</span>

                <span>Impuestos (15%)</span>
                <span className="text-right">{currencyFormat(getSummaryInformation.tax)}</span>

                <span className="mt-5 text-2xl">Total</span>
                <span className="text-right mt-5 text-2xl">{currencyFormat(getSummaryInformation.total)}</span>
            </div>


            <div>
                <Link className="flex btn-primary justify-center mt-5 mb-2 w-full" href="/checkout/address">Checkout</Link>
            </div>

        </div>
    )
}
