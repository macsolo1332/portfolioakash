import { SkillCircles } from "./Effects/SkillCircle"

interface Props{
    Skill1:string
    Skill2:string
    Skill3:string
    level1:string
    level2:string
    level3:string

}

const SkilsLanguage=({Skill1,Skill2,Skill3,level1,level2,level3}:Props)=>{
    return(
        <div className=" md:hidden ">

            {/* <div className="relative mb-[3rem]">
                <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold ">
                    {Skill1}
                </h1>
                <span className={`${level1} bottom-0 h-[6px] absolute bg-[#55e6a5] `}>

                </span>

            </div>
            <div className="relative mb-[3rem]">
                <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold ">
                    {Skill2}
                </h1>
                <span className={`${level2} bottom-0 h-[6px] absolute bg-[#55e6a5] `}>

                </span>

            </div>
            <div className="relative mb-[3rem]">
                <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold ">
                    {Skill3}
                </h1>
                <span className={`${level3} bottom-0 h-[6px] absolute bg-[#55e6a5] `}>

                </span>

            </div> */}

            <SkillCircles/>
        </div>
    )
}
export default SkilsLanguage;