import {FaPlus } from "react-icons/fa";

export default function ProductItem({ product }) {
  return (
    <div className="bg-white flex flex-col  gap-y-1 relative items-center text-center font-semibold p-3">
        <button className="absolute top-3 right-3 bg-white w-8 h-8 flex items-center justify-center border transition-colors border-gray-200 rounded-lg text-purple-700 shadow-md hover:bg-purple-600 hover:text-yellow-300">
           <FaPlus size={16} />
        </button>
         <img src={product.image} alt={product.title} />
         <div className="text-sm  text-purple-800">{product.price}</div>
         <div className="text-gray-900">{product.title}</div>
         <div className="text-gray-500">{product.alt}</div>
    </div>
  )
}
