import Image from 'next/image'
import React from 'react'
import heroBg from '@/images/heroBg2.jpg'
import imagesrc from '../../images/test.jpg'
import styles from "../../app/page.module.css";
import ShowMore_ScrollButton from './clientSideComponents/showMore_ScrollButton';
import Component_FadeIn from './clientSideComponents/component_FadeIn';


const HeroSection = () => {

    return (
      <div className='relative h-screen w-screen '>
            <div className="absolute h-screen w-screen " >
                    <Image src={heroBg} alt='bgImage' style={{height:'100%', width:'100%', objectFit:'cover'}}/>
            </div>
                <div className='absolute inset-0 backdrop-opacity-10 bg-black/65 backdrop-invert'>
                <div className="flex mx-auto max-w-[1300px] justify-center items-center h-screen">
                    <div className={styles.container}>
          <div className="sm:mb-8 sm:flex sm:justify-center ">
          </div>
              <Component_FadeIn>
                          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              MBELU CONSULTING
            </h1>
            <p className="mt-3 sm:mt-5 text-base sm:text-2xl font-bold leading-8 text-white">
              CHARTERED ESTATE SURVEYORS AND VALUERS
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">

            </div>
              </div>
            </Component_FadeIn>
            </div>
        </div>
        </div>
         <ShowMore_ScrollButton scrollToElement='aboutUs'/>   
      </div>

  )
}

export default HeroSection