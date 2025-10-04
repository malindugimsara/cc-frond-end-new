import { Routes, Route, Link, useNavigate } from "react-router-dom";
import ProductPage from "./admin/product";
import { FaUsers } from "react-icons/fa";
import { MdOutlineWarehouse } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import '../App.css';
import AddProduct from "./admin/addproduct";
import EditProduct from "./admin/editproduct";
import AdminOrderPage from "./admin/adminOrderPage";
import Loader from "../component/loader";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPage() {
    const [uservalidated, setUservalidated] = useState("false");
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token == null) {
            toast.error("Please login to access admin panel");
            navigate("/");
        }
        else {
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/user/current",  {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }).then((response) => {
                if (response.data.user.role === "admin") {
                    setUservalidated(true);
                }
                else {
                    toast.error("You are not authorized to access admin panel");
                    navigate("/");
                }
            }).catch((error) => {
                toast.error("Session expired. Please login again.");
                navigate("/");
            })
        }
    }, []);
    return (
        <div className='w-full h-screen flex bg-gray-100 p-2'>
            {uservalidated ?
            <>
            <div className='h-full w-[300px] bg-red-200 rounded-xl shadow-lg p-4 flex flex-col mr-2'>
                <Link to ="/admin/users" className="block p-2 flex item-center" > <FaUsers className="mr-2 "/> Users</Link>
                <Link to ="/admin/product" className="block p-2 flex item-center"> <MdOutlineWarehouse className="mr-2"/> Product</Link>
                <Link to ="/admin/orders" className="block p-2 flex item-center"> <LiaFileInvoiceSolid className="mr-2"/> Orders</Link>
            </div>

            <div className="h-full bg-white w-[calc(100vw-300px)] rounded-xl shadow-lg p-4 overflow-y-auto">
                <Routes path="/*">
                    <Route path="/users" element={<div>User</div>} />
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/orders" element={<AdminOrderPage />} />
                    <Route path="/addproduct" element={<AddProduct />} />
                    <Route path="/editproduct/" element={<EditProduct />} />`
                </Routes>
            </div>
            </>
            :
            <Loader />
            }
        </div>

    )
}