import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { GrGoogle } from "react-icons/gr";

function LoginPage(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const loginWithGoogle = useGoogleLogin(
        {
            onSuccess : (res) => {
                setLoading(true);
                axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/google", {
                    accessToken: res.access_token
                }).then((response) => {
                    console.log("Login successful!", response.data); 
                    toast.success("Login successful!");
                    localStorage.setItem("token", response.data.token);

                    const user = response.data.user;
                    if(user.role =="admin"){
                        navigate("/admin");
                    }
                    else {
                        navigate("/home");
                    }
                    
                }).catch((error) => {
                    console.error("Login failed:", error);
                    toast.error(error.response.data.message || "Login failed. Please try again.");
                
                } )
            }
        }
    )

    function handleLogin() {
        console.log("Email:", email);
        console.log("Password:", password);
        
         axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/login", {
            email: email,
            password: password
        }).then((response) => {
            toast.success("Login successful!");
            localStorage.setItem("token", response.data.token);

            const user = response.data.user;
            if(user.role =="admin"){
                navigate("/admin");
            }
            else {
                navigate("/home");
            }
               
        }).catch((error) => {
            console.error("Login failed:", error);
            toast.error(error.response.data.message || "Login failed. Please try again.");
           
        } )

    }

    return(
        <div className='w-full h-screen bg-white flex'>
            <div className='w-[50%] h-full bg-[url(/abc.png)] bg-cover bg-center'>
            </div>

            <div className='w-[50%] h-full flex justify-center items-center'>
                <div className="w-[450px] h-[600px] backdrop-blur-xl shadow-xl rounded-lg flex flex-col justify-center items-center bg-pink-200 hover:bg-pink-300 transition-colors duration-300">
                    <h1 className="text-4xl font-bold mb-8 text-gray-600">LOGIN</h1>
                    <input 
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[10px] focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300" 
                        type="text" 
                        placeholder="email" 
                    />
                    <input 
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[10px] focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300" 
                        type="password" 
                        placeholder="password" 
                    />
                    <button 
                        onClick={handleLogin} 
                        className="w-[400px] h-[50px] bg-gray-500 text-white rounded-xl text-center m-[5px] mt-[20px] cursor-pointer hover:bg-gray-600 active:bg-gray-700 transition-colors duration-300"
                    >
                        {
                            loading ? "Logging in..." : "Login"
                        }
                    </button>
                     <button 
                        onClick={() => loginWithGoogle()}
                        className="w-[400px] h-[50px] bg-green-500 text-white rounded-xl text-center m-[5px]  cursor-pointer hover:bg-green-600 active:bg-green-700 transition-colors duration-300"
                    >
                        <GrGoogle className="inline-block mr-2 mb-1" />
                        {
                            loading ? "Logging in..." : "Login with Google"
                        }
                    </button>
                    <button 
                        onClick={() => navigate("/register")} 
                        className="w-[400px] h-[50px] bg-blue-500 text-white rounded-xl text-center m-[5px] cursor-pointer hover:bg-blue-600 active:bg-blue-700 transition-colors duration-300"
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    )
} 
export default LoginPage;

//618154866633-8mkqpu1e137jbj8ims5rm7k50cdevsus.apps.googleusercontent.com