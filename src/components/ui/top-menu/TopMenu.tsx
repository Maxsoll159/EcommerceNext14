"use client"
import { titleFont } from "@/config/fonts"
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5'
import Link from "next/link"
import { useCartStore, useUIStore } from "@/store"
import { useEffect, useState } from "react"


export const TopMenu = () => {

    const openSideMenu = useUIStore(state => state.openSideMenu)
    const getTotalItems = useCartStore(state => state.getTotalItems())

    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        setLoaded(true)
    },[])

    return (
        <nav className="flex px-5 justify-between items-center w-full">
            {/**LOGO */}
            <div>
                <Link href="/">
                    <span className={`${titleFont.className} antialiased font-bold`}>Developer</span>
                    <span> | Shop</span>
                </Link>
            </div>


            {/*CENTER MENU */}
            <div className="hidden sm:block">
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/gender/men">Hombres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/gender/women">Mujeres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/gender/kid">kids</Link>
            </div>


            {/**SEARCH CARTS MENU */}
            <div className="flex items-center space-x-5">
                <Link href="/search">
                    <IoSearchOutline className="w-5 h-5" />
                </Link>
                <Link href={
                    getTotalItems === 0 && loaded ? "/empty" : "/cart"
                }>
                    <div className="relative">
                        <span className="fade-in absolute text-xs rounded-full px-1 font-bold -top-2 bg-blue-700 text-white -right-2">
                            {
                               ( loaded && getTotalItems > 0) && getTotalItems
                            }
                        </span>
                        <IoCartOutline className="w-5 h-5" />
                    </div>
                </Link>

                <button onClick={openSideMenu} className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">Menu</button>
            </div>

           

        </nav>
    )
}
