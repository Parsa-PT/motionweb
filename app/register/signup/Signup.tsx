"use client";
import { useState } from "react";
import Link from "next/link";
import { CreateNewUser } from "@/data/request";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [Phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPass1] = useState("");
  const [password2, setPass2] = useState("");
  const [type, setType] = useState("password");
  const [typeRepeat, setTypeRepeat] = useState("password");

  const HandleShowPassword = () => {

    if(type === "password") {
      setType('text');
    }else{
      setType('password');
    }

  };

  const HandleShowPasswordRepeate = () => {

    if(typeRepeat === "password") {
      setTypeRepeat('text');
    }else{
      setTypeRepeat('password');
    }

  };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();


      CreateNewUser( { fullname, username, email, password1, password2 , Phone });
    };

  return (
    <div className="bgcontent w-full  justify-center flex flex-col  py-20  items-center ">
      <div className=" w-[23rem]  sm:w-[26rem]   lg:w-[30rem] bg-gradient-to-r p-3 rounded-[14px] from-[#9c88db] to-[#3AAE86]">
        <div className=" w-full relative overflow-hidden bg-black rounded-[9px] h-full">
          <div className=" flex justify-center  flex-col gap-7 items-center w-full">
            <div className=" w-full flex justify-center absolute -top-[6rem] ">
              <div className=" w-[13rem] shadow-shadowtop h-[13rem] rounded-full flex justify-center items-end  pb-6 bg-white">
                <div className=" text-[1.5rem]  flex flex-col  items-center text-black">
                  <span>ساخت حساب</span>
                  <span>signup</span>
                </div>
              </div>
            </div>

            <form
              dir="rtl"
              onSubmit={handleSubmit}
              className="  flex-col gap-16 w-full flex justify-center items-center mt-[10rem]"
            >
              <div className=" relative  rounded-lg bg-gradient-to-r p-1 from-[#7C68BB] to-[#3AAE86]">
                <label
                  className=" absolute -top-6 text-white"
                  htmlFor="fullname"
                >
                  نام و نام خانوادگی
                </label>
                <label
                  className=" absolute -top-6 left-0 text-white"
                  htmlFor="fullname"
                >
                  Full name
                </label>
                <input
                  className=" px-1 outline-none rounded-md w-[301px] h-[34px] lg:w-[350px]"
                  type="text"
                  name=""
                  onChange={(e) => setFullname(e.target.value)}
                  id="fullname"
                />
              </div>
              <div className=" relative  rounded-lg bg-gradient-to-r p-1 from-[#7C68BB] to-[#3AAE86]">
                <label
                  className=" absolute -top-6 text-white"
                  htmlFor="username"
                >
                  نام کاربری
                </label>
                <label
                  className=" absolute -top-6 left-0 text-white"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className=" px-1 outline-none rounded-md w-[301px] h-[34px] lg:w-[350px]"
                  type="text"
                  name=""
                  onChange={(e) => setUsername(e.target.value)}
                  id="username"
                />
              </div>
              <div className=" relative  rounded-lg bg-gradient-to-r p-1 from-[#7C68BB] to-[#3AAE86]">
                <label className=" absolute -top-6 text-white" htmlFor="email">
                  ایمیل
                </label>
                <label
                  className=" absolute -top-6 left-0 text-white"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className=" px-1 outline-none rounded-md w-[301px] h-[34px] lg:w-[350px]"
                  type="email"
                  name=""
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                />
              </div>
              <div className=" relative  rounded-lg bg-gradient-to-r p-1 from-[#7C68BB] to-[#3AAE86]">
                <label className=" absolute -top-6 text-white" htmlFor="email">
                  تلفن
                </label>
                <label
                  className=" absolute -top-6 left-0 text-white"
                  htmlFor="email"
                >
                  Phone
                </label>
                <input
                  className=" px-1 outline-none rounded-md w-[301px] h-[34px] lg:w-[350px]"
                  type="number"
                  name=""
                  onChange={(e) => setPhone(e.target.value)}
                  id="email"
                />
              </div>
              <div className=" relative  rounded-lg bg-gradient-to-r p-1 from-[#7C68BB] to-[#3AAE86]">
                <label className=" absolute -top-6 text-white" htmlFor="pass1">
                  رمز
                </label>
                <label
                  className=" absolute -top-6 left-0 text-white"
                  htmlFor="pass1"
                >
                  Password
                </label>
                <input
                  className=" px-1 outline-none rounded-md w-[301px] h-[34px] lg:w-[350px]"
                  type="password"
                  name=""
                  id="pass1"
                  onChange={(e) => setPass1(e.target.value)}
                />
              </div>
              <div className=" relative  rounded-lg bg-gradient-to-r p-1 from-[#7C68BB] to-[#3AAE86]">
                <label className=" absolute -top-6 text-white" htmlFor="pass2">
                  تکرار رمز
                </label>
                <label
                  className=" absolute -top-6 left-0 text-white"
                  htmlFor="pass2"
                >
                  Repeat password
                </label>
                <input
                  className=" px-1 outline-none rounded-md w-[301px] h-[34px] lg:w-[350px]"
                  type="password"
                  name=""
                  id="pass2"
                  onChange={(e) => setPass2(e.target.value)}
                />
              </div>

              <div className=" w-[10rem] px-1 py-1   text-center rounded-full bg-gradient-to-r from-[#7C68BB] to-[#3AAE86] ">
                <button type="submit" className=" w-full text-lg bg-black rounded-full text-white">
                  ثبت نام
                </button>
              </div>
            </form>

            <div className=" text-white text-lg text-center">
              <h1>
                <Link className=" hover:text-blue-300" href="/register/login">
                  حساب کاربری دارم
                </Link>
              </h1>
              <h1>
                <Link className="  underline hover:text-blue-300" href="/">
                  بازگشت
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
