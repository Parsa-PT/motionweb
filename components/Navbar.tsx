"use client";

import Image from "next/image";
import { motion ,AnimatePresence } from "framer-motion";
import { useState , useEffect } from "react";
import { LINKSNAV } from "@/constants";
import ThemeButton from "./theme-button/Theme-button";


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [LoginCheck , setLoginCheck] = useState()
  const [showlogin, setShowLogin] = useState<any | null>(null);

  // useEffect(() => {
  //   const login = localStorage.getItem("loggedIn");


  //   setShowLogin(login);
  // }, []);



  return (
    <div className=" flex justify-center   flex-col ">
      <motion.div className={` w-full lg:w-[60rem] lg:translate-x-[-50%] lg:left-[50%] h-[4rem] p-2 relative z-10 ${nav ? ' rounded-t-[1.9rem]' : ' duration-[2.5s] rounded-t-[1.9rem] rounded-b-[1.9rem] '}  bg-gradient-to-r from-[#7C68BB] to-[#3AAE86]`}>
        <div className=" w-full h-full relative  md:pr-5 z-30 bg-white flex justify-between   items-center rounded-full">
         
        
          <div className=" w-[9rem] h-[7rem] relative cursor-pointer">
            <Image onClick={()=> window.location.assign('/')} fill sizes="100"  src='/logo/rexcode_logo.webp' alt="logo" />
          </div>

          <div className=" flex  items-center">

          <div
            onClick={() => setNav(!nav)}

            className=" flex cursor-pointer mr-5 flex-col justify-center items-center "
          >
            <motion.span animate={{rotate: nav?-50:0 , y:nav?10:0 }} className=" w-[1.6rem] sm:w-[2rem] h-[0.20rem]  sm:h-1 rounded-md mb-2 bg-green-500"></motion.span>
            <motion.span animate={{opacity: nav? 0 : 100}} className=" w-[1.3rem] sm:w-[1.6rem]  h-[0.14rem]  sm:h-1  rounded-md mb-2 bg-green-500"></motion.span>
            <motion.span animate={{rotate: nav?50:0 , y:nav?-10:0 }} className=" w-[1.6rem] sm:w-[2rem] h-[0.20rem]  sm:h-1  rounded-md bg-green-500"></motion.span>
            
          </div>

          
         
        {/* <ThemeButton/> */}
          </div>
          
          
        </div>

      {nav ? <>

        <div onClick={()=> setNav(!nav)} className=" w-full h-screen ">

        </div>
      
      </> : null}
      

       
      </motion.div>
      <AnimatePresence>
      {nav ? (
          <>

       <motion.div animate={{height:280}} exit={{height:0}} initial={{height:0}}  className={ `w-full overflow-hidden  absolute top-20 lg:top-[5rem] z-50 lg:translate-x-[-50%] lg:left-[50%] lg:w-[60rem]  flex justify-center flex-col items-center   bg-gradient-to-r from-[#7C68BB] to-[#3AAE86] rounded-bl-md rounded-br-md`}>

          <ul>
            {LINKSNAV.map((item)=>(
              <div key={item.id} >
              <motion.li animate={{opacity:100 }} transition={{duration:1.6}}  className=" text-xl cursor-pointer text-center   opacity-0  text-white">
              <a href={item.url} >
                             {item.name}
                </a>
              </motion.li>
              <motion.hr animate={{opacity:100}} transition={{duration:1.2}} className={ `h-1  opacity-0 border-none my-1 bg-white w-[10rem] rounded-lg`}/>
              </div>
            ))}
            
              <motion.li className=" text-xl cursor-pointer text-center   opacity-0  text-white" animate={{opacity:100 }} transition={{duration:1.6}} >
              {showlogin ?(
                  <a href="/profile">
                  حساب کاربری
                </a>
                ) : 
                <a href="/register/login">
                  حساب کاربری
                </a>}
              </motion.li>
          </ul>

       </motion.div>
          </>
        ) : null}

</AnimatePresence> 
    </div>
    
  );
};

export default Navbar;
