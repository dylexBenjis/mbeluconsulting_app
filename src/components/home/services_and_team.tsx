import React from 'react'
import styles from "../../app/page.module.css";
import Image from 'next/image';
import src1 from '@/images/heroBg.jpg'
import src2 from '@/images/test.jpg'
import ShowMore_ScrollButton from './showMore_ScrollButton';

const Services_and_team = () => {
  return (
      <div className="relative w-screen h-screen" id='services_and_team'>
          <div className='grid grid-rows-2 sm:grid-cols-2  h-full '>
          <>
          <div className='relative h-[calc(100vh/2)] sm:h-screen'>
              <div className='absolute h-full'>
                  <Image src={src1} alt='' style={{ objectFit: 'cover', height: '100%',}}/>
                  
                      </div>

                  <div className='absolute flex items-center h-full backdrop-opacity-10 bg-orange-900/60 backdrop-invert '>

                <div className={styles.container}>

                   
                      <div className="gap-y-1 sm:gap-y-5 flex flex-col h-auto w-auto" >
                                    <h2 className='text-3xl font-medium'>Our Team</h2>
                                    <p className='text-lg/7'>Meet the brains behind the brawn. Our people form the foundation of our business – and we stand on very solid ground.</p>
                                    <div className='flex justify-start'>
                                        <a className="inline-flex px-4 py-4 text-sm font-semibold border-black border-2 transition hover:bg-neutral-800" href="/contact">
                                            <span className="relative top-px">Meet Our People</span>
                                        </a>
                                    </div>
                                </div>
                      </div>
                      </div>
                      </div>
        </>
          <>
          <div className='relative h-[calc(100vh/2)] sm:h-screen'>
              <div className='absolute h-full'>
                  <Image src={src2} alt='' style={{ objectFit: 'cover', height: '100%', backdropFilter:'opacity(80%)'}}/>
                  
                      </div>
                                        <div className='absolute flex items-center h-full  backdrop-opacity-10 bg-gray-700/60 backdrop-invert '>

                <div className={styles.container}>

                   
                      <div className="gap-y-1 sm:gap-y-5 flex flex-col h-auto w-auto" >
                                    <h2 className='text-3xl font-medium'>Our Team</h2>
                                    <p className='text-lg/7'>Meet the brains behind the brawn. Our people form the foundation of our business – and we stand on very solid ground.</p>
                                    <div className='flex justify-start'>
                                        <a className="inline-flex px-4 py-4 text-sm font-semibold border-black border-2 transition hover:bg-neutral-800" href="/contact">
                                            <span className="relative top-px">Meet Our People</span>
                                        </a>
                                    </div>
                                </div>
                      </div>
                      </div>
                  </div>
            </>
          {/* <div className='absolute inset-0 flex justify-center items-center h-screen '>
              <div className='flex max-w-[1300px] mmx-auto'>
                  <div className={styles.container}>
                  <div className='grid grid-cols-2 gap-x-10 '>



                   
                      <div className="gap-y-5 flex flex-col h-auto w-auto" >
                                    <h2 className='text-3xl font-medium'>Our Team</h2>
                                    <p className='text-lg/7'>Meet the brains behind the brawn. Our people form the foundation of our business – and we stand on very solid ground.</p>
                                    <div className='flex justify-start'>
                                        <a className="inline-flex px-4 py-4 text-sm font-semibold border-black border-2 transition hover:bg-neutral-800" href="/contact">
                                            <span className="relative top-px">Meet Our People</span>
                                        </a>
                                    </div>
                                </div>
                      </div>
                      </div>
              </div> 
              </div> */}
          </div>
          <ShowMore_ScrollButton scrollToElement='needAnAppraisal'/>
          </div>
    )
}

export default Services_and_team