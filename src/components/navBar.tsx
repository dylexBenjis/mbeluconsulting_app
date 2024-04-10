'use client'
import React, { useState, useEffect } from 'react'
import mbeluConsulting_Logo from '@/images/mbeluConsulting_Logo.png'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
    }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);


  //handle navbar burger menu open
  const [menuOpen, setMenuOpen]= useState(false)
  const handleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true)
    }else{setMenuOpen(false)}
  }

  return (
    <div className='relative block'>
      <div className={menuOpen ? (scrolled||menuOpen?'overflow-hidden fixed left-0 right-0 z-40 pt-5 pb-5 h-[32rem] bg-white shadow-lg':"overflow-hidden fixed left-0 right-0 z-40 pt-5 pb-5 h-[5rem] sm:h-[8rem] bg-transparent"):(scrolled?'overflow-hidden fixed left-0 right-0 z-40 pt-5 pb-5 h-[5rem] sm:h-[8rem] bg-white shadow-lg':"overflow-hidden fixed left-0 right-0 z-40 pt-5 pb-5 h-[5rem] sm:h-[8rem] bg-transparent")} style={{transition:scrolled||menuOpen?(scrolled?(menuOpen?'height 0.3s ease-in-out':'height 0.3s ease-in-out, background 0.3s ease'):(menuOpen?'height 0.3s 0.5s ease-in-out, background 0.3s ease':'')):(menuOpen?'height 0.3s 1s ease-in-out, background 0.3s ease':'height 0.3s ease-in-out, background 0.5s 0.5s')}}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none gap-y-4">
          <div className="flex items-center justify-between">
            <a aria-label="Home" href="/">
              <Image src={mbeluConsulting_Logo} alt='mbeluConsulting logo' style={{transform:scrolled?'scale(1)':'scale(1.2)', transition:scrolled?'0.1s ease-in-out':'0.1s 0.6s'}} className='h-[3rem] w-[5.25rem] sm:h-[6em] sm:w-[10.5rem]'/>
            </a>
            <div className="flex items-center gap-x-8">
              <a className="inline-flex px-2 py-2 text-[10px] sm:px-4 sm:py-4 sm:text-sm font-semibold border-black border-2 transition hover:bg-neutral-800" href="/contact">
                <span className="relative top-px">ORDER FOR AN APPRAISAL</span>
              </a>
              <button type="button" aria-expanded="false" aria-controls=":R5a:" className="group -m-2.5 rounded-full p-2.5 transition hover:bg-neutral-950/10" aria-label="Toggle navigation " onClick={handleMenu}>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-neutral-950 group-hover:fill-neutral-700">
                  <path d="M2 6h20v2H2zM2 16h20v2H2z"></path>
                </svg>
              </button>
            </div>
            </div>
              <div className='relative mt-10 place-content-center text-center text-lg text-amber-800 font-semibold h-auto' >
                <div className='grid grid-rows-6 gap-y-8'>
                <div><Link href='/' className='hover:text-gray-600 ' onClick={handleMenu}>Home</Link></div>
                <div><Link href='/profile' className='hover:text-gray-600 ' onClick={handleMenu}>Profile</Link></div>
                  <div><Link href='/services' className='hover:text-gray-600' onClick={handleMenu}>Services</Link></div>
                  <div><Link href='/team' className='hover:text-gray-600' onClick={handleMenu}>Our People / Team</Link></div>
                  <div><Link href='/contact_us' className='hover:text-gray-600' onClick={handleMenu}>Contact</Link></div>
                  <div><Link href='£' className='hover:text-gray-600' onClick={handleMenu}>Properties</Link></div>
              </div>
            </div>
        </div>
      </div>
</div>
    </div> 
        
  )
}

export default NavBar


