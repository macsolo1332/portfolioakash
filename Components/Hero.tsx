import React from "react";
import Particle from "./Effects/Particle";
import TextEffect from "./Effects/TextEffect";
import Image from "next/image";
import { IconCloudDemo } from "./Effects/IconCloud";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

import { BorderBeam } from "./magicui/border-beam";
import ShimmerButton from "./magicui/shimmer-button";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";



const Hero =()=>{
    return(
        <div 
        className="h-[88vh] sm:h-[92vh] mt-[7vh] bg-[url('/images/banner.jpg')] bg-cover bg-center"
        >
            <Particle/>
        <div className=" w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] items-center  ">
            <div>
            <h1 className="w-[69%] text-[35px] mt-[20%] md:text-[50px] text-white font-bold ">
                 HI, I &apos;M <span className="text-yellow-400 w-[30%]"> AKASH  </span>
                 
            </h1>
            <TextEffect/>
            <p className="mt-[1.5rem] text-[18px] text-slate-400  ">My portfolio reflects a collaborative approach, tailoring my skills in Development and Vision to meet your unique needs. Let &apos;s craft something remarkable together.</p>

            <div className="mt-[2rem]   overflow-hidden   items-center  w-[20%] ">


            <div className="flex ">  
            {/* <a href="mailto:akashsuresh2224@gmail.com"><Mail className="w-6 h-6 text-slate-200 flex-1 ml-[1.5rem] "/></a> */}
            {/* <a href="https://github.com/macsolo1332"><GitHubLogoIcon className="w-6 h-6 text-slate-200 flex-1 ml-[2rem]"/></a> */}
            {/* <a href="https://www.linkedin.com/in/akash-suresh-aab005209"><LinkedInLogoIcon className="w-6 h-6 text-slate-200 flex-1 ml-[2rem]"/></a> */}
            {/* <a href="http://www.instagram.com/mac_solo_"><InstagramLogoIcon className="w-6 h-6 text-slate-200 flex-1 ml-[2rem]"/></a> */}
             </div>
                

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