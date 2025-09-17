import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Loader from "../component/loader";

export default function ProductOverview(props) {

    const params=useParams();
    const [product,setProduct]=useState(null);
    const [status,setStatus]=useState("loading"); // error, loaded

    useEffect(()=>{
        if (status==="loading"){
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product/"+params.productId)
            .then((response)=>{
                setProduct(response.data);
                setStatus("loaded");
            })
            .catch((error)=>{
                toast.error("Error fetching product details. Please try again.");
                setStatus("error");
            })
        }
    },[status])


    return (
        <div className="w-full h-full">
            {
                status==="loading" && <Loader/>
            }
            {
                status=="loaded" &&
                <div className="w-full h-full">
                    Product loaded
                </div>
            }
            {
                status==="error" && <div>
                    error
                </div>
            }
        </div>

    );
}