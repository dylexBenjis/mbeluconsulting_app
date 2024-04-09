'use client'
import React, { useState, useEffect } from 'react'
import mbeluConsulting_Logo from '@/images/mbeluConsulting_Logo.png'
import styles from '@/app/page.module.css'
import Image from 'next/image'

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='relative'>
    <div className="fixed left-0 right-0 z-40 pt-5 pb-5 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="flex items-center justify-between">
            <a aria-label="Home" href="/">
              <Image src={mbeluConsulting_Logo} alt='mbeluConsulting logo'/>
            </a>
            <div className="flex items-center gap-x-8">
              <a className="inline-flex px-4 py-4 text-sm font-semibold border-black border-2 transition hover:bg-neutral-800" href="/contact">
                <span className="relative top-px">ORDER FOR AN APPRAISAL</span>
              </a>
              <button type="button" aria-expanded="false" aria-controls=":R5a:" className="group -m-2.5 rounded-full p-2.5 transition hover:bg-neutral-950/10" aria-label="Toggle navigation">
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


