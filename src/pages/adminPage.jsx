import { Routes, Route, Link } from "react-router-dom";
import ProductPage from "./admin/product";
import { FaUsers } from "react-icons/fa";
import { MdOutlineWarehouse } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import '../App.css';
import AddProduct from "./admin/addproduct";
import EditProduct from "./admin/editproduct";
import AdminOrderPage from "./admin/adminOrderPage";

export default function AdminPage() {
    return (
        <div className='w-full h-screen flex bg-gray-100 p-2'>
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
        </div>
    )
}