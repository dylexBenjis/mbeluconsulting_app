'use client'
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Component_slideLeft(props: any){
    useEffect(() => {
        Aos.init({
            easing: 'ease-in-sine',
            duration: 700,
        })
    },[])
  return (
      <div className='' data-aos='fade-left'>
          {props.children}
     </div>
    )
}
