'use client'
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from './herosection.module.css'

const HeroSectionImageCarousel = (props:any) => {

      var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true, autoplaySpeed: 13000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
        fade: true,
    
  };

  //react slick was giving problem with slick-list and slick-track having full screen height issue. Since we cant target slick-list and slick-track due to no element tag, and we are certain in the browser they show up, using document.querySelector('className') and ignoring typescript to target elements 
  useEffect(() => {
    const sliderList = document.querySelector('.slick-list');
    const sliderTrack = document.querySelector('.slick-track');
    if (sliderList) {
      //@ts-ignore
      sliderList.style.height = '100vh';
      //@ts-ignore
      sliderTrack.style.height = '100vh';
    }
  },[])

  return (
      <div className='h-[100vh] w-[100vw]'>
          <Slider {...settings} className={Styles.slider}>{props.children}</Slider>
    </div>
  )
}

export default HeroSectionImageCarousel