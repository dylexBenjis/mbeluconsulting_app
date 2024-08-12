import Image from 'next/image'
import React from 'react'
import styles from '@/app/page.module.css'
import { FaQuestion, FaRegClock } from 'react-icons/fa'
import src1 from '@/images/team1.jpg'
import FeedbackForm from '@/components/clientSideComponents/feedBackForm'

const page = () => {
  return (
    <div className='relative h-auto top-[8.5rem] mb-[8.5rem]'>
      <div className='relative h-[10rem]'>
                    <div className='absolute h-[10rem] w-full'>
                    <Image src='https://mceastcourt.com.ng/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-15-at-3.27.48-PM.jpeg' alt='' layout='fill' objectFit='cover' />
                </div>
                <div className='absolute flex items-center h-[10rem] w-full  backdrop-opacity-10 bg-amber-950/90 backdrop-invert '>
                        <div className={styles.container}>
                            <div className='flex h-full items-center text-4xl font-bold text-white'>Contact Us</div> 
                        </div>
        </div></div>
                        <div className='flex items-center h-[auto] w-screen py-20  backdrop-opacity-10 bg-white'>
                        <div className={styles.container}>
                             
                            <div className='grid xl:grid-cols-[calc(100vw-65rem)_30rem] h-auto w-full gap-x-4  py-10 items-center justify-between font-bold text-black'>
            <div className='flex flex-col py-8 gap-y-10'>
              <div className='text-2xl'>Lagos Office</div>
              <div className='grid grid-cols-2 grid-rows-2 text-[14px] lg:text-base font-normal gap-y-3'>
                      <div className='ml-0 sm:ml-[3.5rem]' >Call Us:<br/>0909 6447 703, <br/>0806 874 6350</div>
                      <div className='ml-0 sm:ml-[3.5rem]'>Suite 188 Block A2-16, Sura Shopping Complex, Simpson Street, Lagos Island, Lagos.</div>
                      <div className='flex flex-col sm:flex-row gap-x-2'><div className='text-4xl sm:text-5xl text-amber-950'><FaQuestion/></div><div className='text-[12px] lg:text-base'><p>Have any Questions?</p><p><a className='text-blue-600' href='mailto:info@mceastcourt.com.ng'>info@mceastcourt.com.ng</a></p></div></div>
                      <div className='flex flex-col sm:flex-row gap-x-2'><div className='text-4xl sm:text-5xl text-amber-950'><FaRegClock/></div><div><p>Monday — Friday</p><p>9:00 AM — 6:00 PM</p></div></div>
              </div>
                              </div>
            <div className='text-base font-normal h-[12rem] sm:h-[20rem] bg-gray-400 sm:w-[30rem] text-center'><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.092469942061!2d3.4048346!3d6.4552025!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b5d61fd491d%3A0xd03b144ccce6ab85!2sSURA%20Shopping%20Complex!5e0!3m2!1sen!2sng!4v1713353861241!5m2!1sen!2sng" width="100%" height="100%" style={{ border: '0', }}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
            </div> 
                            <div className='grid xl:grid-cols-[calc(100vw-65rem)_30rem] h-auto w-full gap-x-4  py-10 items-center justify-between font-bold text-black'>
            <div className='flex flex-col py-8 gap-y-10'>
              <div className='text-2xl'>Abuja Office</div>
              <div className='grid grid-cols-2 grid-rows-2 text-[14px] lg:text-base font-normal gap-y-3'>
                      <div className='ml-0 sm:ml-[3.5rem]' >Call Us:<br/>0909 6447 703, <br/>0806 874 6350</div>
                      <div className='ml-0 sm:ml-[3.5rem]'>Suite B4, Bobsar Complex (first floor), No. 4, Michika Street off Ahmadu Bello Way, Area 11, Abuja, F.C.T.</div>
                      <div className='flex flex-col sm:flex-row gap-x-2'><div className='text-4xl sm:text-5xl text-amber-950'><FaQuestion/></div><div className='text-[12px] lg:text-base'><p>Have any Questions?</p><p><a className='text-blue-600' href='mailto:info@mceastcourt.com.ng'>info@mceastcourt.com.ng</a></p></div></div>
                      <div className='flex flex-col sm:flex-row gap-x-2'><div className='text-4xl sm:text-5xl text-amber-950'><FaRegClock/></div><div><p>Monday — Friday</p><p>9:00 AM — 6:00 PM</p></div></div>
              </div>
                              </div>
            <div className='text-base font-normal h-[12rem] sm:h-[20rem] bg-gray-400 sm:w-[30rem] text-center'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3093732214493!2d7.496347375010599!3d9.035517488886958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b8df484d605%3A0xb6d2b9f842badc00!2sBobsar%20Complex%2C%20Michika%20St%2C%20Garki%2C%20Abuja%20900103%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1713361846216!5m2!1sen!2sng" width="100%" height="100%" style={{ border: '0' }}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
            </div> 
                   <div className='grid xl:grid-cols-[calc(100vw-65rem)_30rem] h-auto w-full gap-x-4  py-10 items-center justify-between font-bold text-black'>
            <div className='flex flex-col py-8 gap-y-10'>
              <div className='text-2xl'>Anambra Office</div>
              <div className='grid grid-cols-2 grid-rows-2 text-[14px] lg:text-base font-normal gap-y-3'>
                      <div className='ml-0 sm:ml-[3.5rem]' >Call Us:<br/>0909 6447 703, <br/>0806 874 6350</div>
                      <div className='ml-0 sm:ml-[3.5rem]'>20, Onitsha Road, Nnewi, Anambra State.</div>
                      <div className='flex flex-col sm:flex-row gap-x-2'><div className='text-4xl sm:text-5xl text-amber-950'><FaQuestion/></div><div className='text-[12px] lg:text-base'><p>Have any Questions?</p><p><a className='text-blue-600' href='mailto:info@mceastcourt.com.ng'>info@mceastcourt.com.ng</a></p></div></div>
                      <div className='flex flex-col sm:flex-row gap-x-2'><div className='text-4xl sm:text-5xl text-amber-950'><FaRegClock/></div><div><p>Monday — Friday</p><p>9:00 AM — 6:00 PM</p></div></div>
              </div>
                              </div>
            <div className='text-base font-normal h-[12rem] sm:h-[20rem] bg-gray-400 sm:w-[30rem] text-center'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18691.250150272124!2d6.810825343232106!3d6.081791165936012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043943fcb55d1b9%3A0x51574dab076a5f1d!2s20%20Onitsha%20-%20Owerri%20Expy%2C%20Onitsha%20434116%2C%20Anambra!5e0!3m2!1sen!2sng!4v1713362138121!5m2!1sen!2sng" width="100%" height="100%" style={{ border: '0' }}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
            </div> 
                    
                   <div className='grid xl:grid-cols-[calc(100vw-65rem)_30rem] h-auto w-full gap-x-4  py-10 items-center justify-between font-bold text-black'>
            <div className='flex flex-col py-8 gap-y-10'>
              <div className='text-2xl'>Port Harcourt Office</div>
              <div className='grid grid-cols-2 grid-rows-2 text-[14px] lg:text-base font-normal gap-y-3'>
                      <div className='ml-0 sm:ml-[3.5rem]' >Call Us:<br/>0909 6447 703, <br/>0806 874 6350</div>
                      <div className='ml-0 sm:ml-[3.5rem]'>
Plot 209 East West Road, Rumuodara, Port Harcourt, Rivers State.</div>
                      <div className='flex flex-col sm:flex-row gap-x-2'><div className='text-4xl sm:text-5xl text-amber-950'><FaQuestion/></div><div className='text-[12px] lg:text-base'><p>Have any Questions?</p><p><a className='text-blue-600' href='mailto:info@mceastcourt.com.ng'>info@mceastcourt.com.ng</a></p></div></div>
                      <div className='flex flex-col sm:flex-row gap-x-2'><div className='text-4xl sm:text-5xl text-amber-950'><FaRegClock/></div><div><p>Monday — Friday</p><p>9:00 AM — 6:00 PM</p></div></div>
              </div>
                              </div>
            <div className='text-base font-normal h-[12rem] sm:h-[20rem] bg-gray-400 sm:w-[30rem] text-center'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.4592880804607!2d7.035101674989645!3d4.862437040234201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d270c9c1a4ad%3A0x81af39242f1ce0e4!2s209%20E%20-%20W%20Rd%2C%20Rumuodara%2C%20Port%20Harcourt%20500272%2C%20Rivers!5e0!3m2!1sen!2sng!4v1713362212894!5m2!1sen!2sng" width="100%" height="100%" style={{border:'0'}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
            </div> 
            </div>
      </div><hr className={styles.container} />
                        <div className='flex items-center h-[auto] w-screen py-20  backdrop-opacity-10 bg-white'>
        <div className={styles.container}>
          <div className='text-center text-xl font-semibold text-gray-700'>HAVE A QUESTION? PLEASE SEND US AN INQUIRY USING THE FORM BELOW</div>
          <FeedbackForm/>
          </div></div>
      </div>
      
  )
}

export default page