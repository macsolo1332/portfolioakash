import { ArrowDownTrayIcon } from "@heroicons/react/20/solid"
import ShimmerButton from "./magicui/shimmer-button"
import Image from "next/image"
import Ripple from "./magicui/ripple"
import BoxReveal from "./magicui/box-reveal"


const About =()=>{
     return(
        <>
        <div className=" relative w-[100%] h-[2rem] bg-[#09101a] "></div>
        <div className=" bg-slate-900 pb-[3rem] pt-[3rem] md:pt-[8rem]">
           
            
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
            <div>
            <BoxReveal boxColor={"#0f172a"} duration={1.5} >
                <h1 className=" text-[20px] font-bold  uppercase text-[#55e6a5] mb-[1rem]">
                    ABOUT ME

                </h1>
            </BoxReveal>
            <BoxReveal boxColor={"#0f172a"} duration={2} >
                <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] font-bold capitalize mb-[3rem] text-white ">
                    Transforming  <span> Visions</span> 

                </h2>
            </BoxReveal>
            <BoxReveal boxColor={"#0f172a"} duration={2} >
                <div className="mb-[3rem] flex items-center md:space-x-10">
                <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                <p className="text-[19px] text-slate-300 w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusantium placeat officiis fugit sequi quibusdam,
                     ab temporibus odit dolor sint? Ipsa quo, ad corporis atque recusandae voluptates provident quae ipsam.</p>

            </div>
            </BoxReveal>
           

                <ShimmerButton className="shadow-2xl ml-[25%] h-[3rem] w-[10.5rem]  hover:bg-yellow-500">

         
                    <p className="px-[1rem] text-[15px] font-bold uppercase text-white flex items-center space-x-2">
                        Download CV
                        <ArrowDownTrayIcon className="w-[1rem] h-[1rem] ml-[0.5rem] text-white" />
                    </p>
                   
                </ShimmerButton>
           
               
                
            </div>
            <div className="lg:w-[700px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[600px] w-[300px] h-[500px] pl-0 relative">
            <Ripple  />
                <Image src="/images/Avathar1.png" 
                alt="user"
                layout="fill"
                objectFit="contain"
                className="relative z-[11] w-[100%] h-[100%] object-contain"  />
                {/* <div className="absolute w-[100%] h-[100%] z-[10] bg-[#201843]  "></div> */}
            </div>
            
            </div>
            
        </div>
        </>
     )


}

export default About