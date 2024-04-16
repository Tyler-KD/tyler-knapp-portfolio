import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  const [hero, setHero] = useState(false)
  const handleHero = () => {
    setHero(!hero)
  }
  return (
    // min-h-screen sets minimum height of Main div element to 100 vh (100% of viewport's height)
    <div className="relative pt-16 min-h-screen sm:pt-16 sm:pb-16 lg:pb-18 overflow-hidden">

      <div className="px-6 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl font-bold sm:text-6xl gray-primary-color">
            Welcome to my Portfolio
          </h1>

          <p className="mt-5 text-base text-white sm:text-xl">
            Do you need help in frontend development? Don't hesitate to contact me!
          </p>

          <div onClick={handleHero}>
            <NavLink to="/about" title="" className="shadow-2xl mr-4 inline-flex items-center px-6 py-4 mt-8 font-semibold text-white bg-primary-color rounded-lg transition-all duration-200 hover:scale-110" role="button">
              About me
            </NavLink>
            <NavLink to="/portfolio" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white border rounded-lg transition-all duration-200 hover:scale-110" role="button">
              View Work
            </NavLink>
          </div>

          {/* Technologies */}
          <div className="flex flex-row justify-between text-white p-8 max-w-[400px] mx-auto">
          {/* When hovering, cursor turns to pointer */}
          <img className='transition-all duration-200 hover:scale-110 cursor-pointer w-[70px] h-auto motion-safe:animate-spin' src="/assets/react.png" alt="React icon" />
          <img className='transition-all duration-200 hover:scale-110 cursor-pointer w-[70px] h-auto animate-bounce' src="/assets/tailwind.png" alt="Tailwind icon" />
          <img className='transition-all duration-200 hover:scale-110 cursor-pointer w-[70px] h-auto animate-pulse' src="/assets/javascript.png" alt="JavaScript icon" />
        </div>

        </div>

      </div>

      {/* Div to hold images */}
      {/* Can add sm:hidden after block to display images only on mobile */}
      <div className="relative bottom-0 z-10 flex mx-auto justify-center">
        <img className="left-[-20px] top-[-20px] sm:left-20 sm:top-[-200px] absolute block w-auto h-[150px] sm:h-[500px]" src="/assets/notebookL.png" alt="Lenovo Laptop" />
        <img className="absolute sm:relative w-auto bottom-[-110px] right-[-70px] sm:bottom-0 sm:right-0 h-[100px] sm:h-[380px]" src="/assets/notebookM.png" alt="Macbook Laptop" />
        <img className="right-0 sm:bottom-0 absolute block h-auto w-[800px] sm:w-[800px]" src="/assets/ProPicB5.png" alt="Portfolio Photo 1" />

      </div>

    </div>
  )
}

export default Hero
