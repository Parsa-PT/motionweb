type slideInProp = {
    direction : string,
    type : string,
    delay : number,
    duration : number,
  }
  
  export const slideIn = ({direction, type, delay, duration} : slideInProp) => ({
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });



  type staggerContainerprop ={
    staggerChildren : number,
    delayChildren : number
  }
  
  export const staggerContainer = ({staggerChildren, delayChildren} : staggerContainerprop) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });




  export const textContainer = {
    hidden: {
      opacity: 0,
    },
    show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
  };


  export const textVariant2 = {
    animate: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeIn',
      },
    },
  };