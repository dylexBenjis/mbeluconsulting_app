'use client'
import React from 'react'
import {Link} from 'react-scroll'

interface MyComponentProps {
  scrollToElement: string; // Example: Specify that myProp should be a string
}


const ShowMore_ScrollButton: React.FC<MyComponentProps> = ({ scrollToElement }) => {
    
  const offSet_func: number = (() => {
    if (scrollToElement === 'needAnAppraisal') {
      return 65
    } else if (scrollToElement === 'services_and_team') {
      return -10
    }
    else {
      return 0
    }
  })() as number;
    

  return (
    
      <Link 
      to={scrollToElement}
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={offSet_func}
      delay={100}
      isDynamic={true}
      ignoreCancelEvents={false}
          spyThrottle={500}>
          <div className='absolute bottom-0 right-[50%] translate-x-[50%] bg-amber-700 cursor-pointer px-6 py-4 z-2' >
          Show more
      </div>
</Link>
  )
}

export default ShowMore_ScrollButton