import { Size } from "@/interfaces"

interface Props{
    selectedSize?: Size;
    availableSize: Size[]
}
export const SizeSelector = ({selectedSize, availableSize}:Props) => {
  return (
    <div className="my-5">
        <h3 className="font-bold mb-4">Tallas Disponibles</h3>
        <div className="flex">
            {availableSize.map((size)=>(
                <button key={size} className={`${size === selectedSize && "underline"} mx-2 hover:underline text-lg`}>{size}</button>
            ))}

        </div>
    </div>
  )
}
