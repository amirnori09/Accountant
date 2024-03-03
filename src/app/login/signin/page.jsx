"use client"
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

function page() {
    const [otp, setOtp] = useState('');
  
    return (
        <div className='h-screen sm:w-full w-[360px] sm:flex sm:justify-center sm:items-center'>
            <main className="container sm:flex items-center justify-center sm:my-52 my-32 ">
                <div className="py-16 px-5 shadow-lg rounded-lg flex justify-center items-center">
                    <div className="flex flex-col justify-center w-72 ml-12">
                        {/* <img src="" alt="" /> */}
                        <p className="text-xl font-black mb-8 te8">ورود به حساب کاربری</p>
                        <form action="" className="flex flex-col flex-grow">
                        
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderSeparator={<span> </span>}
                                renderInput={(props) => <input {...props} />}
                                containerStyle={{
                                    width: "336px",
                                    direction:"ltr",
                                    background: "#f5f5f5",
                                    padding : "10px 30px",
                                    borderRadius : "150px",
                                    display : "flex",
                                    justifyItems: "center",
                                    justifyContent : "space-around"
                                }}
                                inputStyle={{
                                    borderBottom:"3px solid #ccc",
                                    width:"20px",
                                    margin:2,
                                    outline:"none",
                                    width: "33px",
                                    height : "35px",
                                    fontSize : "29px",
                                    background : "transparent",
                                    borderBottom : "2px solid #ccc",
                                    justifyContent : "center",
                                    color : "#6b6b6b"
                                }}
                    
                            />
                            <a href="#" className="mt-3 text-blue-800 font-light text-md">ارسال مجدد کد</a>
                        </form>
                        <button className="bg-[#003928] text-white rounded-full py-4 w-[336px] mt-5">ورود</button>
                        <ul className="flex font-light mt-4 gap-1 text-sm">
                            <li>شماره شما 09338973928</li>
                            <li className="text-blue-800 "><a href="">ویرایش</a></li>
                            <li>شماره تلفن</li>
                        </ul>
                    </div>
                </div>
            </main>
            
        </div>
      
    );
  }
  export default page;