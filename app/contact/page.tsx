'use client'
import {useState} from 'react'
import Image from "next/image";
import Navbar from '@/components/Navbar';
import { UserTalk } from '@/data/request';



const Contact = () => {

  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [description , setDesc] = useState('')
  const [check , setCheck] = useState({})



  const Send = async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    if(name && email && description != ''){
     const result = await UserTalk({name , email , description})
     setCheck(result)
    }

    
   
     
}

  return (
    <div className=' w-full overflow-hidden'>
        <div  className=' mt-5'>
            <Navbar/>
        </div>
        <section className=" my-20 ">
      <div className=" w-full flex relative justify-center">
        <div className=" gradient-08 z-0" />
        <div className="  absolute top-[15rem] w-[50rem] opacity-10 "></div>
        {/* <div className=" hidden lg:block w-[15rem] 2xl:w-[20rem] h-[42rem] rounded-[10px]  lg:rounded-tr-none  overflow-hidden lg:rounded-br-none lg:rounded-tl-[10px] lg:rounded-bl-[10px]  bg-[#ffffff42]">
          <Image src='/vector/iphone16.png' alt="phone"  className=" absolute -left-10 -top-8 xl:left-[7rem]  2xl:left-[18rem] " width={700} height={600}/>
        </div> */}

        <div className="container  rounded-[10px] relative overflow-hidden ">
          <div className=" w-full flex justify-center absolute -top-[6rem] left-[50%]  translate-x-[-50%] ">
            <div className=" w-[11rem] shadow-shadowtop h-[11rem] rounded-full flex justify-center items-end  pb-7 bg-white">
              <div className=" text-[1.5rem]  flex flex-col  items-center text-black">
                <span>ارتباط با ما</span>
              </div>
            </div>
          </div>
          <form onSubmit={Send} className=" flex flex-col gap-10 mt-20 " action="">
          <div className="inputs">
            <input value={name} onChange={(e)=> setName(e.target.value)} dir="rtl" type="text" required />
            <label>نام</label>
          </div>
          <div className="inputs">
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="text" required />
            <label>ایمیل</label>
          </div>
          <div className="inputs">
            {/* <input dir="rtl" type="text"  className=" h-[5rem] " required/> */}
            <textarea value={description} onChange={(e)=> setDesc(e.target.value)} dir="rtl" name="" id="" required />
            <label>توضیحات</label>
          </div>

          <div className="login-btn">
            <button  type="submit">ارسال</button>
          </div>
        </form>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact
