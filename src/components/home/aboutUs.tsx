import React from 'react'
import styles from "../../app/page.module.css";
import imagesrc from '../../images/test.jpg'
import Image from 'next/image';
import ShowMore_ScrollButton from './showMore_ScrollButton';


const AboutUs = () => {
  return (
          <div className='relative h-screen w-screen ' id='aboutUs'>
            <div className="absolute h-screen w-screen -z-1" >
                    <Image src={imagesrc} alt='bgImage' style={{height:'100%',width:'100%', objectFit:'cover'}}/>
            </div>
                <div className='absolute inset-0 backdrop-opacity-20 bg-gradient-to-b  from-white from-5% via-white/15 via-20%  to-white to-95%'>
                <div className='absolute inset-0 backdrop-opacity-20 bg-gradient-to-r  from-white from-5% via-white/15 via-20%  to-white to-95%'>

        <div className="flex mx-auto max-w-[1300px] justify-center items-center h-screen">
      <div className={styles.container}>
        <div className='flex flex-col gap-y-5 sm:w-[30rem] justify-center items-center '>
        <h1 className='text-2xl sm:text-4xl font-semibold mb-3 sm:mb-6'>Uncompromised Value</h1>
        <p className='text-base/7 sm:text-lg/10 text-center'>
          Mbelu Consulting is a firm of Chartered Surveyors with track records in providing excellent knowledge based real estate services such as property valuations for all purposes, property investment appraisal, and advisory services.          
        </p>
      <a className="inline-flex px-4 py-4 text-sm font-semibold border-black border-2 transition hover:bg-neutral-800" href="/contact">
        <span className="relative top-px">View Our Profile</span>
          </a>
          </div>
        </div></div>
      </div>
      </div>
      <ShowMore_ScrollButton scrollToElement='services_and_team'/>
    </div>
  )
}

export default AboutUs