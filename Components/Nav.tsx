import { Bars3Icon } from '@heroicons/react/16/solid'
import React from 'react'
import SparklesText from './magicui/sparkles-text';

interface Props{
    openNav:()=>void;
}

const Nav = ({openNav}:Props) => {
  return(

    <div className='w-[100%] fixed z-[100000] top-0 h-[12vh] bg-[#7e797961] border-solid   shadow-sm backdrop-blur-[50px] saturate-[70%]' >
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
            
            <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold '>
                {/* MAC_
                <span className='text-yellow-400'>SOLO_</span> */}
                <SparklesText text="Mac_Solo_" />
            </h1>
            <div className='nav-link '>HOME</div>
            <div className='nav-link '>ABOUT</div>
            <div className='nav-link '>SKILLS</div>
            <div className='nav-link '>PROJECT</div>
            <div className='nav-link '>CONTACT</div>
            <div onClick={openNav}>
                <Bars3Icon className='w-8 md:hidden h-8 cursor-pointer text-yellow-300 ' />
            </div>
        </div>
    </div>

  )
}
export default Nav
