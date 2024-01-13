import { CartProduct } from "@/interfaces";
import { create } from "zustand";
import CartPage from '../../app/(shop)/cart/page';
import { persist } from "zustand/middleware";

interface State {
    cart: CartProduct[];

    getTotalItems: () => number
    getSummaryInformation: () => {
        subTotal: number;
        tax: number;
        total: number;
        itemsInCart: number;
    }
    //addProductToCard
    addProductToCard: (product: CartProduct) => void
    //updateProductQuantity
    updateProductQuantity: (product: CartProduct, quantity: number) => void
    //removeProductToCard
    removeProductToCard: (product: CartProduct) => void

}

export const useCartStore = create<State>()(

    persist(
        (set, get) => ({
            cart: [],
            addProductToCard: (product: CartProduct) => {
                const { cart } = get()
                const productInCart = cart.some((item) => item.id === product.id && item.size === product.size)
                if (!productInCart) {
                    set({ cart: [...cart, product] })
                    return;
                }
                const updatedCartProducts = cart.map((items) => {
                    if (items.id === product.id && items.size === product.size) {
                        return { ...items, quantity: items.quantity + product.quantity }
                    }

                    return items
                })
                set({ cart: updatedCartProducts })
            },
            getTotalItems: () => {
                const { cart } = get()
                return cart.reduce((total, items) => (total + items.quantity), 0)
            },
            updateProductQuantity: (product: CartProduct, quantity: number) => {
                const { cart } = get()
                const productUpdate = cart.map((item) => {
                    if (item.id === product.id && item.size === product.size) {
                        return { ...item, quantity: quantity };
                    }
                    return item
                });
                set({ cart: productUpdate })
            },
            removeProductToCard: (product: CartProduct) => {
                const { cart } = get()

                set({ cart: cart.filter(p => p.id !== product.id || p.size !== product.size) })


            },
            getSummaryInformation: () => {
                const { cart } = get()
                const subTotal = cart.reduce((subTotal, product) => (product.price * product.quantity) + subTotal, 0)
                const tax = subTotal * 0.15;
                const itemsInCart = cart.reduce((total, items) => (total + items.quantity), 0)
                const total = subTotal + tax
                return {
                    subTotal, tax, total, itemsInCart
                }
            }
        })
        , {
            name: 'shopping-cart',
        }
    )


)