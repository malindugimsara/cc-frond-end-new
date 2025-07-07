import axios from "axios"
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductPage() {

    // useState
    const[products, setProducts] = useState([])
    //useEffect
    useEffect(() => {
        // Fetch products from the backend
        axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product")
        .then((response) => {
            console.log(response.data);
            setProducts(response.data);
        })
    },[]
)

    return (
        <div className="w-full h-full rounded-lg p-1 relative">
            <Link to={"/admin/addproduct"} className="text-white bg-blue-500 hover:bg-blue-600 p-2 text-3xl rounded-full mb-4 flex items-center gap-2 absolute bottom-4 right-4">
                <FaPlus />
            </Link>
            <table className="w-full">
                <thead>
                    <tr className="text-center ">
                        <th className="p-2">Product ID</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">Lable Price</th>
                        <th className="p-2">Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product,index) => {
                        return (
                            <tr key={index} className="text-center border-b cursor-pointer hover:bg-gray-100">
                                <td className="p-2">{product.productId}</td>
                                <td className="p-2">{product.name}</td>
                                <td className="p-2">Rs.{product.price}</td>
                                <td className="p-2">Rs.{product.lablePrice}</td>
                                <td className="p-2">{product.stock}</td>
                            </tr>
                        )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
    
}

