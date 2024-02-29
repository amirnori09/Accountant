const Page = () => {
    return ( 
        <>
        
        <main className="container flex items-center justify-center my-52 ">
            <div className="py-16 px-8 shadow-lg rounded-lg">
                <div className="flex flex-col justify-center items-start w-72 mr-2 ml-12">
                    <img src="" alt="" />
                    <p className="text-xl font-black mb-8 te8">ورود به حساب کاربری</p>
                    <form action="" className="flex flex-col flex-grow">
                        <p className="text-gray-700 mb-5 text-lg">کدتایید</p>
                        {/* <input className="w-72 px-3 py-3.5 rounded-full bg-gray-50 focus:outline-none text-sm" type="text"/> */}
                        <div class="flex gap-4 max-w-lg mx-auto justify-center font-[sans-serif] bg-gray-100 pt-3 pb-3 px-8 rounded-full">
                            <input type="number" class="w-8 h-10 flex items-center text-center  text-gray-500 text-xl border-b-2 border-gray-300 focus:border-b-gray-400 outline-none bg-transparent " maxlength="1" />
                            <input type="number" class="w-8 h-10 flex items-center text-center  text-gray-500 text-xl border-b-2 border-gray-300 focus:border-b-gray-400 outline-none bg-transparent" maxlength="1" />
                            <input type="number" class="w-8 h-10 flex items-center text-center  text-gray-500 text-xl border-b-2 border-gray-300 focus:border-b-gray-400 outline-none bg-transparent" maxlength="1" />
                            <input type="number" class="w-8 h-10 flex items-center text-center  text-gray-500 text-xl border-b-2 border-gray-300 focus:border-b-gray-400 outline-none bg-transparent" maxlength="1" />
                            <input type="number" class="w-8 h-10 flex items-center text-center  text-gray-500 text-xl border-b-2 border-gray-300 focus:border-b-gray-400 outline-none bg-transparent" maxlength="1" />
                            <input type="number" class="w-8 h-10 flex items-center text-center  text-gray-500 text-xl border-b-2 border-gray-300 focus:border-b-gray-400 outline-none bg-transparent" maxlength="1" />
                        </div>
                        <a href="#" className="mt-3 text-blue-800 font-light text-md">ارسال مجدد کد</a>
                    </form>
                    <button className="bg-[#003928] text-white rounded-full py-3 w-[336px] mt-5">ورود</button>
                    <ul className="flex font-light mt-4 gap-1 text-sm">
                        <li>شماره شما 09338973928</li>
                        <li className="text-blue-800 "><a href="">ویرایش</a></li>
                        <li>شماره تلفن</li>
                    </ul>

                </div>
            </div>
        </main>
        <script>
            
        </script>
        </>
     );
}

export default Page;