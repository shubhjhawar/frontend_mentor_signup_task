import React from 'react'
import desktopbanner from "../assets/images/illustration-sign-up-desktop.svg";

const Banner = () => {
  return (
    <div className="lg:p-4 p-0">
        <img 
            src={desktopbanner}
            alt="banner"
            className='rounded-lg max-md:transform max-md:translate-y-[-10px] w-full h-full object-cover'
        />
    </div>
  )
}

export default Banner