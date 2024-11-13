"use client";

import { useState, useRef } from "react";

import { useScroll, motion, useTransform } from "framer-motion";
import Iconmaker from "./iconmaker";

const Point = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

   const scaleprogress = useTransform(scrollYProgress , [0 ,1] , [0.5 , 1])
   const opacityprogress = useTransform(scrollYProgress , [0 ,1] , [0.6 , 1])

  return (
    <section className=" w-full mb-[22rem]  flex justify-center items-center">
      <motion.div
      
        ref={ref}
        style={{ scale: scaleprogress, opacity: opacityprogress }}
        
        className="flex flex-col dark:bg-slate-400 bg-[#05081b]  py-20  rounded-[30px] shadow-xl shadow-[#94A3B8]  lg:flex-row-reverse w-full justify-center items-center max-w-[80rem]  "
      >
        <div
          dir="rtl"
          className=" w-full flex flex-col text-white  px-3 items-center gap-4 mb-10 justify-center relative"
        >
          <h2 className=" text-white text-center lg:text-start text-xl md:text-2xl xl:text-4xl  font-semibold">
            چرا ما میتونیم انتخاب مناسب باشیم{" "}
          </h2>
          <p className=" text-start  lg:w-[22rem] xl:w-[32rem] xl:text-xl ">
            ما با بهره گیری از بهترین ابزار ها ، به طراحی سایت بیزنسی شما
            میپردازیم
          </p>
        </div>

        <div className=" w-full flex justify-center px-10">
          <div className="  bg-slate-800 p-2 w-full rounded-xl border-2 border-black ">
            <div className=" w-full h-full  rounded-lg  shadow-inner   bg-[#D9D9D9]">
              <Iconmaker/>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Point;
