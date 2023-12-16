import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';

export default function EmptyPage() {
    return (
      <div className="flex justify-center items-center container h-[calc(100vh_-_56px)]">
        <IoCartOutline size={80} className="mx-3" />
        <div className="flex flex-col items-center">
          <h1>Tu carrito esta vacio</h1>
          <Link href="/" className="text-blue-500 mt-2 text-4xl">Regresar</Link>
        </div>
      </div>
    );
  }