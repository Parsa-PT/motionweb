"use client";
import React from "react";
import { useScroll, motion } from "framer-motion";
import { SERVICES } from "@/constants";

const Services = () => {
  return (
    <section className="  mb-20  relative  py-10 lg:py-20  lg:h-[50rem]   overflow-hidden  flex flex-col  justify-center items-center">
      <div className=" gradient-07 z-0" />
      <div className=" w-full flex  mb-16 justify-center items-center ">
            <h1 className=" w-[60%]  lg:w-[83%] xl:text-3xl text-end  text-black dark:text-white ">
             سرویس ما چه ویژگی هایی دارد
            </h1>
            <motion.span
              whileInView={{ width: 10 }}
              transition={{ type: "tween", duration: 1.2 }}
              initial={{ width: 355 }}
              className=" absolute  h-[6rem]  right-[5rem] z-10 bg-black dark:bg-white rounded-full"
            />
          </div>
    <div className=" w-full flex justify-center items-center">
    <div className=" w-full flex-col flex items-center justify-center mt-5 lg:flex-row gap-20">
          {SERVICES.map((i , index) => (
            <motion.div
              initial={{x: i.initial , opacity:0}}
               whileInView={{x:0 , rotate:0  ,opacity:1}}
               transition={{type:"spring" , duration: 1.8 }}
               whileHover={{scale:1.1}}
              key={index}
              className="w-[20rem] h-[25rem] p-3 flex flex-col justify-center rounded-xl bg-white bg-opacity-20 backdrop-blur-lg "
            >
              <div className=" w-full h-full justify-center flex">
                <div className=" w-full  p-2 rounded-xl bg-gradient-to-r from-[#7C68BB] to-[#3AAE86]">
                  <div className=" w-full h-full rounded-lg  relative overflow-hidden   bg-black">
                    <div className=" w-full flex justify-center absolute -top-[6rem] ">
                      <div className=" w-[11rem] shadow-shadowtop h-[11rem] rounded-full flex justify-center items-end  pb-7 bg-white">
                        <div className=" text-[1.5rem]  flex flex-col  items-center text-black">
                          <span>{i.title}</span>
                        </div>
                      </div>
                    </div>
                    <div className=" w-full flex justify-center items-center h-full mt-5 px-5">
                    <p dir="rtl" className=" leading-7 text-white">{i.desc}</p>

                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
    </div>
     

        
        
    
    </section>
  );
};

export default Services;
