import { Bars3Icon } from '@heroicons/react/16/solid'
import React from 'react'
import SparklesText from './magicui/sparkles-text';
import Link from 'next/link';


import About1 from '@/Components/About';
import Hero1 from '@/Components/Hero';
import MobileNav1 from '@/Components/MobileNav';
import Projects1 from '@/Components/Projects';
import Skils1 from '@/Components/Skills';
import Contacts1 from '@/Components/Contacts';

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
            <a href="#Hero"> <div className='nav-link ' >HOME</div></a>
            <a href="#About"> <div className='nav-link '>ABOUT</div></a>
            <a href="#Skills"><div className='nav-link '>SKILLS</div></a>
            <a href="#Projects"><div className='nav-link '>PROJECT</div></a>
            <a href="#Contacts"><div className='nav-link '>CONTACT</div></a>
            
            <div onClick={openNav}>
                <Bars3Icon className='w-8 md:hidden h-8 cursor-pointer text-yellow-300 ' />
            </div>
        </div>
    </div>

  )
}
export default Nav
