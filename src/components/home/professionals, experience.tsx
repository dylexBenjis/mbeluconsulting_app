import React from 'react'
import styles from "../../app/page.module.css";
import ShowMore_ScrollButton from '../clientSideComponents/showMore_ScrollButton';
import Image from 'next/image';
import imagesrc from '../../images/livingroom.webp'
import Component_slideUp from '../clientSideComponents/component_slideUp';



const ProfessionalsComponents = () => {
  return (
 <div className='relative h-screen w-screen ' id='professionals'>
            <div className="absolute h-screen w-screen -z-1" >
                    <Image src={imagesrc} alt='bgImage' style={{height:'100%',width:'100%', objectFit:'cover'}}/>
            </div>
                <div className='absolute inset-0 backdrop-opacity-10 bg-black/35 backdrop-invert'>

          <div className="flex mx-auto max-w-[1300px] justify-center items-center h-screen">
         <Component_slideUp>   
      <div className={styles.container}>
        <div className='flex flex-col gap-y-5  justify-center items-center text-center '>
        <h1 className='text-2xl sm:text-4xl font-semibold mb-3 sm:mb-6 text-white '>Professionals, Experience, Service Delivery and Integrity.</h1>
          </div>
        </div></Component_slideUp></div></div>
      <ShowMore_ScrollButton scrollToElement='services_and_team'/>
    </div>
  )
}

export default ProfessionalsComponents