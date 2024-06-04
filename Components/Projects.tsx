import Image from "next/image"
import Link from "next/link"
import RetroGrid from "./magicui/retro-grid"
import GridPattern from "./magicui/animated-grid-pattern"
import { ContactDock } from "./Effects/ContactDock"

const Projects=()=>{
    return(
        <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#02050a]" >
            <h1 className="text-center sm:text-[33px] md:text-[45px] font-bold uppercase text-white">
                MY <span className="text-yellow-400">Project</span>
            </h1>
            <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] ">
                <div >
                    <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                        <a href="https://github.com/macsolo1332/AirGeoSense.git"> <Image  src="/images/p8.jpeg" alt="portfolio" layout="fill" className="object-contain"/></a>
                        

                    </div>  
                </div>
                <div >
                    <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">

                    <a href="https://github.com/macsolo1332/coursecraft.git">
                        <Image  src="/images/p1.jpg" alt="portfolio" layout="fill" className="object-contain"/>
                        </a>    

                    </div>  
                </div>
                <div >
                    <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">

                    <a href="https://github.com/macsolo1332/BirthdayWishing.git">
                    <Image  src="/images/p2.jpg" alt="portfolio" layout="fill" className="object-contain"/>
                    </a>
                    </div>  
                </div>
                <div >
                    <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                    <a href="https://github.com/macsolo1332/SupermarketBillingManagementSystemJDBC.git">
                        <Image  src="/images/p4.png" alt="portfolio" layout="fill" className="object-contain"/>
                    </a>
                    </div>  
                </div>
                <div >
                    <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                    <a href="https://github.com/macsolo1332/coursecraft.git">
                    <Image  src="/images/p9.jpeg" alt="portfolio" layout="fill" className="object-contain"/>
                    </a>
                    </div>  
                </div>
                <div >
                    <div className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                    <a href="https://github.com/macsolo1332/petstr.git">
                        <Image  src="/images/p3.jpg" alt="portfolio" layout="fill" className="object-contain"/>
                    </a>
                    </div>  
                </div>
            </div>

           
        </div>
    )
}
export default Projects
