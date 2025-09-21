import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="w-full h-20 bg-gradient-to-r from-blue-500 to-blue-700 flex justify-center items-center shadow-lg ">
            <div className="w-full h-full flex justify-evenly items-center px-8 relative">
                <nav className="flex gap-8 text-pink-200 text-lg font-semibold">
                    <Link to='/home' className="hover:text-white transition-colors">Home</Link>
                    <Link to='/products' className="hover:text-white transition-colors">Products</Link>
                    <Link to='/contact' className="hover:text-white transition-colors">Contact Us</Link>
                    <Link to='/reviews' className="hover:text-white transition-colors">Reviews</Link>
                </nav>
                <Link to='/cart' className="">
                    <BsCart3 className="text-2xl absolute right-[60px] top-1/2 -translate-y-1/2 text-pink-200 hover:text-white transition-colors" />
                </Link>
            </div>
        </header>
    )
}