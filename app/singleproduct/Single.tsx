"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

const Single = () => {
  return (
    <section>
      <div>
        <Navbar />
      </div>

      <div className=" relative flex justify-center items-center flex-col ">
        <div className=" w-full h-[20rem] absolute -top-[34rem] sm:-top-[36rem] bg-white  "></div>
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
            className=" absolute bottom-0 left-[36%] md:left-[34%]"
          >
            <Image
              className=" w-[10rem]  sm:w-[13rem] md:w-[20rem]"
              src="/vector/tariff.png"
              width={100}
              height={100}
              alt="tarff"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className=" flex  flex-col lg:flex-row w-full justify-center gap-x-20 mb-[45rem] items-center ">
        <div className=" mt-[40rem]">
          <div className=" w-[25rem]  pb-5 flex flex-col  bg-gradient-to-b from-[#494178] to-[#0000007a] border-2 border-[#492f6b]">
            <div className="  grid  gap-5 py-10 justify-items-center grid-cols-2 w-full ">
              <div className=" w-[10rem] h-[10rem] flex justify-center items-center rounded-lg  drop-shadow-xl flex-col gap-5 bg-white">
                <Image
                  src="/product/hour.svg"
                  alt="vector"
                  width={50}
                  height={30}
                />
                <h1 dir="rtl" className=" text-[22px] font-bold">
                  10 ساعت
                </h1>
              </div>
              <div className=" w-[10rem] h-[10rem] flex justify-center items-center rounded-lg  drop-shadow-xl flex-col gap-5 bg-white">
                <Image
                  src="/product/student.svg"
                  alt="vector"
                  width={50}
                  height={30}
                />
                <h1 dir="rtl" className=" text-[22px] font-bold">
                  65 دانشجو{" "}
                </h1>
              </div>
              <div className=" w-[10rem] h-[10rem] flex justify-center items-center rounded-lg  drop-shadow-xl flex-col gap-5 bg-white">
                <Image
                  src="/product/record.svg"
                  alt="vector"
                  width={50}
                  height={30}
                />
                <h1 dir="rtl" className=" text-[22px] font-bold">
                  بزودی{" "}
                </h1>
              </div>
              <div className=" w-[10rem] h-[10rem] flex justify-center items-center rounded-lg  drop-shadow-xl flex-col gap-5 bg-white">
                <Image
                  src="/product/classes.svg"
                  alt="vector"
                  width={50}
                  height={30}
                />
                <h1 dir="rtl" className=" text-[22px] font-bold">
                  45 جلسه{" "}
                </h1>
              </div>
            </div>

            <div className="  w-full px-7  mb-20 ">
              <div
                dir="rtl"
                className="w-full flex  justify-between px-5 h-[6rem] bg-white "
              >
                <div className=" flex items-center gap-x-2">
                  <Image
                    src="/vector/pouyanpic.webp"
                    className=" rounded-full"
                    alt="vector"
                    width={50}
                    height={30}
                  />
                  <div>
                    <h1 className=" text-purple-600">مدرس</h1>
                    <h2>پویان جهانشاهلو</h2>
                  </div>
                </div>

                <div className=" flex justify-center  items-center">
                  <h1 className="  text-center">
                    قراره کلی تو این دوره خوش بگذرونیم
                  </h1>
                </div>
              </div>
            </div>
            <div className=" w-full justify-center flex flex-col gap-10 items-center">
              <p className=" text-3xl  text-white"> تومان990,000</p>
              <div className=" w-[10rem] px-1 py-1  text-center rounded-full bg-gradient-to-r from-[#7C68BB] to-[#3AAE86] ">
                <button className=" w-full h-full py-2 bg-black rounded-full text-white">
                  ثبت نام
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col  justify-center items-center">
          <div className=" w-[25rem]  h-[10rem]">
            <Image
              src="/teampic/bankteach.png"
              className=" mb-10"
              width={1170}
              height={100}
              alt="test"
            />
            <div className=" w-[25rem] h-[50rem] flex flex-col  bg-gradient-to-b from-[#494178] to-[#0000007a] border-2 border-[#492f6b]">
              <h1>
                درگاه بانکی زیبال با ج
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Single;
