import { Route, Routes } from "react-router-dom";
import Header from "../component/header";
import ProductPage from "../client/productpage.jsx";
import Contact from "./contact.jsx";
import ProductOverview from "../client/productOverview.jsx";


export default function HomePage() {
    return (
        <div className='w-full h-screen max-h-screen'>
            <Header />
            <div className='w-full min-h-[calc(100vh-75px)] '>
                <Routes path="/*">
                    <Route path="/" element={<div>Home</div>} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route path="/contact" element= {<Contact />} />
                    <Route path="/reviews" element={<div>Reviews</div>} />
                    <Route path="/overview/:productId" element={<ProductOverview />} /> 
                    <Route path="/*" element={<div>404 Not Found</div>} />

                </Routes>
            </div>
        </div>
    );
}