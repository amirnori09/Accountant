import React from 'react';
const Page = () => {
    return ( 
        <>
        <main className="container flex items-center justify-center font-sans my-52">
            <div className="flex flex-col justify-center items-start w-72">
                <img src="" alt="" />
                <p className="text-3xl font-black mb-8">خوش آمدید</p>
                <p className="text-xl mb-7 font-semibold">ورود به حساب کاربری</p>
                <form action="" className="flex flex-col flex-grow">
                    <p className="text-gray-700 mb-5 text-lg">شماره موبایل</p>
                    <input className="w-72 px-3 py-3 rounded-full bg-gray-50 focus:outline-none text-sm" type="text" placeholder="شماره تلفن خود را وارد کنید"/>
                </form>
                <button className="bg-[#003928] text-white rounded-full py-4 w-full mt-7">ورود</button>

            </div>
        </main>
        </>
     );
}
 
export default Page;