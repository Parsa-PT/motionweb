"use client";
import {useState , useEffect } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { jwtDecode } from "jwt-decode";
import { AnimatePresence} from 'framer-motion'
const Profile = () => {

  

  const [show, setShow] = useState(false);
  const [packageData , setPackageData] = useState<any | {}>({});
  const [infodecode, setdecode] = useState<any | {}>({});
  const [showCopy, setShowcopy] = useState(false);
  const [info , setInfo] = useState<any | {}>({});
  



  useEffect(() => {
    
    const result = localStorage.getItem('payresult')
    setInfo(result)
    const data = localStorage.getItem("token");
    const decode = data ? jwtDecode(data) : {};

    setdecode(decode);


    

  }, []);

  const logout = () => {
    window.location.reload();
    window.location.assign("/");
    localStorage.removeItem("token");
    localStorage.removeItem("loggedIn");
  };


  const liesenseHandler = async()=>{
    
    const result = localStorage.getItem('payresult')
    if(result){
      await fetch('https://panel.rexcode.ir/addspot/',{
        method: 'POST',
        body: JSON.stringify({
          name:infodecode.username,
          course : '65ede5dbfd24b1297bba0d8d'
            }),
      headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
  
      })   
         .then((response) => {
            if (response.status === 200) {
              return response.json();
            }
          }).then((data)=>{
              setPackageData(data);;
          })
    }


    setTimeout(()=>{},1000);
    
   
  }


  

  return (
    <section className=" w-full overflow-hidden">
      <div className=" mt-5">
        <Navbar />
      </div>

      <div className=" relative flex justify-center items-center flex-col ">
      <div className=" gradient-08 z-0" />
        <div className=" w-full h-[30rem] absolute -top-[34rem] sm:-top-[36rem] bg-white  "></div>
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: -110 }}
          transition={{ duration: 2 }}
          className=" absolute -top-[27rem] md:-top-[38rem]  sm:-top-[33rem] w-[38rem] h-[38rem] md:w-[65rem] sm:w-[48rem]  sm:h-[48rem]  drop-shadow-lg shadow-purple-400  bg-[#1b1131] md:h-[65rem] rounded-full overflow-hidden dark:shadow-shadowtop     dark:bg-white"
        >
          <motion.div
            animate={{ y: 0 }}
            initial={{ y: 250 }}
            transition={{ duration: 1.2 }}
            className=" absolute bottom-0 left-[39%] md:left-[36%]  "
          >
            <Image
              className=" w-[8rem]  sm:w-[13rem] md:w-[18rem]"
              width={100}
              height={100}
              src="/vector/personalinfo.png"
              alt="info"
            />
          </motion.div>
        </motion.div>
      </div>

      <div
        dir="rtl"
        className=" w-full flex justify-center items-center mb-[20rem] mt-[17rem] md:mt-[32rem]"
      >
        <div className=" w-[23rem] sm:w-[26rem]   lg:w-[30rem] bg-gradient-to-r p-3 rounded-[14px] from-[#9c88db] to-[#3AAE86]">
          <div className=" w-full relative overflow-hidden py-3 bg-black px-[28px] rounded-[9px] h-full">
            <div className=" w-full flex justify-center flex-col items-center mb-10 gap-3 text-white mt-10">
              <Image
                src="/vector/profile.svg"
                className=" w-[6rem] "
                alt=""
                width={100}
                height={100}
              />
              <h1 className=" text-[30px]">{infodecode.username}</h1>
            </div>
            <div className=" w-full flex flex-col  gap-4 mb-5   text-white">
              <p className=" text-[16px]">ایمیل : {infodecode.email}</p>
           
            </div>

            <div className=" w-full flex flex-col justify-center  mb-5">
              <div onClick={()=> {liesenseHandler() ; setShow(!show) }} className=" w-full  bg-[#ffffff] flex   justify-between cursor-pointer group px-[11px] py-[3px]">
                <h1 className=" text-black">مشاهده لایسنس </h1>
                <Image
                  src="/vector/arrow.svg"
                  className=" group-hover:-rotate-90 transition-all ease-in-out duration-100 "
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </div>
              <AnimatePresence>
                  {show && (
                      <motion.div animate={{height:140}} initial={{height:0}} exit={{height:0}}  className={`w-full  drop-shadow-2xl shadow-purple-400  bg-[#ffffff]`}>
                        {info && (
                          <div className=' text-white  flex justify-between  px-5 pt-3'>
                              <motion.button  exit={{opacity:0}} onClick={()=> {navigator.clipboard.writeText(packageData.key)}} animate={{opacity:100}} className=' opacity-0 bg-blue-400 px-2 py-1 lg:px-7 rounded-md drop-shadow-lg'>
                                  <span className=" lg:text-xl">  راه اندازی وبسایت فروشگاهی</span>
                                  
                              </motion.button>
                              {showCopy == false && (
                                <motion.div exit={{opacity:0}} animate={{opacity:100}} >
                                   <Image src='/vector/copy.svg'  onClick={()=> {navigator.clipboard.writeText(packageData.key) ; setShowcopy(true) ;setTimeout(()=>{setShowcopy(false)},1000)}}  className=" cursor-pointer " alt="copy" width={30} height={20}/>

                                </motion.div>

                              )}
                              {showCopy && (
                              <Image src='/vector/copycheck.svg'  onClick={()=> {  }}  className=" cursor-pointer" alt="copy" width={35} height={20}/>

                              )}
                            </div>
                        )}
                            
                        </motion.div>
                    )}
                  </AnimatePresence>


                  <div dir="rtl" className=" text-white">
                    <h3></h3>
                  </div>
            </div>

            <div className=" w-full flex  gap-y-3 flex-col-reverse md:flex-row gap-x-4 justify-center">
              <button
                onClick={logout}
                className=" px-[30px] py-2 text-sm text-white bg-red-600"
              >
                خروج از حساب
              </button>
              {info && (
                <button
                onClick={logout}

                className=" px-[30px] py-2 text-sm text-white bg-blue-500"
              >
              <a href="https://spotplayer.ir/"> نحوه مشاهده دوره</a>
              </button>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
