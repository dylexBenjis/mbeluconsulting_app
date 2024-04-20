import React from 'react'
import styles from '@/app/page.module.css'
import Image from 'next/image'
import Profile_AboutUsSlider from '@/components/clientSideComponents/profile_AboutUs_slider'
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
import Infinite_scroll_loop from '@/components/clientSideComponents/infinite_scroll_loop';


const page = () => {
  return (
      <div className='relative flex flex-col top-[8.5rem] mb-[12rem] h-auto gap-y-10'>
            <div className="relative h-[8rem]">
                    <div className='absolute h-full w-full'>
                    <Image src='https://mceastcourt.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-15-at-3.27.48-PM.jpeg' alt='' layout='fill' objectFit='cover' />
                </div>
                <div className='absolute flex items-center h-full w-full  backdrop-opacity-10 bg-amber-950/90 backdrop-invert '>
                        <div className={styles.container}>
                            <div className='flex h-full items-center text-4xl font-bold text-white'>About Us</div> 
                        </div>
                    </div>
          </div>
            <div className={styles.container} style={{height:'auto', paddingTop:'3rem'}}>
              <div className='text-amber-900 text-3xl sm:text-5xl font-semibold italic text-center'>Built on a solid foundation.</div>
              <div className='text-center pt-10'>Mbelu Consulting is a firm of Chartered Estate Surveyors and Valuers with track records in providing excellent knowledge based real estate services such as property valuations for all purposes, property investment appraisal, and advisory services. We have our head office in Lagos Island, and presence spread around the country.
Mbelu Consulting is licensed by the Estate Surveyors and Valuers Registration Board of Nigeria (ESVARBON) which controls practice within the profession and we are also enlisted by the Nigerian Institution of Estate Surveyors and Valuers (NIESV) an Institution enabled by the Federal Government through its Acts No. 25 of 1974.

Our aim is to exceed our clients’ expectations by providing them with a comprehensive range of unmatched expertise in the Real Estate Market in Nigeria. Our services covers a broad spectrum of the following:

Property Valuation;
Feasibility & Viability Appraisal
Property investment advisory services
Transaction Representation Consultancy among others.</div>
              </div>
          <div>
            <div className={styles.container} style={{height:'auto', paddingTop:'3rem', paddingBottom:'5rem'}}>
                  <div className='flex h-full items-center text-black'>
                  <div className='grid grid-cols-1 lg:grid-cols-2 h-auto gap-y-10 gap-x-[10rem]'>
                      <div className='flex flex-col'>
                          <div className='flex text-2xl sm:text-3xl font-semibold mb-5 place-content-center sm:place-content-start'>OUR MISSION</div>
                          <div className='flex text-center sm:text-start'>               
                To be passionate about real estate and dedicated to the highest standards of fast, accurate, and unbiased service to our clients.
                          </div>
                      </div>
                      <div className='flex flex-col'>
                          <div className='flex text-2xl sm:text-3xl font-semibold mb-5 place-content-center sm:place-content-start'>Our Vision</div>
                          <div className='flex text-center sm:text-start'>
                    To be known for the quality, accuracy, and timely delivery of property services by applying current and advanced principles                          </div>.
                      </div>
                      
                  </div>
                  </div> 
            </div>
            </div>
            <div className={styles.container} style={{height:'auto', paddingBottom:'2rem'}}>
                  <div className='flex h-auto py-5 text-3xl sm:text-4xl font-semibold text-amber-900 items-center justify-center text-center'>
                    We&#39;re Proud Members Of these Organizations.
                  </div></div>

                  <Infinite_scroll_loop><div className='flex h-[150px] w-[300px] sm:w-[400px] items-center justify-center  grayscale hover:filter-none cursor-pointer'>
              <Image src='https://mceastcourt.com/wp-content/uploads/2021/09/esvarbon.png' alt='bgImage' objectFit='cover' height= {150} width={400} /></div>
                     <div className='flex h-[150px] w-[300px] sm:w-[350px] items-center justify-center  grayscale hover:filter-none cursor-pointer '>     
              <Image src='https://mceastcourt.com/wp-content/uploads/2021/09/CASLE.jpeg' alt='bgImage' objectFit='cover' height= {100} width={350} /></div>
                     <div className='flex h-[150px] w-[200px] justify-center  grayscale hover:filter-none cursor-pointer '>
              <Image src='https://mceastcourt.com/wp-content/uploads/2021/09/NIESV.png' alt='bgImage' objectFit='cover' height={200} width={200} /></div>
            
            <div className='h-[150px] w-[170px]justify-center flex  grayscale hover:filter-none cursor-pointer '>
              <Image src='https://mceastcourt.com/wp-content/uploads/2021/09/IDRPN.jpeg' alt='bgImage' objectFit='cover' height= {200} width={200} /></div>
                      <div className='flex h-[150px] w-[350px]  grayscale hover:filter-none cursor-pointer '>
              <Image src='https://mceastcourt.com/wp-content/uploads/2021/09/FIABCI.png' alt='bgImage' objectFit='cover' height= {200} width={300}/></div>
</Infinite_scroll_loop> 

    </div>
  )
}

export default page