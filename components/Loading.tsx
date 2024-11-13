'use client'
import {useEffect , useState} from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Loading = () => {
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
          setTimeout(()=>{
                  setLoading(false)
          },3000)
  },[loading])

  return (
    <>
    {loading === true ? (
      <div className="  h-[500vh] -mt-5 w-full bg-black  fixed z-50">
      <div className="   w-full flex  flex-col  relative justify-center items-center h-[100vh]">
       
        <video width="200" height="200"  muted playsInline className=" mb-4" autoPlay>
          <source src="/logo/rexcodegif.mp4" type="video/mp4"/>
        </video>
        <div className="text-center ">
          <h1 className=" text-[1rem] ml-2 lg:text-[1.4rem] text-transparent bg-clip-text bg-gradient-to-r from-[#7C68BB] to-[#3AAE86] ">
            web design team
          </h1>
        </div>
      </div>
    </div>
    ) :  <div className="  h-[0] w-0 transition-all duration-[500ms] ease-in bg-black opacity-0  fixed z-50">
    <div className="   w-full flex  flex-col  relative justify-center items-center h-[100vh]">
     
      <video width="220" height="240"  className="transition-all duration-75 ease-in opacity-0 mb-4" autoPlay>
        <source src="/logo/rexcodegif.mp4" type="video/mp4"/>
      </video>
      <div className="text-center">
        <h1 className=" text-[1rem] ml-2 lg:text-[1.4rem] opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-[#7C68BB] to-[#3AAE86] ">
          web design team
        </h1>
      </div>
    </div>
  </div>}
    
    </>
    
  );
};

export default Loading;
