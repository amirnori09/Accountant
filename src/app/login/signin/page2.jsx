"use client"
import react,{useState} from 'react'
import OtpInput from 'react-otp-input';


const Page = () => {
    

    return ( 
        <>
        
        <main className="container flex items-center justify-center my-52 ">
            <div className="py-16 px-8 shadow-lg rounded-lg">
                <div className="flex flex-col justify-center items-start w-72 mr-2 ml-12">
                    {/* <img src="" alt="" /> */}
                    <p className="text-xl font-black mb-8 te8">ورود به حساب کاربری</p>
                    <form action="" className="flex flex-col flex-grow">
                     
                        
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
        
        
        </>
     );
}

export default Page;