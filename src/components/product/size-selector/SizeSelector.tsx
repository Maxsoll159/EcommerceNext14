import { Size } from "@/interfaces"

interface Props{
    selectedSize?: Size;
    availableSize: Size[];
    onSizeChanged: (size: Size) => void;
}
export const SizeSelector = ({selectedSize, availableSize, onSizeChanged}:Props) => {
  return (
    <div className="my-5">
        <h3 className="font-bold mb-4">Tallas Disponibles</h3>
        <div className="flex">
            {availableSize.map((size)=>(
                <button onClick={()=>onSizeChanged(size)} key={size} className={`${size === selectedSize && "underline"} mx-2 hover:underline text-lg`}>{size}</button>
            ))}

        </div>
    </div>
  )
}
