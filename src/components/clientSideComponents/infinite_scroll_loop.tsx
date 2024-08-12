'use client'
import React, { useEffect } from 'react'
import './infinite_scroll_loop.css'
import Image from 'next/image'

const Infinite_scroll_loop = (props: any) => {
    


    useEffect(() => {
            const scrollers = document.querySelectorAll('.scroller');
            if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            console.log(scrollers)
            //@ts-ignore
                scrollers.forEach((scroller: any) => {
                console.log(scroller)
                    scroller.setAttribute('data-animated', true);
                    
                    const scrollerInner = scroller.querySelector('.scroller_inner');
                    const scrollerInnerContent = Array.from(scrollerInner.children);
                    scrollerInnerContent.forEach(element => {
                        //@ts-ignore
                        const duplicatedElement = element.cloneNode(true);
                        duplicatedElement.setAttribute('aria-hidden', true);
                        scrollerInner.appendChild(duplicatedElement);
                    })
                        

        
            })
        
    }
        
    },[ ])



  return (
      <div className='scroller_container'>
          <div className='scroller'>
            <ul className='tag-list scroller_inner'>
                <div className='flex h-[150px] w-[300px] sm:w-[400px] items-center justify-center  grayscale hover:filter-none cursor-pointer'>
              <Image src='https://mceastcourt.com.ng/wp-content/uploads/2021/09/esvarbon.png' alt='bgImage' objectFit='cover' height= {150} width={400} /></div>
                     <div className='flex h-[150px] w-[300px] sm:w-[350px] items-center justify-center  grayscale hover:filter-none cursor-pointer '>     
              <Image src='https://mceastcourt.com.ng/wp-content/uploads/2021/09/CASLE.jpeg' alt='bgImage' objectFit='cover' height= {100} width={350} /></div>
                     <div className='flex h-[150px] w-[200px] justify-center  grayscale hover:filter-none cursor-pointer '>
              <Image src='https://mceastcourt.com.ng/wp-content/uploads/2021/09/NIESV.png' alt='bgImage' objectFit='cover' height={200} width={200} /></div>
            
            <div className='h-[150px] w-[170px]justify-center flex  grayscale hover:filter-none cursor-pointer '>
              <Image src='https://mceastcourt.com.ng/wp-content/uploads/2021/09/IDRPN.jpeg' alt='bgImage' objectFit='cover' height= {200} width={200} /></div>
                      <div className='flex h-[150px] w-[350px]  grayscale hover:filter-none cursor-pointer '>
              <Image src='https://mceastcourt.com.ng/wp-content/uploads/2021/09/FIABCI.png' alt='bgImage' objectFit='cover' height= {200} width={300}/></div>
            </ul>
          </div>
    </div>
  )
}

export default Infinite_scroll_loop