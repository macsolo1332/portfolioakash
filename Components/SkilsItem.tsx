import BoxReveal from "./magicui/box-reveal";

interface props {
    title: string;
    year: string;
    course: string;
    dec:string;
}
const SkilsItem=({title,year,course,dec}:props)=>{

    return(
        <div className="md-[4rem] md:mb-[8rem]">
           <BoxReveal boxColor={"#636262"} duration={1} >
            <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]">
                {year}
            </span>
            </BoxReveal>
            <BoxReveal boxColor={"#636262"} duration={1} >
            <h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">
                {title}
            </h1>
            </BoxReveal>
            <BoxReveal boxColor={"#636262"} duration={1} >
            <p className="text-[#aaaaaa] font-normal  text-[17px] opacity-80  pb-4">
                {course}
                
            </p>
            </BoxReveal>
            <p className="text-[#aaaaaa] font-normal w-[100%]  text-[17px] opacity-80  pb-4 text-justify ">
                {dec}
                
            </p>

        </div>
    )
}
export default SkilsItem;