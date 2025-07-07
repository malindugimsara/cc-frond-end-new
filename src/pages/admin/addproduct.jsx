//     productId 
//     name 
//     altName 
//     price 
//     lablePrice 
//     description
//     images 

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import mediaUpload from "../../../utils/mediaupload.jsx";


export default function AddProduct() {

    const [productId, setProductId] = useState("");
    const [name, setName] = useState("");
    const [altName, setAltName] = useState("");
    const [price, setPrice] = useState("");
    const [lablePrice, setLablePrice] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
    const [stock, setStock] = useState("");
    const navigate = useNavigate();

   async function handleAddProduct() {

     const promisesArray=[]
        for (let i = 0; i < images.length; i++) {
            const promise = mediaUpload(images[i]);
            promisesArray[i] = promise;
        }
        try{
        const imageUrls = await Promise.all(promisesArray);
    
        const alterNameInArray = altName.split(",");
        const product={
            productId: productId,
            name: name,
            altName: alterNameInArray,
            price: price,
            lablePrice: lablePrice,
            description: description,
            stock: stock,
            images: imageUrls
        }
        const token = localStorage.getItem("token");
        console.log(token);
        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/product", product, {
            headers: {
                
               "Authorization": "Bearer "+token
            }
        }).then((response) => {
           toast.success("Product added successfully!");
            navigate("/admin/product");
        }).catch((error) => {
            toast.error(error.response.data.message || "Failed to add product. Please try again.");
        })
    } catch (error) {
            toast.error("Error uploading images: " + error.message);

        console.log(product);
    }
    }
    return (
        <div className="w-full h-full rounded-lg p-4 flex flex-col items-center justify-center ">
            <h1 className="text-3xl font-bold text-center mb-4">Add Product</h1>
            <div className="w-[500px] h-[600px]  shadow-xl rounded-lg flex flex-col items-center justify-center bg-gray-200 ">
                <input 
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    className="w-[400px] h[50px] border border-gray-500 rounded-xl text-center m-[10px]" type="text" placeholder="Product ID" />
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    className="w-[400px] h[50px] border border-gray-500 rounded-xl text-center m-[10px]" type="text" placeholder="Name" />
                <input
                    value={altName}
                    onChange={(e) => setAltName(e.target.value)}
                    className="w-[400px] h[50px] border border-gray-500 rounded-xl text-center m-[10px]" type="text" placeholder="Alt Name" />
                <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} 
                    className="w-[400px] h[50px] border border-gray-500 rounded-xl text-center m-[10px]" type="number" placeholder="Price" />
                <input
                    value={lablePrice}
                    onChange={(e) => setLablePrice(e.target.value)} 
                    className="w-[400px] h[50px] border border-gray-500 rounded-xl text-center m-[10px]" type="number" placeholder="Lable Price" />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                    className="w-[400px] h[100px] border border-gray-500 rounded-xl text-center m-[10px]" placeholder="Description"></textarea>
                <input
                    // value={images}
                    onChange={(e) => setImages(e.target.files)} 
                    multiple
                     className="w-[400px] h[50px] border border-gray-500 rounded-xl text-center m-[10px]" type="file" placeholder="Images" />
                <input
                    value={stock}
                    onChange={(e) => setStock(e.target.value)} 
                    className="w-[400px] h[50px] border border-gray-500 rounded-xl text-center m-[10px]" type="number" placeholder="Stock" />
                <button 
                onClick={handleAddProduct}
                className="w-[400px] h[50px] bg-green-500 text-white rounded-xl text-center mt-[20px] cursor-pointer">Add Product</button>
                <Link to={"/admin/product"} className="w-[400px] h[50px] bg-red-500 text-white rounded-xl text-center m-[10px] cursor-pointer">Cancel</Link>
            </div>
        
            
        </div>
    );
}