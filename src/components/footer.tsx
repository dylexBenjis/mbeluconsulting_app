'use client'
import React from 'react'
import styles from '@/app/page.module.css'
import marker1 from '@/images/marker1.png'
import marker2 from '@/images/marker2.png'
import marker3 from '@/images/marker3.png'
import marker4 from '@/images/marker4.png'
import Image from 'next/image'
import { FaXTwitter, FaFacebookF, FaLinkedin,FaSquareInstagram,FaWhatsapp } from 'react-icons/fa6'
import Link from 'next/link'


const Footer = () => {

      const alert_properties = () => {
    const a = confirm('you will be redirected to eastcourt, a subsidiary of mbelu consulting to see available properties.')
    if (a) {
      window.open('https://www.mceastcourt.com', '_blank')
      
    }
  }
    return (
        <div className='flex h-auto sm:h-[auto] w-screen bg-neutral-700 text-white'>
            <div className={styles.container} style={{width:'100%', height:'100%', paddingTop:'2rem'}}>
      <div   className='grid grid-rows-[auto_auto] gap-y-5 h-full w-full mx-auto max-w-[1300px]'>
                    <div className='flex justify-center items-center h-full py-5'>
                        <div className="grid grid-cols-1 gap-x-[8rem] gap-y-16 lg:grid-cols-1">
                            <div>
                                <p className='flex justify-center font-semibold text-xl mb-5'>Our Offices</p>
                                <div className='grid grid-cols-1 gap-y-3 gap-x-4 lg:gap-x-10 mb-3 sm:grid-cols-2 lg:grid-cols-4 w-full text-center text-sm'>
                                    <div className='flex flex-col gap-x-1 '>
                                        <div className='flex justify-center'><Image src={marker1} alt=''/></div>
                                        <p className='flex justify-center text-lg py-2'>Lagos Island Office</p>
                                        <p className='flex justify-center'>Suite 188 Block A2-16, Sura Shopping Complex, Simpson Street, Lagos Island, Lagos</p>
                                        <p className='flex justify-center'>0909 6447 703 <br/>0806 874 6350</p>
                                        <p className='flex justify-center'>mbeluconsultingg@gmail.com, mbeluconsulting@mceastcourt.com</p>
                                    </div>
                                    <div className='flex flex-col gap-x-1 '>
                                        <div className='flex justify-center'><Image src={marker2} alt=''/></div>
                                        <p className='flex justify-center text-lg py-2'>Abuja Office</p>
                                        <p className='flex justify-center'>Suite B4, Bobsar Complex (first floor), No. 4, Michika Street off Ahmadu Bello Way, Area 11, Abuja, F.C.T.</p>
                                        <p className='flex justify-center'>0909 6447 703 <br/>0806 874 6350</p>
                                        <p className='flex justify-center'>mbeluconsultingg@gmail.com, mbeluconsulting@mceastcourt.com</p>
                                    </div>
                                    <div className='flex flex-col gap-x-1 '>
                                        <div className='flex justify-center'><Image src={marker3} alt=''/></div>
                                        <p className='flex justify-center text-lg py-2'>Anambra Office</p>
                                        <p className='flex justify-center'>
20, Onitsha Road, Nnewi, Anambra State.</p>
                                        <p className='flex justify-center'>0909 6447 703 <br/>0806 874 6350</p>
                                        <p className='flex justify-center'>mbeluconsultingg@gmail.com, mbeluconsulting@mceastcourt.com</p>
                                    </div>
                                    <div className='flex flex-col gap-x-1 '>
                                        <div className='flex justify-center'><Image src={marker4} alt=''/></div>
                                        <p className='flex justify-center text-lg py-2'>PortHarcourt Office</p>
                                        <p className='flex justify-center'>Plot 209 East West Road, Rumuodara, Port Harcourt, Rivers State.</p>
                                        <p className='flex justify-center'>0909 6447 703 <br/>0806 874 6350</p>
                                        <p className='flex justify-center'>mbeluconsultingg@gmail.com, mbeluconsulting@mceastcourt.com</p>
                                    </div>                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row  gap-y-16 gap-x-[12rem]  justify-center items-center'>
                            <nav><ul role="list" className="flex flex-row justify-center lg:justify-start items-center">
                                <li className=''>
                                    <div className="font-display font-semibold text-lg tracking-wider ">Connect with us</div>
                                    <ul role="list" className="mt-4 text-4xl flex flex-row gap-x-4 h-[4rem]">
                                        <li className="flex mt-4 w-[3.5rem] justify-center items-center">
                                            <a className="transition hover:text-[2.65rem]" href="https://x.com/mbeluconsultng" target='_blank'><FaXTwitter/></a>
                                        </li><li className="flex mt-4 w-[3.5rem] justify-center items-center">
                                            <a className="transition hover:text-[2.65rem]" href="https://facebook.com/eastcourt" target='_blank'><FaFacebookF /></a>
                                        </li>
                                        <li className="flex mt-4 w-[3.5rem] justify-center items-center">
                                            <a className="transition hover:text-[2.65rem]" target='_blank' href="https://linkedin.com/company/mbelu-consulting-estate-surveyours-and-valuers"><FaLinkedin /></a>
                                        </li>
                                        <li className="flex mt-4 w-[3.5rem] justify-center items-center">
                                            <a className="transition hover:text-[2.65rem]" href="" target='_blank'><FaSquareInstagram /></a>
                                        </li>
                                        <li className="flex mt-4 w-[3.5rem] justify-center items-center">
                                            <a className="transition hover:text-[2.65rem]" href="https://wa.me/+2348034337148" target='_blank'><FaWhatsapp/></a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                </li>
                            </ul>
                                </nav>                            <nav><ul role="list" className="grid grid-cols-1 justify-items-center items-center">
                                <li>
                                    <div className="font-display font-semibold text-lg tracking-wider ">Quick links</div>
                                    <ul role="list" className="flex flex-col gap-y-[0.3rem] mt-4 text-sm">
                                        <li><Link href='/' className='hover:text-gray-600 '>Home</Link></li>
                                        <li><Link href='/profile' className='hover:text-gray-600 ' >Profile</Link></li>
                                        <li><Link href='/services' className='hover:text-gray-600' >Services</Link></li>
                                        <li><Link href='/team' className='hover:text-gray-600' >Our People / Team</Link></li>
                                        <li><Link href='/contact_us' className='hover:text-gray-600' >Contact</Link></li>
                                        <li><a onClick={alert_properties} className='hover:text-gray-600 cursor-pointer'>Properties</a></li>
                                    </ul>
                                </li>
                                <li>
                                </li>
                            </ul>
                                </nav>
                                    <form className="max-w-sm">
                                        <h2 className="font-display font-semibold text-lg tracking-wider ">Sign up for our newsletter</h2>
                                        <p className="mt-4 text-sm ">Subscribe.</p>
                                        <div className="relative mt-6">
                                            <input type="email" placeholder="Email address" autoComplete="email" aria-label="Email address" className="block w-full rounded-2xl border border-neutral-300/60 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"/>
                                                <div className="absolute inset-y-1 right-1 flex justify-end">
                                                    <button type="submit" aria-label="Submit" className="flex aspect-square h-full items-center justify-center rounded-xl bg-amber-950 text-white transition hover:bg-neutral-800">
                                                        <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                                                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16 3 10 .5v2H0v1h10v2L16 3Z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                </form>
                                </div>
                                </div></div>
                    <div className='flex border-t-2 border-gray-600 h-full py-3 w-full px-3 items-center justify-between'>
                        <p className='text-sm sm:text-base'>&#169; Mbelu Consulting</p>
                        <p className='text-gray-700'>built by dylexBenji</p>
          </div>

            </div>
            </div>
                    
                </div>
  )
}

export default Footer