//     productId 
//     name 
//     altName 
//     price 
//     lablePrice 
//     description
//     images 

import { Link } from "react-router-dom";

//     stock 
export default function AddProduct() {
    return (
        <div className="w-full h-full rounded-lg p-4 flex flex-col items-center justify-center ">
            <h1 className="text-3xl font-bold text-center mb-4">Add Product</h1>
            <div className="w-[500px] h-[600px]  shadow-xl rounded-lg flex flex-col items-center bg-gray-200 ">
                <input className="w-[400px] h[50px] border border-gray-500 rounded-xl text-center m-[10px]" type="text" placeholder="Product ID" />
                <input className="w-[400px] h[50px] border border-gray-500 rounded-xl text-center m-[10px]" type="text" placeholder="Name" />
                <input className="w-[400px] h[50px] border border-gray-500 rounded-xl text-center m-[10px]" type="text" placeholder="Alt Name" />
                <input className="w-[400px] h[50px] border border-gray-500 rounded-xl text-center m-[10px]" type="number" placeholder="Price" />
                <input className="w-[400px] h[50px] border border-gray-500 rounded-xl text-center m-[10px]" type="number" placeholder="Lable Price" />
                <textarea className="w-[400px] h[100px] border border-gray-500 rounded-xl text-center m-[10px]" placeholder="Description"></textarea>
                <input className="w-[400px] h[50px] border border-gray-500 rounded-xl text-center m-[10px]" type="text" placeholder="Images" />
                <input className="w-[400px] h[50px] border border-gray-500 rounded-xl text-center m-[10px]" type="number" placeholder="Stock" />
                <button className="w-[400px] h[50px] bg-green-500 text-white rounded-xl text-center mt-[20px] cursor-pointer">Add Product</button>
                <Link to={"/admin/product"} className="w-[400px] h[50px] bg-red-500 text-white rounded-xl text-center m-[10px] cursor-pointer">Cancel</Link>
            </div>
        
            
        </div>
    );
}