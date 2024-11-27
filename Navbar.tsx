import Link from "next/link";
import React from "react";
import Image from "next/image";
const Navbar = () => {

  return (
    
      
    <div className="w-[1440px] h-[38px] bg-black ">
       <button className=" w-[400px] h-[19] mx-[590px] mt-2 text-white hover:text-red-700">Sign Up Now</button>
          <h1 className="w-[400px] h-[19]  ml-[415px] px-6 -m-5 font-normal  leading-[18.9px] text-white">Sign up and get 20% off to your first order.
          </h1>
          <div className="mx-auto ml-28 flex items-center justify-between">
          <div className="w-full h-9 m-7 -ml-28 items-center bg-white border-b border-gray-200 p-4 flex">

        <div className="text-2xl font-extrabold text-gray-800 ml-[100px] flex">
          <h1>SHOP.CO</h1>
          <div className="w-[221px] h-[22px] ml-[40px] p-[12px] mx-2 ">
          <Image 
              src="/Frame 2.png"
              alt="Frame2"
              height={22}
              width={321}>
                
          </Image>
          </div>
          <div className="w-10 h-10 absolute ml-[1030px] p-3">
            <Image 
            src={"/Frame (4).png"}
            alt="Frame4"
            height={12}
            width={12}>            
          </Image>
          </div>
          <button className="w-10 h-10 absolute ml-[1030px] p-3 hover:text-red-400">
            <Image 
            src={"/Frame (4).png"}
            alt="Frame4"
            height={12}
            width={12}
            className="hover:bg-blue-300 transition">            
          </Image>
          </button>
          <button className="w-10 h-10 absolute ml-[1050px] p-3">
            <Image 
            src={"/Frame (5).png"}
            alt="Frame4"
            height={12}
            width={12}
            className="hover:bg-blue-300 transition"
            
            >            
          </Image>
          </button>


          <div className="w-[577px] h-6 ml-[60px] font-normal flex items-center border border-gray-300 rounded-3xl m-2 overflow-hidden gap-3">
          <img src="/Frame (3).png" alt="Search" className="h-5 w-5  pl-1 ml-13" />
          <input type="text"placeholder="Search for products..."className=" spx-4 py-2 w-96 focus:outline-none"        />
          <button className="px-4 bg-gray-100 hover:bg-gray-200">
            
          </button>
        </div>

          
              </div>
          
          </div>  
      
      </div>
    </div>
    
        
    
  );
 }
 export default Navbar;