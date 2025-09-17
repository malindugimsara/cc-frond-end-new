import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="w-full h-[75px] bg-blue-500 flex justify-center items-center">
            <div className="w-[500px] h-full flex justify-evenly text-pink-400 text-xl items-center">
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/contact'>Contact Us</Link>
                <Link to ='/reviews'>Reviews</Link>
            </div>
        </header>
    )
}