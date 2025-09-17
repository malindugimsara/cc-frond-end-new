import axios from "axios"
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import Loder from "../../component/loader";
import Loader from "../../component/loader";

export default function ProductPage() {

    // useState
    const[products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    //useEffect
    useEffect(() => {
        if (!loaded){
             // Fetch products from the backend
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product")
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
                setLoaded(true)
            })
        }
       
        },[loaded]
    )
    
    async function deleteProduct(productId) {
        const token = localStorage.getItem("token");
        try {
            await axios.delete(import.meta.env.VITE_BACKEND_URL+"/api/product/"+productId, {
                headers: {
                    "Authorization": "Bearer "+token
                }
            });
            setLoaded(false); // Reset loaded state to refetch products
            toast.success("Product deleted successfully!");
        } catch (error) {
            toast.error(error.response.data.message || "Failed to delete product. Please try again.");
        }
    }
    return (
        <div className="w-full h-full rounded-lg p-1 relative">
            <Link to={"/admin/addproduct"} className="text-white bg-blue-500 hover:bg-blue-600 p-2 text-3xl rounded-full mb-4 flex items-center gap-2 absolute bottom-4 right-4">
                <FaPlus />
            </Link>
            {loaded &&<table className="w-full">
                <thead>
                    <tr className="text-center ">
                        <th className="p-2">Product ID</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">Lable Price</th>
                        <th className="p-2">Stock</th>
                        <th className="p-2">Action</th>
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
                                <td className="p-2">  
                                    <div className="w-full h-full flex justify-center gap-2">
                                        
                                        <MdOutlineDeleteOutline onClick={() => {
                                            if (window.confirm("Are you sure you want to delete this product?")) {
                                                deleteProduct(product.productId);
                                            }
                                        }}
                                        className="text-[25px] hover:text-red-600"/>

                                        <MdOutlineEdit onClick={()=>{
                                            navigate("/admin/editproduct/",{
                                            state: product})
                                        }}
                                        className="text-[25px] hover:text-blue-600"/>
                                    </div>  
                                </td>
                            </tr>
                        )
                        })
                    }
                </tbody>
                
            </table>}
            {
                !loaded && 
                    <Loader />
            }
        </div>
    )
    
}

