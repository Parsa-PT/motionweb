import HomePage from "@/components/Home";
import Package from "@/components/Package";
import Point from "@/components/Point";
import Portfolio from "@/components/ContactHome";
import Services from "@/components/Services";
import ScrollBar from "@/components/ui/ScrollBar";
import ContactHome from "@/components/ContactHome";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";

export default function Home() {
  return (
    <div className=" ">
      <Loading/>
      
      {/* <Navbar/> */}
    
      <ScrollBar/>
      <HomePage />
    
      {/* <div className='gradient-07 z-0'/> */}

 

      <Point />
      <div className=" relative">
          <Services />
          {/* <div className=" gradient-03 z-0" /> */}
          <Package/>
      </div>
     
      <ContactHome/>
    </div>
  );
}
