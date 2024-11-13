"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { PACKAGE } from "@/constants";
import Link from "next/link";

const Package = () => {
  
  return (
    <section className=" w-full overflow-hidden">
      <div className=" mt-5">
        <Navbar />
      </div>

      <div className=" relative flex justify-center items-center flex-col ">
        <div className=" w-full h-[20rem] absolute -top-[34rem] sm:-top-[36rem] bg-white  "></div>
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: -110 }}
          transition={{ duration: 2 }}
          className=" absolute -top-[27rem] md:-top-[38rem]  sm:-top-[33rem] w-[38rem] h-[38rem] md:w-[65rem] sm:w-[48rem] drop-shadow-lg shadow-purple-400 sm:h-[48rem]  md:h-[65rem] rounded-full overflow-hidden dark:shadow-shadowtop bg-[#1b1131]  dark:bg-white "
        >
          <motion.div
            animate={{ y: 0 }}
            initial={{ y: 380 }}
            transition={{ duration: 1.2 }}
            className=" absolute bottom-0 left-[36%] md:left-[32%]"
          >
            <Image
              className=" w-[11rem]  sm:w-[13rem] md:w-[25rem]"
              src="/vector/package.png"
              width={150}
              height={100}
              alt="tarff"
            />
          </motion.div>
        </motion.div>
      </div>

      <div dir="rtl" className=" mt-[20rem] lg:mt-[33rem] mb-[10rem]">
        <div  className="  grid grid-cols-1  lg:grid-cols-2  xl:grid-cols-3 justify-items-center  gap-y-20">
        {PACKAGE.map((i,index) => (
            
            <div key={index}>
              <div className=" bgcontent bg-cover relative w-[22rem] h-[27rem] flex justify-center items-end  pb-3 rounded-[20px] bg-white">
                <div className=" rounded-[10px] absolute -top-7 left-[50%] translate-x-[-50%] drop-shadow-xl shadow-black  w-[20rem] overflow-hidden h-[14rem] bg-black">
                  <div className=" w-full h-full relative">
                    <Image src={i.titlepic} fill alt="logo" />
                  </div>
                </div>

                <div className="rounded-[10px] w-[20rem] h-[12rem] p-3  flex items-center  gap-5 flex-col  bg-[rgba(0,0,0,0.3)]">
                  <h1 className=" text-white text-[24px]  text-center ">
                    {i.title}
                  </h1>

                  <div className=" flex flex-row-reverse items-center w-full justify-between text-white">
                    <div className="  flex items-center  relative flex-row-reverse gap-2 text-white">
                      <div className=" flex flex-col justify-center gap-y-2 items-center">
                      <div className="">
                        {i.namepic && (
                          <Image
                          src={i.namepic}
                          className=" rounded-full"
                          alt="pic"
                          width={40}
                          height={40}
                        />
                        )}
                        

                        {i.namepicc && (
                          <Image
                          src={i.namepicc}
                          className=" rounded-full"
                          alt="pic"
                          width={70}
                          height={40}
                        />
                        )}
                       
                      </div>
                      
                      </div>
                     
                      
                     
                      
                     
                      
                    </div>
                    <h1>وضعیت : {i.record}</h1>
                  </div>

                  <div className=" w-[10rem] px-1 py-1  text-center rounded-full bg-gradient-to-r from-[#7C68BB] to-[#3AAE86] ">
                    <Link href={i.url}>
                    <button
                      type="submit"
                      className=" w-full py-2 bg-black rounded-full text-white"
                    >
                      {i.botton}
                    </button>
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
        
        ))}
        </div>
      </div>
    </section>
  );
};

export default Package;
