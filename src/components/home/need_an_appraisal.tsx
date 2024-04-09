import React from 'react'
import styles from "../../app/page.module.css";


const Need_an_appraisal = () => {
  return (
      <div className='h-screen'>
            <div className="flex mx-auto max-w-[1300px] justify-center items-center h-screen">
                <div className={styles.container}>
                    <div>
                        <h3 className='text-2xl/7 sm:text-4xl/[3.5rem] font-semibold mb-3 sm:mb-6 text-amber-950 text-center'>Need an appraisal? <br/><span className='italic'>We can help.</span></h3>
                        <div className="text-base/7 sm:text-lg/10 text-center">
                            <p className='mb-3'>you&#39;re just a few clicks away.<br/>
                            Simply proceed to our appraisal order form and we&#39;ll be in touch.</p>
                            <a className="inline-flex px-4 py-4 text-sm font-semibold border-black border-2 transition hover:bg-neutral-800" href="/contact">
                                <span className="relative top-px">ORDER FOR AN APPRAISAL</span>
                            </a>
                      </div>
                    </div>
                </div>
            </div>
      </div>
  )
}

export default Need_an_appraisal