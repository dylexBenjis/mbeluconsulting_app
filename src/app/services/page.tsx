import React from 'react'
import styles from '@/app/page.module.css'
import Image from 'next/image'


const page = () => {
  return (
      <div className='relative flex flex-col top-[8.5rem] mb-[12rem] h-auto gap-y-10'>
            <div className="relative h-[8rem]">
                    <div className='absolute h-full w-full'>
                    <Image src='https://mceastcourt.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-15-at-3.27.48-PM.jpeg' alt='' layout='fill' objectFit='cover' />
                </div>
                <div className='absolute flex items-center h-full w-full  backdrop-opacity-10 bg-amber-950/90 backdrop-invert '>
                        <div className={styles.container}>
                            <div className='flex h-full items-center text-4xl font-bold text-white'>Services</div> 
                        </div>
                    </div>
          </div>
            <div className={styles.container} style={{height:'auto', paddingTop:'3rem'}}>
              <div className='text-amber-900 text-3xl sm:text-5xl font-semibold italic text-center'>We Have You Covered</div>
              <div className='text-center pt-3'>WE PROUDLY OFFER SERVICES IN THESE AREAS:</div>
              </div>
          <div>
            <div className={styles.container} style={{height:'auto', paddingTop:'3rem', paddingBottom:'5rem'}}>
                  <div className='flex h-full items-center text-black'>
                  <div className='grid grid-cols-1 lg:grid-cols-2 h-auto gap-y-10 gap-x-[10rem]'>
                      <div className='flex flex-col'>
                          <div className='text-2xl sm:text-3xl font-semibold mb-5'>PROPERTY VALUATION</div>
                          <div>
                                  We are experienced and qualified Valuers in all land and building property asset;
                                  <span className='font-semibold'>plant and machinery, furniture, fixtures & fittings for various purposes: mortgages, compulsory acquisition and compensation
                                    </span>  throughout the Federation. We are also equipped and positioned to assist with national portfolio valuations through strategic relationships with top appraisers across the country.
                          </div>
                      </div>
                      <div className='flex flex-col'>
                          <div className='text-2xl sm:text-3xl font-semibold mb-5'>EXPERT WITNESS</div>
                          <div>
                                  The disposition of real estate is often the subject of litigation. We are frequently called upon to testify in court regarding appraisal methodology, appraisal standards, or the value of property or properties involved in a dispute. Methodology and standards testimony typically involves generally accepted valuation principles and methods, and applicable standards. Standing as an expert witness is a common assignment that may involve valuation, review, or consulting services.
                          </div>
                      </div>
                      <div className='flex flex-col'>
                          <div className='text-2xl sm:text-3xl font-semibold mb-5'>RENTAL SURVEY</div>
                          <div>
                                The study(ies) of current rental is very important in our day to day activities. We continually conduct these analyses to establish rents and marketing strategies for leasing decisions, development projects and to facilitate decisions involving property management and investment. In some cases, such a study entails an appraisal and in other cases the assignment may be classified as valuation consulting.
                          </div>
                      </div>
                      <div className='flex flex-col'>
                          <div className='text-2xl sm:text-3xl font-semibold mb-5'>REAL ESTATE BROKERAGE</div>
                          <div>
                                We professionally assist our client(s), investors, developers and lenders with selling their properties and buying of properties within their choice locations. By providing our objective opinion of current market value, which will assist them to make informed decisions that will positively impact their bottom line. Our professional team spans across a wide range of both commercial and residential property types. This deep understanding for the each individual asset class and how market trends coincide and affect one another gives us a unique edge that consistently results in our services being superior based on the measurement of accuracy. We apply advanced appraisal principals using the most accurate market data available; we provide unrivaled market insight that is invaluable to our clients. We consistently go above and beyond to provide the best quality services that will result in the best outcome possible for our clients, while maintaining objectivity.
                          </div>
                      </div>
                  </div>
                  </div> 
            </div>
            <div className={styles.container} style={{height:'auto', backgroundColor:'black', borderRadius:'2.5rem', paddingBottom:'2rem'}}>
                  <div className='flex h-auto py-5 text-2xl sm:text-3xl font-semibold text-white'>
                    REAL ESTATE CONSULTING
                  </div>
                  <div className='grid grid-cols-1 lg:grid-cols-3 h-auto gap-y-5'>
                      <div className='flex flex-col text-white'>
                          <div className='text-lg sm:text-xl font-semibold'>Feasibility Studies</div>
                          <div>
                            <ul className='list-disc list-inside'>
                                <li>Cost-Benefit Analysis</li>
                                <li> Ground-Up Development</li>
                                <li> Redevelopment</li>
                                <li>  Conversion</li>
                                <li>  Expansion</li>
                                <li>  Economic Feasibility Analysis</li>
                                <li> Use Stack / Zoning Area Allocation</li>
                            </ul>
                          </div>
                      </div>
                      <div className='flex flex-col text-white'>
                          <div className='text-lg sm:text-xl font-semibold'>Market Data</div>
                          <div>
                            <ul className='list-disc list-inside'>
                                <li> Property Characteristics</li>
                                <li>Property Records</li>
                                <li>Comparable Sales</li>
                                <li>Rent Comps</li>
                                <li> Expense Comps</li>
                                <li>Investment Rates</li>
                                <li> Building Applications / Permits</li>
                              </ul>
                          </div>
                      </div>
                      <div className='flex flex-col text-white'>
                          <div className='text-lg sm:text-xl font-semibold'>Due Diligence</div>
                          <div>
                            <ul className='list-disc list-inside'>
                                <li>Property Acquisitions</li>
                                <li>Property Dispositions</li>
                                <li> Risk Analysis</li>
                                <li> Operations Strategy</li>
                                <li> Capital Market Analysis </li>
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