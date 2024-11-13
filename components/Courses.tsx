'use client'
import {useState} from 'react'
import Navbar from './Navbar'
import {motion , AnimatePresence} from 'framer-motion'
import Image from 'next/image'


const Courses = () => {

  const [show , seTest] = useState(false)


  const formHandler = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

   const result = localStorage.getItem('loggedIn')

    if(result){
      window.location.assign('/cart')
      localStorage.setItem('cart', "true")
    }else{
      window.location.assign('/register/login')
    }
  }


  return (
    <div className=' overflow-hidden w-full '>
      <div className=' mt-5'>
        <Navbar/>
      </div>

      <div className=" relative flex justify-center items-center flex-col ">
        <div className=" w-full h-[20rem] absolute -top-[34rem] sm:-top-[36rem] bg-white  "></div>
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: -110 }}
          transition={{ duration: 2 }}
          className=" absolute -top-[27rem] md:-top-[38rem]  sm:-top-[33rem] w-[38rem] h-[38rem] md:w-[65rem] sm:w-[48rem]  sm:h-[48rem]  md:h-[65rem] rounded-full overflow-hidden shadow-shadowtop     dark:bg-white bg-[#1b1131]"
        >
          <motion.div
            animate={{ y: 0 }}
            initial={{ y: 250 }}
            transition={{ duration: 1.2 }}
            className=" absolute bottom-10 md:bottom-20 left-[36%] md:left-[34%]"
          >
            <Image
              className=" w-[10rem]  sm:w-[13rem] md:w-[20rem]"
              src="/vector/vectornd.svg"
              width={150}
              height={100}
              alt="tarff"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className=' mt-[20rem] md:mt-[30rem]'>
        <div className=' w-full  lg:flex  items-center  flex flex-col lg:items-start lg:flex-row-reverse gap-x-20 justify-center px-5'>
          <div className=' '>
          <div className=' w-full md:w-[40rem] lg:w-[30rem] xl:w-[50rem] 2xl:w-[60rem] mb-16 bg-[#7770CA]   items-center px-10 py-5 rounded-[10px] '>
                    <div className=' w-full flex justify-center'>
                      <Image src='/product/commerceweb.jpg' className=' rounded-md' alt='package'   width={400} height={200}/>
                    </div>
                   <div>
                    <h1 className=' text-center lg:text-end font-bold text-white  text-xl mt-5'>راه اندازی سایت فروشگاهی</h1>
                      <p dir='rtl' className=' text-center lg:text-start text-white mt-5'>قطعا ساخت یک وبسایت فروشگاهی چالش های بسیار زیادی داره. تو این دوره قصد داریم این چالش هارو باهم دیگه پیاده سازی کنیم</p>
                   </div>
              </div>



              <div className=' w-full md:w-[40rem] mb-16 lg:w-[30rem] xl:w-[50rem] 2xl:w-[60rem]  p-5 bg-gradient-to-b from-[#7770CA] to-[#7770ca0a] rounded-[10px] border-2 border-[#494178]'>
                <div>
                  <h2 dir='rtl' className=' mb-5 text-white font-bold text-[1.5rem]'>
                  توضیحات
                  </h2>
                  <p dir='rtl' className=' mb-2  leading-7 text-white'>
                  تو این دوره مباحث مهم و کلیدی طراحی وبسایت فروشگاهی بررسی خواهیم کرد و بخش های مهم یک وبسایت فروشگاهی رو مثل درگاه پرداخت ، ساخت order ، ساخت user ,...
                  </p>
                  <p dir='rtl' className=' text-white'>
                  این دوره نیاز داره که شما اشنایی ابتدایی با Next js , django داشته باشید
                  </p>
                </div>


                <div className=' w-full  mb-10 flex justify-center  items-center mt-10'> 
                  <div className=' w-[20rem] h-[10rem] relative'>
                    <Image src='/product/commerceweb.jpg' alt='test'  fill/>
                  </div>
                </div>

                
                {/* <div dir='rtl'>
                  <h3  className=' text-white font-bold text-[1.2rem]  mb-4'>سرفصل ها</h3>
                  <div>
                    <div onClick={()=>seTest(!show)} className={` flex items-center relative justify-between group px-3 w-[20rem] h-[2.5rem] cursor-pointer bg-[#3E3E3E] ${show ? ' rounded-b-none rounded-t-[10px]' : 'rounded-t-[10px] rounded-b-[10px] transition-all ease-in duration-[0.6s]'}    `}>
                       <p className=' text-white font-bold border-l-2 border-white pl-2 '>فصل اول</p>
                       <p className=' text-white '>
                        نصب و راه اندازی Next js 
                       </p>
                       <Image src='/vector/arrow.svg'  className='group-hover:-rotate-90 transition-all ease-in duration-75 ' alt='arrow' width={20} height={20}/>

             
                    </div>

                  <AnimatePresence>
                  {show && (
                      <motion.div animate={{height:140}} initial={{height:0}} exit={{height:0}}  className={`w-[20rem]    bg-[#3E3E3E]`}>
                            <ul className=' text-white list-decimal px-5 pt-3'>
                              <motion.li  exit={{opacity:0}} animate={{opacity:100}} className=' opacity-0'>نصب پروژه و اشنایی با مفاهیم</motion.li>
                            </ul>
                        </motion.div>
                    )}
                  </AnimatePresence>
                    

                    

                    
                  </div>
                </div> */}
              </div>
          </div>
             

          
          <div className=' w-full md:w-[40rem] lg:w-[30rem] h-[48rem] mb-16 bg-gradient-to-b from-[#7770CA] to-[#7770ca0a] rounded-[10px] border-2 border-[#494178]'>
                <div className=' grid grid-cols-2 mb-20 justify-items-center gap-x-5 gap-y-10 mt-5'>
                  <div className=' w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] bg-white flex flex-col items-center gap-4 justify-center drop-shadow-lg rounded-[5px]'>
                      <Image src='/vector/student.svg' width={50} height={20} alt='vector'/>
                      <h4 dir='rtl' className=' text-black font-bold text-xl'>2 دانشجو</h4>
                  </div>
                  <div className=' w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] bg-white flex flex-col items-center gap-4 justify-center drop-shadow-lg rounded-[5px]'>
                  <Image src='/vector/time.svg' width={50} height={20} alt='vector'/>
                      <h4 dir='rtl' className=' text-black font-bold text-xl'>7 ساعت</h4>
                  </div>
                  <div className=' w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] bg-white flex flex-col items-center gap-4 justify-center drop-shadow-lg rounded-[5px]'>
                  <Image src='/vector/class.svg' width={50} height={20} alt='vector'/>
                      <h4 dir='rtl' className=' text-black font-bold text-xl'>1 جلسه</h4>
                  </div>
                  <div className=' w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] bg-white flex flex-col items-center gap-4 justify-center drop-shadow-lg rounded-[5px]'>
                  <Image src='/vector/record.svg' width={50} height={20} alt='vector'/>
                      <h4 dir='rtl' className=' text-black font-bold text-xl'>درحال ظبط</h4>
                  </div>
                </div>

                <div className=' mb-10 px-6'>
                  <div className=' w-full bg-white drop-shadow-lg flex flex-col gap-y-6 md:flex-row-reverse  justify-center items-center rounded-[5px] h-[8rem]'>
                      <div className=' flex flex-row-reverse gap-2 px-3'>
                        
                      <Image src='/vector/teamwork.svg' width={66} sizes='400px' height={20} alt='vector'/>
                      <div dir='rtl'>
                        <h1 className=' text-purple-500 font-bold'>مدرس</h1>
                        <p className=' text-black text-[1rem]'>پارسا شمس ، پویان جهانشاهلو</p>
                      </div>
                      </div>

                      <div>
                          <p className=' text-center text-black text-sm font-bold'>کلی چیز های جدید در کنار هم یاد میگیریم</p>
                      </div>
                  </div>
                </div>


                <div>
                  <h2 dir='rtl' className=' mb-10 text-black dark:text-white font-bold  text-center text-[2rem]'>۲۵۰،۰۰۰ تومان</h2>
                </div>

               <form  onSubmit={formHandler}>
               <div className=' w-full  flex items-center justify-center'>
                  <div className=" w-[10rem] px-1 py-1   text-center rounded-full bg-gradient-to-r from-[#7C68BB] to-[#3AAE86] ">
                    <button  type='submit' className=" w-full text-lg bg-black rounded-full text-white">
                      ثبت نام
                    </button>
                  </div>
                </div>
                </form>     
                
              </div>
   
              


              
        </div>
       
      </div>
    </div>
  )
}

export default Courses
