"use client";
import { Meteors } from "../components/ui/meteors";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";


export const users = [
  {
    name: "Manu Arora",
    designation: "Founder, Algochurn",
    image: "https://picsum.photos/id/10/300/300",
    badge: "Mentor",
  },
];

const HomePage = () => {
  const words = [
    {
      text: "Easy",
    },
    {
      text: "learn",
    },
    {
      text: "with",
    },
    {
      text: "Rexcode",
      className:
        "text-transparent  bg-clip-text bg-gradient-to-r from-[#7C68BB] to-[#3AAE86]",
    },
  ];

 

  return (
    <div className=" overflow-hidden relative w-full  pt-5">
      <Navbar/>
      <div className=" w-full relative   mt-[5rem] lg:mt-[17rem]">
       
        <div className='gradient-04 absolute w-full  h-[25vh] lg:top-[20%]'/>
        <div className="gradient-03 absolute w-full  h-[25vh]" />
        <div className="relative shadow-xl w-full  h-full    flex flex-col   justify-center  items-center">
          <div className="flex w-full flex-col lg:flex-row relative  items-center  justify-between z-40 ">
            <div className="flex flex-col items-center w-full justify-center        ">
              <motion.h2 whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ delay: 1.7, duration: 0.5 }} className=" text-sm md:hidden text-white">یادگیری آسان با رکس کد</motion.h2>
              <TypewriterEffectSmooth words={words} />
              <div className="flex flex-col md:flex-row relative z-50  lg:w-[30rem]  space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ delay: 3.7, duration: 0.5 }}
                  className=" w-[10rem] px-1 py-1  text-center relative z-50  rounded-full bg-gradient-to-r from-[#7C68BB] to-[#3AAE86] "
                >
                  <button className=" w-full h-full py-2 bg-black rounded-full text-white">
                    Essay / مقاله
                  </button>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ delay: 3.7, duration: 0.5, type: "tween" }}
                  className=" w-[10rem] px-1 py-1  text-center rounded-full bg-gradient-to-r from-[#7C68BB] to-[#3AAE86] "
                >
                <a href='/package'>
                <button className=" w-full  h-full py-2 bg-black rounded-full text-white">
                   Courses / دوره ها
                  </button>
                </a> 
                

                 
                </motion.div>
              </div>
            </div>

            <div className=" w-full       flex  justify-center">
              <div className=" w-[530px] xl:w-[600px] 2xl:w-[700px] hidden   h-[350px] xl:h-[350px] scale-[0.8] bg-[rgba(150,150,150,0.1)]   skew-x-[25deg]   rotate-[-30deg] transition-all   ease-out duration-150 relative   lg:flex lg:justify-center">
                <Image
                  className=" absolute translate-y-[-40px] translate-x-[40px]   opacity-40 transition-all ease-in duration-100 w-full "
                  src="/logo/layerlg.jpg"
                  alt="test"
                  fill
                  sizes="200px"
                />
                <Image
                  src="/logo/layerlg.jpg"
                  className=" absolute translate-y-[-80px] translate-x-[80px]  opacity-60 transition-all ease-in duration-100 w-full "
                  alt="test"
                  fill
                  sizes="200px"
                />
                <Image
                  src="/logo/layerlg.jpg"
                  className=" absolute translate-y-[-120px] translate-x-[120px]  opacity-80 transition-all ease-in duration-100 w-full "
                  alt="test"
                  fill
                  sizes="200px"
                />
                <Image
                  src="/logo/layerlg.jpg"
                  className=" absolute translate-y-[-160px] translate-x-[160px]  opacity-100 transition-all ease-in duration-100 w-full "
                  alt="test"
                  fill
                  sizes="200px"
                />
              </div>

              <div className=" w-[300px] mt-[7rem]  lg:hidden group  h-[520px] group scale-[0.8] bg-[rgba(150,150,150,0.1)]  skew-x-[25deg]  rotate-[-30deg] transition-all   ease-out duration-150 relative   flex justify-center">
                <Image
                  className=" absolute translate-y-[-40px] translate-x-[40px]  group-hover:translate-x-0  group-hover:translate-y-0  opacity-40 transition-all ease-in duration-100 w-full "
                  src="/logo/layer2.jpg"
                  alt="test"
                  fill
                  sizes="200px"
                />
                <Image
                  src="/logo/layer2.jpg"
                  className=" absolute translate-y-[-80px] translate-x-[80px] group-hover:translate-x-0  group-hover:translate-y-0   opacity-60 transition-all ease-in duration-100 w-full "
                  alt="test"
                  fill
                  sizes="200px"
                />
                <Image
                  src="/logo/layer2.jpg"
                  className=" absolute translate-y-[-120px] translate-x-[120px] group-hover:translate-x-0 group-hover:translate-y-0   opacity-80 transition-all ease-in duration-100 w-full "
                  alt="test"
                  fill
                  sizes="200px"
                />
                <Image
                  src="/logo/layer2.jpg"
                  className=" absolute translate-y-[-160px] translate-x-[160px] group-hover:translate-x-0 group-hover:translate-y-0  opacity-100 transition-all ease-in duration-100 w-full "
                  alt="test"
                  fill
                  sizes="200px"
                />
              </div>
            </div>

            
          </div>
          <div className=" -mt-[13em] relative z-20">
            <ContainerScroll users={users} titleComponent={<></>} />
          </div>
        </div>
      </div>

      <Meteors number={70} />
    </div>
  );
};

export default HomePage;
