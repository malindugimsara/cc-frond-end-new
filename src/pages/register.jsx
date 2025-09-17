import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        phoneNumber: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleRegister = () => {
        // Log the form data for debugging
        console.log("Registering:", formData);

        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/user", formData)
            .then((response) => {
                toast.success("Registration successful!");
                navigate("/login");
            })
            .catch((error) => {
                console.error("Registration failed:", error);
                toast.error(error.response?.data?.message || "Registration failed. Please try again.");
            });
    };

    return (
        <div className='w-full bg-blue-500 h-screen bg-[url(/loginbg.jpg)] bg-cover bg-center flex'>
            <div className='w-[50%] h-full'></div>

            <div className='w-[50%] h-full flex justify-center items-center'>
                <div className="w-[450px] h-auto backdrop-blur-xl shadow-xl rounded-lg p-6 flex flex-col justify-center items-center">
                    <input name="firstName" onChange={handleChange}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
                        type="text" placeholder="First Name" />

                    <input name="lastName" onChange={handleChange}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
                        type="text" placeholder="Last Name" />

                    <input name="email" onChange={handleChange}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
                        type="email" placeholder="Email" />

                    <input name="phoneNumber" onChange={handleChange}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
                        type="text" placeholder="Phone Number" />

                    <input name="password" onChange={handleChange}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
                        type="password" placeholder="Password" />

                    <button onClick={handleRegister}
                        className="w-[400px] h-[50px] bg-green-500 text-white rounded-xl text-center m-[5px] cursor-pointer">
                        Register
                    </button>

                    <button onClick={() => navigate("/login")}
                        className="w-[400px] h-[50px] bg-gray-500 text-white rounded-xl text-center m-[5px] cursor-pointer">
                        Back to Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
