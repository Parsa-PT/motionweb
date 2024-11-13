import { LINKSNAV, SOCIAL } from "../constants/index";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="  relative  flex justify-center  bg-black flex-col items-center">
      <div className=" w-[50%] h-1 rounded-full   bg-white  mt-6 mb-10 relative" />
      <div className=" w-full flex  flex-col  bg-black justify-between pt-4 px-2 opacity-80  ">
        <div className=" w-full flex-col md:flex-row-reverse flex">
          <div dir="rtl" className="  w-full mb-5 ">
            <div className=" w-full flex justify-end ">
              <a
                referrerPolicy="origin"
                target="_black"
                href="https://trustseal.enamad.ir/?id=463595&Code=QrQDP4oI3tibaaei4f9QjJljVFVHeIS0"
              >
                <Image
                  className=" w-[5rem] cursor-pointer"
                  referrerPolicy="origin"
                  width={50}
                  height={20}
                  id="QrQDP4oI3tibaaei4f9QjJljVFVHeIS0"
                  src="/logo/enamd.png"
                  alt="enamad"
                />
              </a>
            </div>

            <p className="text-white md:text-xl ">
              تاسیس شده در سال ۲۰۲۳ با هدف طراحی انواع سایت های فروشگاهی ،
              بیزنسی ، وبلاگ و ... با بروزترین ابزار ها و همینطور آموزش های
              مرتبط با طراحی سایت
            </p>
          </div>

          <div className=" w-full mb-5">
            <h1 className=" text-center">دسترسی ها</h1>
            <ul
              
              className="flex px-10 md:text-lg text-white flex-col justify-start items-end"
            >
              {LINKSNAV.map((item, index) => (
                <div key={index}>
                  <Link  href={item.url} className="w-full">
                    <li className=" mb-2 hover:text-blue-700 cursor-pointer border-b-2 w-full border-white">
                      {item.name}
                    </li>
                  </Link>
                </div>
              ))}
            </ul>
          </div>
          <div className=" w-full flex flex-col  justify-center items-center">
            <h1 className=" text-center  text-white mb-4">راه ارتباطی</h1>
            <div className="  mb-10  text-base md:text-lg">
              {SOCIAL.map((item, index) => (
                <div key={index}>
                  <span className=" flex">
                    <Image
                      className=" mr-1"
                      src={item.icon}
                      width={20}
                      height={20}
                      alt="logo"
                    />
                    <h1 className=" text-white mt-1">{item.title}</h1>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-300  text-center md:text-end m-2  ">
          تمامی حقوق این سایت متعلق به رکس کد میباشد
        </p>
      </div>
    </footer>
  );
};

export default Footer;
