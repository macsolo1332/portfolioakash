import { cn } from "@/lib/utils";
import SkilsLanguage from "./SkillsLanguage";
import SkilsItem from "./SkilsItem";
import GridPattern from "./magicui/animated-grid-pattern";
import { SkillCircles } from "./Effects/SkillCircle";


const Skils=()=>{
    return(
        <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#383737]" id="Skills">
            <GridPattern
        numSquares={500}
        maxOpacity={0.3}
        duration={1}
        repeatDelay={0.1}
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,black,transparent)] ",
          
        )}
      />
            
    

            <h1 className="text-center sm:text-[39px] md:text-[44px] font-bold uppercase text-white">
                Education & <span className="text-yellow-400">Skills</span>
            </h1>
            <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center ">
                
                <div>
                    
                <SkilsItem title=" SAINTGITS COLLEGE OF ENGINEERING " year="2022-2024" course="Master Of Computer Aapplications" dec="The Master of Computer Applications (MCA)
                     is a two-year postgraduate program designed me to equip  with
                      advanced IT skills and knowledge. It's helps me 
                       seeking careers in software development, data science, or
                        other technology fields."  /> 
                        
                    <SkilsItem title=" NSS HSS ADOOR" year="2016-2018" course=" +2 Computer Science" dec=" It Helps me builds upon core CS principles for further study." />                  
                    {/* <SkilsLanguage  Skill1="react" Skill2="react" Skill3="react" level1="w-[91%]" level2="w-[91%]" level3="w-[91%]" /> */}
                   

                    
                </div>
                <div>
                <SkilsItem title=" SAS SNDP YOGAM COLLEGE KONNI" year="2019-2021" course="Bachelor Of Computer Aapplications" 
                    dec="The Bachelor of Computer Application (BCA) is a 3-year undergraduate program equipping me with the skills 
                    to excel in the booming IT field. software development, web technologies, database management,
                     and more, preparing me for rewarding career as a programmer and a web developer." />
                    {/* <SkilsItem title=" NEW MAN CENTRAL SCHOOL" year="2007-2016" course=" sslc" dec="The curriculum equips me with foundational knowledge in key subjects." /> */}
                    <SkilsLanguage Skill1="react" Skill2="react" Skill3="react" level1="w-[91%]" level2="w-[91%]" level3="w-[91%]" />
                    
                    
                </div>

            </div>
        </div> 
    )
}
export default Skils;