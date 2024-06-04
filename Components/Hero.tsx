import React from "react";
import Particle from "./Effects/Particle";
import TextEffect from "./Effects/TextEffect";
import Image from "next/image";
import { IconCloudDemo } from "./Effects/IconCloud";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

import { BorderBeam } from "./magicui/border-beam";
import ShimmerButton from "./magicui/shimmer-button";



const Hero =()=>{
    return(
        <div 
        className="h-[88vh] mt-[7vh] bg-[url('/images/banner.jpg')] bg-cover bg-center"
        >
            <Particle/>
        <div className=" w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] items-center  ">
            <div>
            <h1 className="w-[69%] text-[35px] mt-[20%] md:text-[50px] text-white font-bold ">
                 HI, I'M <span className="text-yellow-400 w-[30%]"> AKASH  </span>
                 
            </h1>
            <TextEffect/>
            <p className="mt-[1.5rem] text-[18px] text-slate-400  ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet aut debitis earum placeat 
                tempora reiciendis dicta possimus facere quia necessitatibus distinctio culpa, modi 
                quibusdam ducimus, assumenda autem sint illo veniam.</p>

            <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">


            {/* <ShimmerButton className="shadow-2xl h-[4rem]  w-[13.5rem]  hover:bg-yellow-500">  
                    <p className="px-[1rem] text-[18px] font-bold uppercase text-white flex items-center space-x-2">
                        Download CV
                        <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] ml-[1rem] text-white" />
                    </p>  
            </ShimmerButton> */}
               

            </div>
            </div>
            
            <div className="w-[500px] hidden mt-[20%]  ml-[3rem] bg-[#070707] bg-transparent  z-[100000] relative lg:flex items-center rounded-full h-[500px]">
           {/* <Image src="/images/pro1.jpg" alt="user" layout="fill" className="object-cover rounded-full" /> */}
           <IconCloudDemo/>
            </div>
            
           

           
        </div>
       


        </div>
    )
}
export default Hero;