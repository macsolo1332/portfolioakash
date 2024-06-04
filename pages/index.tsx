import About from '@/Components/About';
import Hero from '@/Components/Hero';
import MobileNav from '@/Components/MobileNav';
import Nav from '@/Components/Nav'
import Projects from '@/Components/Projects';
import Skils from '@/Components/Skills';
import Contacts from '@/Components/Contacts';
import React, { useState } from 'react'

const HomePage = () => {

  const[nav,setNav]=useState(false)
  const openNav =()=>setNav(true)
  const closeNav =()=>setNav(false)



  return(

    <div className='overflow-x-hidden'>
      <div>
        {/* navbar */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav  openNav={openNav} />
        {/* hero section */}
        <Hero/>
      </div>
      {/* about section  */}
      <div className='relative z-[30]'>
        <About/>
        {/* skills */}
        <Skils/>

        {/* projects */}
        <Projects/>

        {/* contact  */}
        <Contacts/>
       


      </div>
    </div>
  );
};
export default HomePage
