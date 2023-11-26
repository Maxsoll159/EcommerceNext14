import { titleFont } from "@/config/fonts"
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5'
import Link from "next/link"


export const TopMenu = () => {
    return (
        <nav className="flex px-5 justify-between items-center w-full">
            {/**LOGO */}
            <div>
                <Link href="/">
                    <span className={`${titleFont.className} antialiased font-bold`}>Tesla</span>
                    <span> | Shop</span>
                </Link>
            </div>


            {/*CENTER MENU */}
            <div className="hidden sm:block">
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/men">Hombres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/woman">Mujeres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/niños">kids</Link>
            </div>


            {/**SEARCH CARTS MENU */}
            <div className="flex items-center space-x-5">
                <Link href="/search">
                    <IoSearchOutline className="w-5 h-5" />
                </Link>
                <Link href="/cart">
                    <div className="relative">
                        <span className="absolute text-xs rounded-full px-1 font-bold -top-2 bg-blue-700 text-white -right-2">3</span>
                        <IoCartOutline className="w-5 h-5" />
                    </div>
                </Link>

                <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">Menu</button>
            </div>

           

        </nav>
    )
}
