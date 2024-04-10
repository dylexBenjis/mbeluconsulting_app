'use client'
import React, { useState, useEffect } from 'react'
import mbeluConsulting_Logo from '@/images/mbeluConsulting_Logo.png'
import Image from 'next/image'

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
    <div className='relative'>
      <div className={menuOpen ? (scrolled||menuOpen?'fixed left-0 right-0 z-40 pt-5 pb-5 h-[20rem] sm:h-[32rem] bg-white shadow-lg':"fixed left-0 right-0 z-40 pt-5 pb-5 h-[5rem] sm:h-[8rem] bg-transparent"):(scrolled?'fixed left-0 right-0 z-40 pt-5 pb-5 h-[5rem] sm:h-[8rem] bg-white shadow-lg':"fixed left-0 right-0 z-40 pt-5 pb-5 h-[5rem] sm:h-[8rem] bg-transparent")} style={{transition:scrolled||menuOpen?(scrolled?(menuOpen?'height 0.3s ease-in-out':'height 0.3s ease-in-out, background 0.3s ease'):(menuOpen?'height 0.3s 0.5s ease-in-out, background 0.3s ease':'')):(menuOpen?'height 0.3s 1s ease-in-out, background 0.3s ease':'height 0.3s ease-in-out, background 0.5s 0.5s')}}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="flex items-center justify-between">
            <a aria-label="Home" href="/">
              <Image src={mbeluConsulting_Logo} alt='mbeluConsulting logo' style={{transform:scrolled?'scale(1)':'scale(1.2)', transition:'0.1s ease-in-out'}} className='h-[3rem] w-[5.25rem] sm:h-[6em] sm:w-[10.5rem]'/>
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
        </div>
      </div>
</div>
    </div> 
        
  )
}

export default NavBar


