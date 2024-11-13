'use client'
import React from 'react'
import { OUR_TEAM } from '@/constants'
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from '@/components/Navbar';


const About = () => {
  return (
    <div className=" w-full overflow-hidden">
        <div className=' mt-5'>
            <Navbar/>
        </div>

        <div className=' w-full flex relative justify-center mb-20 mt-20'>
        <div  className='gradient-04 absolute w-full  h-[25vh] lg:top-[20%]'/>
                <div dir='rtl' className=' w-[22rem] p-2 h-[15rem] bg-[#00000043] rounded-xl border-2 border-[#8e83cc]  backdrop-blur-md'>
                    <h1 className=' mb-5  text-lg font-bold mr-5 mt-5 text-white'>
                        درباره ما
                    </h1>
                    <p className=' leading-7 text-white'>
                    تاسیس شده در سال ۲۰۲۳ با هدف طراحی انواع سایت های فروشگاهی ،
              بیزنسی ، وبلاگ و ... با بروزترین ابزار ها و همینطور آموزش های
              مرتبط با طراحی سایت
                    </p>
                </div>
        </div>

    <div className=' w-full flex  px-20 md:px-0 justify-center'>
    <div className=' relative w-[40rem] flex justify-end items-center'>
        <h1 className=" w-full  xl:text-3xl text-end  text-black dark:text-white">
                 اعضای تیم
            </h1>
            <motion.span
              whileInView={{ width: 10 }}
              transition={{ type: "tween", duration: 1.2 }}
              initial={{ width: 250 }}
              className=" absolute  h-[6rem]   -right-4 dark:bg-white bg-black rounded-full"
            />
        </div>
    </div>
       
        
      <div  className="flex flex-col md:flex-row justify-center items-center  mt-32 md:gap-[10rem] md:px-[7rem] ">
        
        {OUR_TEAM.map((item)=>(
          <div className=" flex items-center justify-center" key={item.id}>
              <div className=" w-[15rem] md:w-[15rem] relative mb-20">
          <motion.div whileHover={{scale:1.05}} transition={{duration:0.4}}>
            <Image src={item.pic} width={350} height={150} className=" w-full" alt="parsapic" />
          </motion.div>
          <div className=" h-[10rem]   border-2 pt-2 px-2 border-[#7B66BB]">
            <div className=" flex justify-between mb-3  md:mb-10">
              <h1 className=" text-transparent md:text-lg  bg-clip-text bg-gradient-to-r from-[#7C68BB] to-[#3AAE86] ">
                {item.name}
              </h1>
              <h1 className="text-black dark:text-white">CEO</h1>
            </div>

            

            <div>
              <p className=" text-right dark:text-white text-black lg:text-lg">
                 {item.desc}
              </p>
            </div>
            <motion.div whileHover={{rotate:360}} transition={{duration:0.2}} className=" w-[3rem] h-[3rem]   absolute -bottom-5 flex justify-center items-center  bg-gradient-to-r from-[#7C68BB] to-[#3AAE86]  rounded-full">
          
              <div className="w-[2.5rem] flex justify-center items-center h-[2.5rem]  rounded-full bg-black ">
                
                <Image src='/vector/verify.png' width={20} height={20} alt="arrow" />

               
              </div>
           
            </motion.div>
          </div>
        </div>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default About
