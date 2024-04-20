import Image from 'next/image'
import React from 'react'
import styles from '@/app/page.module.css'
import { FaXTwitter, FaFacebookF, FaLinkedin,FaSquareInstagram,FaWhatsapp } from 'react-icons/fa6'
import src1 from '@/images/team1.jpg'

const page = () => {
  return (
    <div className='relative h-auto pb-40'>
      <div className='h-[200px] sm:h-[300px] w-screen bg-fixed backdrop-brightness-100 bg-white/30' style={{ backgroundImage: "url('https://mceastcourt.com/wp-content/uploads/2021/11/image-19.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backdropFilter: 'blur(40px)', backgroundRepeat:'no-repeat', backgroundPositionY:'-200px'}}>
      </div>
      <div className='relative h-[10rem]'>
                    <div className='absolute h-[10rem] w-full'>
                    <Image src='https://mceastcourt.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-15-at-3.27.48-PM.jpeg' alt='' layout='fill' objectFit='cover' />
                </div>
                <div className='absolute flex items-center h-[10rem] w-full  backdrop-opacity-10 bg-amber-950/90 backdrop-invert '>
                        <div className={styles.container}>
                            <div className='flex h-full items-center text-4xl font-bold text-white'>Team</div> 
                        </div>
        </div></div>
                        <div className='flex items-center justify-center h-[auto] w-screen  backdrop-opacity-10 bg-white'>
                        <div className={styles.container}>
                            <div className='flex flex-col h-full w-full py-20 items-center text-4xl font-bold text-black text-center'>
                              <div className='text-amber-950 py-8'>A Company That Cares.</div>
                              <div className='text-base font-normal sm:w-[35rem]'>TEAMWORK – OUR COLLABORATIVE APPROACH IS HELPFUL AND ENCOURAGING WITH A POSITIVE CAN-DO ATTITUDE.</div>
          </div> 
          <div className='grid grid-cols-1 sm:grid-cols-3 py-10 gap-x-10 gap-y-10 justify-center items-center'>
                <div className='flex flex-col h-[35rem] w-full shadow-md border-t-8 border-amber-900 bg-gray-100'>
                    <div className="group relative h-full w-full transform overflow-hidden rounded-4xl  ">
                      <div className="absolute h-[calc(35rem/1.5)] w-full bg-indigo-50 " style={{}}>
                        <Image src='https://mceastcourt.com/wp-content/uploads/2022/10/Mbelu-e1667262673708-300x300-1.jpeg' alt="" fill={true} decoding="async" data-nimg="1" objectPosition='top' className="absolute inset-0 object-cover transition duration-700 scale-110 group-hover:scale-100" style={{ color: "transparent" }} sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw" />
                      </div>
                    </div>
                    <div className='h-[13rem] w-full bg-gray-100 transition duration-200 text-center p-5'>
                      <h3 className=" font-display text-xl font-bold tracking-tight text-slate-900 ">MBELU ANSELM,</h3>
                      <p className="text-base tracking-tight text-slate-500 transition duration-300">BSC. ANIVS, RSVBSC. ANIVS, RSV</p>
                      <p className="text-base tracking-tight text-slate-500 transition duration-300">Principal Manager</p>
                      <ul role="list" className="mt-1 text-xl flex flex-row gap-x-1 h-[1.5rem] justify-center items-center">
                          <li className="flex w-[1.4rem] justify-center items-center">
                              <a className="transition hover:text-[1.35rem]" href="/work/family-fund"><FaXTwitter/></a>
                          </li><li className="flex w-[1.4rem] justify-center items-center">
                              <a className="transition hover:text-[1.35rem]" href="/work/unseal"><FaFacebookF /></a>
                          </li>
                          <li className="flex w-[1.4rem] justify-center items-center">
                              <a className="transition hover:text-[1.35rem]" href="/work/phobia"><FaLinkedin /></a>
                          </li>
                          <li className="flex w-[1.4rem] justify-center items-center">
                              <a className="transition hover:text-[1.35rem]" href="/work"><FaSquareInstagram /></a>
                          </li>
                          <li className="flex w-[1.4rem] justify-center items-center">
                              <a className="transition hover:text-[1.35rem]" href="/work"><FaWhatsapp/></a>
                          </li>
                      </ul>
                    </div>
            </div>
            
                <div className='flex flex-col h-[35rem] w-full shadow-md border-t-8 border-amber-900 bg-gray-100'>
                    <div className="group relative h-full w-full transform overflow-hidden rounded-4xl  ">
                      <div className="absolute h-[calc(35rem/1.5)] w-full bg-indigo-50 " style={{}}>
                        <Image src='https://mceastcourt.com/wp-content/uploads/2023/04/IMG_8388-scaled-e1696548458228.jpg' alt="" fill={true} decoding="async" data-nimg="1" objectPosition='top' className="absolute inset-0 object-cover transition duration-700 scale-110 group-hover:scale-100" style={{ color: "transparent" }} sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw" />
                      </div>
                    </div>
                    <div className='h-[13rem] w-full bg-gray-100 transition duration-200 text-center p-5'>
                      <h3 className=" font-display text-xl font-bold tracking-tight text-slate-900 ">Ebede Emmanuel Onyinye,</h3>
                      <p className="text-base tracking-tight text-slate-500 transition duration-300">BSC. ANIVS, RSVBSC. ANIVS, RSV</p>
                      <p className="text-base tracking-tight text-slate-500 transition duration-300">Partner</p>
                      <ul role="list" className="mt-1 text-xl flex flex-row gap-x-1 h-[1.5rem] justify-center items-center">
                          <li className="flex w-[1.4rem] justify-center items-center">
                              <a className="transition hover:text-[1.35rem]" href="/work/family-fund"><FaXTwitter/></a>
                          </li>
                          <li className="flex w-[1.4rem] justify-center items-center">
                              <a className="transition hover:text-[1.35rem]" href="/work/phobia"><FaLinkedin /></a>
                          </li>
                      </ul>
                    </div>
                </div>
                <div className='flex flex-col h-[35rem] w-full shadow-md border-t-8 border-amber-900 bg-gray-100'>
                    <div className="group relative h-full w-full transform overflow-hidden rounded-4xl  ">
                      <div className="absolute h-[calc(35rem/1.5)] w-full bg-indigo-50 " style={{}}>
                        <Image src='https://mceastcourt.com/wp-content/uploads/2022/10/image2-1.jpeg' alt="" fill={true} decoding="async" data-nimg="1" objectPosition='top' className="absolute inset-0 object-cover transition duration-700 scale-110 group-hover:scale-100" style={{ color: "transparent" }} sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw" />
                      </div>
                    </div>
                    <div className='h-[13rem] w-full bg-gray-100 transition duration-200 text-center p-5'>
                      <h3 className=" font-display text-xl font-bold tracking-tight text-slate-900 ">EMMANUEL UWAGBOE ABBE,</h3>
                      <p className="text-base tracking-tight text-slate-500 transition duration-300">ANIVS</p>
                      <p className="text-base tracking-tight text-slate-500 transition duration-300">Partner</p>
                      <ul role="list" className="mt-1 text-xl flex flex-row gap-x-1 h-[1.5rem] justify-center items-center">
                          <li className="flex w-[1.4rem] justify-center items-center">
                              <a className="transition hover:text-[1.35rem]" href="/work/family-fund"><FaXTwitter/></a>
                          </li>
                          <li className="flex w-[1.4rem] justify-center items-center">
                              <a className="transition hover:text-[1.35rem]" href="/work/phobia"><FaLinkedin /></a>
                          </li>
                      </ul>
                    </div>
                </div>
                <div className='flex flex-col h-[35rem] w-full shadow-md border-t-8 border-amber-900 bg-gray-100'>
                    <div className="group relative h-full w-full transform overflow-hidden rounded-4xl  ">
                      <div className="absolute h-[calc(35rem/1.5)] w-full bg-indigo-50 " style={{}}>
                        <Image src='https://mceastcourt.com/wp-content/uploads/2022/10/image1.jpeg' alt="" fill={true} decoding="async" data-nimg="1" objectPosition='top' className="absolute inset-0 object-cover transition duration-700 scale-110 group-hover:scale-100" style={{ color: "transparent" }} sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw" />
                      </div>
                    </div>
                    <div className='h-[13rem] w-full bg-gray-100 transition duration-200 text-center p-5'>
                      <h3 className=" font-display text-xl font-bold tracking-tight text-slate-900 ">KENNETH OBINNA ANIGBO,</h3>
                      <p className="text-base tracking-tight text-slate-500 transition duration-300"></p>
                      <p className="text-base tracking-tight text-slate-500 transition duration-300">Partner</p>
                      <ul role="list" className="mt-1 text-xl flex flex-row gap-x-1 h-[1.5rem] justify-center items-center">
                          <li className="flex w-[1.4rem] justify-center items-center">
                              <a className="transition hover:text-[1.35rem]" href="/work/family-fund"><FaXTwitter/></a>
                          </li>
                          <li className="flex w-[1.4rem] justify-center items-center">
                              <a className="transition hover:text-[1.35rem]" href="/work/phobia"><FaLinkedin /></a>
                          </li>
                      </ul>
                    </div>
                </div>
                <div className='flex flex-col h-[35rem] w-full shadow-md border-t-8 border-amber-900 bg-gray-100'>
                    <div className="group relative h-full w-full transform overflow-hidden rounded-4xl  ">
                      <div className="absolute h-[calc(35rem/1.5)] w-full bg-indigo-50 " style={{}}>
                        <Image src='https://mceastcourt.com/wp-content/uploads/2022/10/image4-1.jpeg' alt="" fill={true} decoding="async" data-nimg="1" objectPosition='top' className="absolute inset-0 object-cover transition duration-700 scale-110 group-hover:scale-100" style={{ color: "transparent" }} sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw" />
                      </div>
                    </div>
                    <div className='h-[13rem] w-full bg-gray-100 transition duration-200 text-center p-5'>
                      <h3 className=" font-display text-xl font-bold tracking-tight text-slate-900 ">UDO ANIEKANABASI,</h3>
                      <p className="text-base tracking-tight text-slate-500 transition duration-300"></p>
                      <p className="text-base tracking-tight text-slate-500 transition duration-300">Building Technologist</p>
                      <ul role="list" className="mt-1 text-xl flex flex-row gap-x-1 h-[1.5rem] justify-center items-center">
                          <li className="flex w-[1.4rem] justify-center items-center">
                              <a className="transition hover:text-[1.35rem]" href="/work/family-fund"><FaXTwitter/></a>
                          </li>
                          <li className="flex w-[1.4rem] justify-center items-center">
                              <a className="transition hover:text-[1.35rem]" href="/work/phobia"><FaLinkedin /></a>
                          </li>
                      </ul>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      
  )
}

export default page