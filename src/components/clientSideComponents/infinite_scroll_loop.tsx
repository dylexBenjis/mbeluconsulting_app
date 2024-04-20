'use client'
import React, { useEffect } from 'react'
import './infinite_scroll_loop.css'

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
                {props.children}
            </ul>
          </div>
    </div>
  )
}

export default Infinite_scroll_loop