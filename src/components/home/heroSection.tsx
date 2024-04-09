import Image from 'next/image'
import React from 'react'
import heroBg from '@/images/heroBg.jpg'
import styles from "../../app/page.module.css";


const HeroSection = () => {

    return (
      <div className='relative h-screen w-screen '>
            <div className="absolute h-screen w-screen " >
                    <Image src={heroBg} alt='bgImage' style={{height:'100%', objectFit:'cover'}}/>
            </div>
                <div className='absolute inset-0 backdrop-opacity-10 bg-gray-700/10 backdrop-invert'>
                <div className="flex mx-auto max-w-[1300px] justify-center items-center h-screen">
                    <div className={styles.container}>
          <div className="sm:mb-8 sm:flex sm:justify-center ">
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              MBELU CONSULTING
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div></div>
        </div>
                </div>
            
      </div>

  )
}

export default HeroSection