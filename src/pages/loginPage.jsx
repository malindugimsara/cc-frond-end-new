function LoginPage(){
    return(
        <div className='w-full bg-red-500 h-screen bg-[url(/loginbg.jpg)] bg-cover bg-center flex'>
            <div className='w-[50%] h-full'>
            </div>

            <div className='w-[50%] h-full flex justify-center items-center '>
                <div className="w-[450px] h-[600px] backdrop-blur-xl shadow-xl rounded-xl flex flex-col justify-center items-center">
                    <input className="w-[400px] h[50px] border border-white rounded-xl text-center m-[5px]" type="text" placeholder="email" />
                    <input className="w-[400px] h[50px] border border-white rounded-xl text-center m-[5px]" type="password" placeholder="password" />
                    <button className="w-[400px] h[50px] bg-green-500 text-white rounded-xl text-center m-[5px] cursor-pointer">Login</button>
                </div>
            </div>

            
        </div>
    )
} 
export default LoginPage;