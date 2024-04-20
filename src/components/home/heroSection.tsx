import Image from 'next/image'
import React from 'react'
import heroBg0 from '@/images/heroBg0.jpg';
import heroBg1 from '@/images/heroBg1.jpg';
import heroBg2 from '@/images/heroBg2.jpg';
import heroBg3 from '@/images/heroBg3.jpg';
import heroBg4 from '@/images/heroBg4.jpg';
import heroBg5 from '@/images/heroBg5.jpg';
import heroBg6 from '@/images/heroBg6.jpg';
import heroBg7 from '@/images/heroBg7.jpg';
import heroBg8 from '@/images/heroBg8.jpg';
import heroBg9 from '@/images/heroBg9.jpg';
import imagesrc from '../../images/test.jpg'
import styles from "../../app/page.module.css";
import ShowMore_ScrollButton from '../clientSideComponents/showMore_ScrollButton';
import Component_FadeIn from '../clientSideComponents/component_FadeIn';
import HeroSectionImageCarousel from '../clientSideComponents/HeroSectionImageCarousel';


const HeroSection = () => {

    return (
      <div className='relative h-screen w-screen bg-black'>
        <div className="absolute h-screen w-screen " >
          <HeroSectionImageCarousel>
                    <Image src={heroBg0} alt='bgImage' layout='fill' objectFit='cover' className='animate-zoomInOut' />
                    <Image src={heroBg1} alt='bgImage' layout='fill' objectFit='cover' className='animate-zoomInOut' />
                    <Image src={heroBg2} alt='bgImage' layout='fill' objectFit='cover' className='animate-zoomInOut' />
                    <Image src={heroBg3} alt='bgImage' layout='fill' objectFit='cover' className='animate-zoomInOut' />
                    <Image src={heroBg4} alt='bgImage' layout='fill' objectFit='cover' className='animate-zoomInOut' />
                    <Image src={heroBg5} alt='bgImage' layout='fill' objectFit='cover' className='animate-zoomInOut' />
                    <Image src={heroBg6} alt='bgImage' layout='fill' objectFit='cover' className='animate-zoomInOut' />
                    <Image src={heroBg7} alt='bgImage' layout='fill' objectFit='cover' className='animate-zoomInOut' />
                    <Image src={heroBg8} alt='bgImage' layout='fill' objectFit='cover' className='animate-zoomInOut' />
                    <Image src={heroBg9} alt='bgImage' layout='fill' objectFit='cover' className='animate-zoomInOut' />

          </HeroSectionImageCarousel>
            </div>
                <div className='absolute inset-0 backdrop-opacity-10 bg-black/15 backdrop-invert'>
                <div className="flex mx-auto max-w-[1300px] justify-center items-center h-screen">
                    <div className={styles.container}>
              <Component_FadeIn>
            <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              MBELU CONSULTING
            </h1>
            <p className="mt-1 sm:mt-3 text-base sm:text-xl font-bold leading-8 text-white">
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