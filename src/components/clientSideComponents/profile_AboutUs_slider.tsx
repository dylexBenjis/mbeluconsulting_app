'use client'
import React from 'react'
import Slider from "react-slick";

const Profile_AboutUsSlider = (props:any) => {
    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows:false
  }
  return (
    <div className='flex h-full w-full'>
      <Slider {...settings} >{props.children}</Slider>
    </div>
  )
}

export default Profile_AboutUsSlider