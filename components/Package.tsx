"use client";
import { PACKAGE } from "@/constants";
import Image from "next/image";
import ButtonEffect from "./ui/ButtonEffect";
import { motion } from "framer-motion";
import Link from "next/link";

const Package = () => {
  return (
    <section>
      <div className=" w-full flex flex-col justify-center relative  py-36  items-center">
        <div className=" w-full flex flex-col gap-5 lg:flex-row-reverse  relative  items-center px-32  justify-center">
          <div className=" w-full flex justify-center items-center ">
            <h1 className=" w-[90%]  xl:text-3xl text-end text-black  dark:text-white">
              جدید ترین دوره ها
            </h1>
            <motion.span
              whileInView={{ width: 10 }}
              transition={{ type: "tween", duration: 1.2 }}
              initial={{ width: 250 }}
              className=" absolute  h-[6rem]  right-[5rem] z-10 bg-black  dark:bg-white rounded-full"
            />
          </div>

          <div className=" w-full hidden lg:block ">
            <ButtonEffect text="دیگر دوره ها" />
          </div>
        </div>
        <div className=" flex-col lg:flex-row flex   lg:pl-[35rem] xl:pl-[17rem] 2xl:pl-0 example overflow-auto w-full justify-center  py-36 gap-11 gap-y-20 lg:gap-y-0  items-center">
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

          <div className=" w-full flex justify-center lg:hidden ">
            <Link href='/package'>
            <ButtonEffect text="دیگر دوره ها" />

            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;
