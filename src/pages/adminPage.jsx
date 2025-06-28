import { Routes, Route, Link } from "react-router-dom";

export default function AdminPage() {
    return (
        <div className='w-full h-screen flex'>
            <div className='h-full w-[300px] bg-red-300'>
                <Link to ="/admin/users" className="block p-2">Users</Link>
                <Link to ="/admin/product" className="block p-2">Product</Link>
                <Link to ="/admin/orders" className="block p-2">Orders</Link>
            </div>

            <div className="h-full bg-white w-[calc(100vw-300px)] flex rounded-lg">
                <Routes path="/*">
                    <Route path="/users" element={<div>User</div>} />
                    <Route path="/product" element={<div>Product</div>} />
                    <Route path="/orders" element={<div>Orders</div>} />
                </Routes>
            </div>
        </div>
    )
}