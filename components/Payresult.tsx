"use client";
import {useEffect} from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Payresult = ({id} : any) => {



  useEffect(() =>{
    if(id == 1){
      localStorage.setItem("payresult", 'true')
    }
  },[])

  return (
    <div className=" overflow-hidden w-full">
      <div>
        <Navbar />
      </div>

      <div className=" relative flex justify-center items-center flex-col ">
        <div className=" gradient-08 z-0" />
        <div className=" w-full h-[30rem] absolute -top-[34rem] sm:-top-[36rem] bg-white  "></div>
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: -110 }}
          transition={{ duration: 2 }}
          className=" absolute -top-[27rem] md:-top-[38rem]  sm:-top-[33rem] w-[38rem] h-[38rem] md:w-[65rem] sm:w-[48rem]  sm:h-[48rem]  md:h-[65rem] rounded-full overflow-hidden shadow-shadowtop  bg-white "
        >
          <motion.div
            animate={{ y: 0 }}
            initial={{ y: 250 }}
            transition={{ duration: 1.2 }}
            className=" absolute bottom-0 left-[30%] md:left-[23%]  "
          >
            <Image

            
              className=" w-[14rem]  sm:w-[19rem] md:w-[32rem]"
              width={160}
              height={160}
              src={id == 0 ? "/vector/payresultfaild.svg" : "/vector/payresultsucc.svg"}
              alt="info"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className=" w-full flex justify-center mb-20">
        <div className=" mt-[16rem] md:mt-[30rem] w-[23rem] sm:w-[26rem]  lg:w-[30rem] bg-gradient-to-r p-3 rounded-[14px] from-[#9c88db] to-[#3AAE86]">
          <div className=" w-full relative overflow-hidden p-2 bg-black px-[28px] rounded-[9px] h-full">
            <p className=" text-white text-center mb-4 text-xl font-extrabold">
              {id == 1 ? ' از خرید شما سپاس گزاریم' : ' خرید شما با خطا روبه رو شد'}
              {" "}
             {" "}
            </p>
            <p className=" text-white text-center mb-4 font-extrabold">
              {id == 1 ? ' برای مشاهده لایسنس دوره به حساب کاربری بروید' : 'در صورت برداشت پول از حساب شما طی ۷۲ ساعت واریز خواهد شد'}
             
            </p>
            <div className=" w-full  flex items-center justify-center">
              <Link href="/profile">
                <div className=" w-[10rem] px-1 py-1   text-center rounded-full bg-gradient-to-r from-[#7C68BB] to-[#3AAE86] ">
                  <button
                    type="submit"
                    className=" w-full text-lg bg-black rounded-full text-white"
                  >
                    حساب کاربری
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payresult;
