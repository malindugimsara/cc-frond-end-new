import axios from "axios";
import { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import ProductCard from "../component/productCard";
import Loader from "../component/loader";

export default function ProductPage() {
    const [productsList, setProductsList] = useState([]);
    const [productLoaded, setProductLoaded] = useState(false);

    useEffect(() => {
        if (!productLoaded){
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/product")
            .then((response) => {
                setProductsList(response.data);
                setProductLoaded(true);
                
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
        }
        
    }, [productLoaded]
    );

    return (
        <div className='w-full h-screen max-h-screen '>
           {
                productLoaded ?
                <div className="w-full h-full flex flex-wrap items-center justify-center"> 
                    {
                        productsList.map(
                            (product,index)=>{
                                return(
                                    <ProductCard key={product.productId} product={product} />
                                )
                            }
                        )
                    }
                </div>
                : 
                <Loader />
           }
        </div>
    );
}