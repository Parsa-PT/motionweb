"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect , useState } from "react";
import { jwtDecode } from "jwt-decode";


const Cart = () => {
  const [info , setinfo] = useState<any | null>()
  const [infodecode, setdecode] = useState<any | {}>({});


  

  useEffect(() => {
    let test =  localStorage.getItem('cart')
    setinfo(test)

    const data = localStorage.getItem("token");
    const decode = data ? jwtDecode(data) : {};

    setdecode(decode);
  },[])

  const remove = ()=>{
    localStorage.removeItem('cart')
    location.reload();
  }

  const addOrder = async () => {
    await fetch("https://panel.rexcode.ir/add/order/", {
      method: "POST",
      body: JSON.stringify({
        title: "راه اندازی وبسایت فروشگاهی",
        payment: "zibal",
        price: 250000,
        user: infodecode.id[0],
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
          
        }
        
      })
      .then(async (data) => {
        const response = await fetch(`https://panel.rexcode.ir/${data._id}/pay`);
        const dataTop = await response.json();
        const result = JSON.parse(dataTop[0]);
        window.location.assign(
          `https://gateway.zibal.ir/start/${result.trackId}/`
        );
        localStorage.removeItem('cart')
      });


    
  };

  return (
    <section className=" overflow-hidden w-full">
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
              src="/vector/cartvector.png"
              width={150}
              height={100}
              alt="cart"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className=" w-full flex justify-center items-center mt-[20rem] md:mt-[30rem] mb-[20rem]">
        <div
          dir="rtl"
          className=" w-[23rem]  flex  items-center flex-col lg:flex-row-reverse sm:w-[36rem] lg:justify-between  gap-10 lg:w-[60rem] bg-gradient-to-r p-3 rounded-[14px] from-[#9c88db] to-[#3AAE86]"
        >
          <div className=" w-[20rem] h-[17rem] lg:w-[25rem] p-3   rounded-[10px] bg-black">
            <h1 className=" text-white text-[20px] mb-4">جزئیات صورتحساب</h1>
            <div className=" w-full flex flex-col gap-5">
              <div className=" relative  rounded-lg bg-gradient-to-r p-1 from-[#7C68BB] to-[#3AAE86]">
                <input
                  className=" px-1 w-full outline-none rounded-md  h-[34px] "
                  type="text"
                  value={infodecode.username}
                />
              </div>
              <div className=" relative  rounded-lg bg-gradient-to-r p-1 from-[#7C68BB] to-[#3AAE86]">
                <input
                  className=" px-1 w-full outline-none rounded-md  h-[34px] "
                  type="text"
                  value={infodecode.fullname}
                />
              </div>
              <div className=" relative  rounded-lg bg-gradient-to-r p-1 from-[#7C68BB] to-[#3AAE86]">
                <input
                  className=" px-1 w-full outline-none rounded-md  h-[34px] "
                  type="text"
                  value={infodecode.email}
                />
              </div>
        
            </div>
          </div>

          <div className=" w-[22rem]  p-3 lg:w-[27rem]  rounded-[10px] bg-black">
            <h1 className=" text-white text-[20px] mb-4">سفارش</h1>
            <div>
              <ol className=" flex flex-col lg:text-[20px] gap-5 mb-5 px-2">
                {info && (
                  <li className=" w-full text-white  ">
                  <div className=" w-full flex justify-between">
                    <p>راه اندازی وبسایت فروشگاهی</p>
                    <p>۲۵۰،۰۰۰ تومان</p>
                    <Image
                      src="/vector/remove.svg"
                      width={20}
                      height={20}
                      className=" cursor-pointer "
                      onClick={remove}
                      alt="remove"
                    />
                  </div>
                </li>
                )}
                
               
              </ol>
            
            {info && (
              <h1 className=" mb-4 text-[22px] text-white text-center">
                قیمت نهایی : ۲۵۰،۰۰۰ تومان
              </h1>
            )}
              

              <div className="  w-full h-[14rem] p-3 bg-[#F9F9F9]">
                <div className=" flex items-center mb-2">
                  <h1 className=" text-[20px]"> درگاه امن زیبال</h1>
                  <Image
                    src="/logo/zibal.png"
                    width={40}
                    height={40}
                    className=" w-[3rem]"
                    alt="zibal"
                  />
                </div>
                <div className=" w-full bg-slate-500 p-1 lg:text-[20px] text-white h-20">
                  پرداخت امن به وسیله کلیه کارت های عضو شتاب از طریق درگاه زیبال
                </div>

                <div className=" w-full flex justify-center mt-5">
                  <div className=" w-[10rem] px-1 py-1    text-center rounded-full bg-gradient-to-r from-[#7C68BB] to-[#3AAE86] ">
                    <button
                      onClick={addOrder}
                      type="submit"
                      // disabled={info != 'true'}
                      className=" w-full text-lg bg-black rounded-full text-white"
                    >
                      ثبت سفارش
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
