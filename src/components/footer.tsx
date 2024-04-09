import React from 'react'
import styles from '@/app/page.module.css'
import memberOfImage1 from '@/images/nievs.png'
import Image from 'next/image'


const Footer = () => {
    return (
        <div className='flex h-auto sm:h-[auto]  w-screen bg-gray-500'>
            <div className={styles.container} style={{width:'100%', height:'100%', paddingTop:'2rem'}}>
      <div   className='grid grid-rows-[auto_auto] gap-y-5 h-full w-full'>
                    <div className='flex justify-center items-center h-full py-5'>
                        <div className="grid grid-cols-1 gap-x-[10rem] gap-y-16 lg:grid-cols-2">
                            <div>
                                <p className='flex justify-center font-semibold text-xl mb-5'>Member of</p>
                                <div className='grid grid-cols-1 gap-y-3 mb-3 sm:grid-cols-3 justify-items-center items-center'>
                                <Image src={memberOfImage1} alt='' style={{height:'100px', width:'100px'}}/>
                                <Image src={memberOfImage1} alt='' style={{height:'100px', width:'100px'}}/>
                                    <Image src={memberOfImage1} alt='' style={{ height: '100px', width: '100px' }} />
                                    </div>
                                <div className='grid grid-cols-1 gap-y-3 sm:grid-cols-2 justify-items-center items-center'>
                                <Image src={memberOfImage1} alt='' style={{height:'100px', width:'100px'}}/>
                                <Image src={memberOfImage1} alt='' style={{height:'100px', width:'100px'}}/>
                                    </div>
                            </div>
                            <div className='flex flex-col sm:flex-row  gap-y-16 sm:gap-x-12'>
                            <nav><ul role="list" className="grid grid-cols-1 justify-items-center items-center">
                                <li>
                                    <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">Work</div>
                                    <ul role="list" className="mt-4 text-sm text-neutral-700">
                                        <li className="mt-4">
                                            <a className="transition hover:text-neutral-950" href="/work/family-fund">FamilyFund</a>
                                        </li><li className="mt-4">
                                            <a className="transition hover:text-neutral-950" href="/work/unseal">Unseal</a>
                                        </li>
                                        <li className="mt-4">
                                            <a className="transition hover:text-neutral-950" href="/work/phobia">Phobia</a>
                                        </li>
                                        <li className="mt-4">
                                            <a className="transition hover:text-neutral-950" href="/work">See all <span aria-hidden="true">→</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                </li>
                            </ul>
                                </nav>
                                    <form className="max-w-sm">
                                        <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">Sign up for our newsletter</h2>
                                        <p className="mt-4 text-sm text-neutral-700">Subscribe to get the latest design news, articles, resources and inspiration.</p>
                                        <div className="relative mt-6">
                                            <input type="email" placeholder="Email address" autoComplete="email" aria-label="Email address" className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"/>
                                                <div className="absolute inset-y-1 right-1 flex justify-end">
                                                    <button type="submit" aria-label="Submit" className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800">
                                                        <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                                                            <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16 3 10 .5v2H0v1h10v2L16 3Z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                </form>
                                </div>
                                </div></div>
                    <div className='flex text-black border-t-2 border-gray-600 h-full py-3 w-full px-3 items-center justify-between'>
                        <p className='text-sm sm:text-base'>&#169; Mbelu Consulting</p>
                        <p>linkedin x</p>
          </div>

            </div>
            </div>
                    
                </div>
  )
}

export default Footer