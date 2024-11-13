'use client'
import React from 'react'
import {motion} from 'framer-motion'
import {  textContainer, textVariant2  } from '../utils/motion'

type textprop ={
    title : string,
    textStyle : string
}

export  const TypingText = ({title , textStyle} : textprop)=>{

    return(
        <motion.p  variants={textContainer}  className={` font-normal text-[14px] z-20 text-white ${textStyle} `}>
        {Array.from(title).map((letter , index)=>(
               
                    <motion.span key={index} variants={textVariant2}  >
                        {letter === '' ? '\u00A0' : letter}
                    </motion.span>
               
        ))}
    </motion.p>
    )
    
}


type titleprop ={
    title : any,
    textStyle : string
}


export const TitleText = ({title , textStyle} : titleprop)=>{
    return(
        <motion.h2 variants={textVariant2} initial='hidden' whileInView='show' className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyle}`}>
                {title}
        </motion.h2>
    )
}


