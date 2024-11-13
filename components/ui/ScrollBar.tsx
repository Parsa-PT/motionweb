'use client'
import {useRef} from 'react'
import {motion , useScroll} from 'framer-motion'

const ScrollBar = () => {

//   const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll();

    

  return (
    <motion.div
        style={{
            scaleX: scrollYProgress,
            position:'fixed',
            top:0,
            right:0,
            left:0,
            height:5,
            zIndex:50,
            backgroundImage: "linear-gradient(to right, #7B66BB , #60A19F)",
            transformOrigin:"0%"
        }}
    >
      
    </motion.div>
  )
}

export default ScrollBar
