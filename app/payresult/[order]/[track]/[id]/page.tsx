import Payresult from '@/components/Payresult'
import React from 'react'




const page = ({params} : any) => {

  const test = params.id

  console.log(test)

  
  
   



  return (
    <div>
      <Payresult id={test}/>
    </div>
  )
}

export default page
