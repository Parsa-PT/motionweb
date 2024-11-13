"use client";
import React from "react";
import Image from "next/image";

const Iconmaker = () => {
  return (
    <div className=" flex justify-center flex-wrap p-3 gap-4">
      <div className=" w-[5rem] h-[5rem] bg-black rounded-md  group flex justify-center items-center">
        <div
          className={` w-[4rem]  h-[4rem] flex  justify-center items-center hover:shadow-red-500 transition-all ease-in duration-75  shadow-md  relative rounded-md`}
        >
          <Image src="/icon/html.svg" alt="icon" fill sizes="200px"/>
        </div>
      </div>

      <div className=" w-[5rem] h-[5rem] bg-black  flex justify-center items-center">
        <div
          className={` w-[4rem]  h-[4rem] flex justify-center items-center hover:shadow-blue-500 transition-all ease-in duration-75 shadow-md  relative bg-black rounded-md`}
        >
          <Image src="/icon/css.svg" alt="icon" fill sizes="200px"/>
        </div>
      </div>

      <div className=" w-[5rem] h-[5rem] bg-black  flex justify-center items-center">
        <div
          className={` w-[4rem]  h-[4rem] flex justify-center items-center hover:shadow-yellow-500 transition-all ease-in duration-75 shadow-md  relative bg-black rounded-md`}
        >
          <Image src="/icon/js.svg" alt="icon" fill sizes="200px"/>
        </div>
      </div>

      <div className=" w-[5rem] h-[5rem] bg-black  flex justify-center items-center">
        <div
          className={` w-[4rem]  h-[4rem] flex justify-center items-center hover:shadow-blue-300 transition-all ease-in duration-75 shadow-md  relative bg-black rounded-md`}
        >
          <Image src="/icon/type.svg" alt="icon" fill sizes="200px"/>
        </div>
      </div>

      <div className=" w-[5rem] h-[5rem] bg-black  flex justify-center items-center">
        <div
          className={` w-[4rem]  h-[4rem] flex justify-center items-center hover:shadow-[#44A8B3] transition-all ease-in duration-75 shadow-md  relative bg-black rounded-md`}
        >
          <Image src="/icon/tail.svg" alt="icon" fill sizes="200px"/>
        </div>
      </div>

      <div className=" w-[5rem] h-[5rem] bg-black  flex justify-center items-center">
        <div
          className={` w-[4rem]  h-[4rem] flex justify-center items-center hover:shadow-blue-500 transition-all ease-in duration-75 shadow-md  relative bg-black rounded-md`}
        >
          <Image src="/icon/uil_react.svg" alt="icon" fill sizes="200px"/>
        </div>
      </div>

      <div className=" w-[5rem] h-[5rem] bg-black  flex justify-center items-center">
        <div
          className={` w-[4rem]  h-[4rem] flex justify-center items-center hover:shadow-white transition-all ease-in duration-75 shadow-md  relative bg-black rounded-md`}
        >
          <Image src="/icon/nextjs.svg" alt="icon" fill sizes="200px" />
        </div>
      </div>

      <div className=" w-[5rem] h-[5rem] bg-black  flex justify-center items-center">
        <div
          className={` w-[4rem]  h-[4rem] flex justify-center items-center hover:shadow-yellow-500 transition-all ease-in duration-75 shadow-md  relative bg-black rounded-md`}
        >
          <Image src="/icon/python.svg" alt="icon" fill sizes="200px"/>
        </div>
      </div>

      <div className=" w-[5rem] h-[5rem] bg-black  flex justify-center items-center">
        <div
          className={` w-[4rem]  h-[4rem] flex justify-center items-center hover:shadow-green-800 transition-all ease-in duration-75 shadow-md  relative bg-black rounded-md`}
        >
          <Image src="/icon/django.svg" alt="icon" fill sizes="200px"/>
        </div>
      </div>

      <div className=" w-[5rem] h-[5rem] bg-black  flex justify-center items-center">
        <div
          className={` w-[4rem]  h-[4rem] flex justify-center items-center hover:shadow-blue-700 transition-all ease-in duration-75 shadow-md  relative bg-black rounded-md`}
        >
          <Image src="/icon/post.svg" alt="icon" fill sizes="200px"/>
        </div>
      </div>
    </div>
  );
};

export default Iconmaker;
