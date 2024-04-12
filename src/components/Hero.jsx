import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import profilepic from '../assets/profilepicB.png';
import notebookL from '../assets/notebookL.png';
import notebookM from '../assets/notebookM.png';

const Hero = () => {
  return (
    <div className="relative pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-18 overflow-hidden h-[92vh]">

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-6xl gray-primary-color">
                I will solve your frontend
            </h1>

            <p className="mt-5 text-base text-white sm:text-xl">
                Do you need help in frontend development? Don't hesitate to contact me!
            </p>

            <div>
                <a href="#" title="" className="shadow-2xl mr-4 inline-flex items-center px-6 py-4 mt-8 font-semibold text-white bg-primary-color rounded-lg transition-all duration-200 hover:scale-110" role="button">
                    Download Resume
                </a>
                <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white border rounded-lg transition-all duration-200 hover:scale-110" role="button">
                    View Work
                </a>
            </div>

            {/* Div to hold LinkedIin, GitHub, and Instagram icons / links */}
            {/* Anchor elements hold links */}
            <div className="flex flex-row justify-between text-white p-8 max-w-[500px] mx-auto">
                {/* When hovering, cursor turns to pointer */}
                <a href="#" className='transition-all duration-200 hover:scale-110 cursor-pointer'><AiFillLinkedin className='w-[70px] h-auto'/></a>
                <a className='transition-all duration-200 hover:scale-110 cursor-pointer'><AiFillGithub className='w-[70px] h-auto'/></a>
                <a className='transition-all duration-200 hover:scale-110 cursor-pointer'><AiFillInstagram className='w-[70px] h-auto'/></a>

            </div>



        </div>
      </div>

      {/* Div to hold images */}
      {/* Can add sm:hidden after block to display images only on mobile */}
      <div className="relative bottom-0 z-10 flex mx-auto justify-center">
        <img className="left-[-20px] top-[-20px] sm:left-20 sm:top-[-200px] absolute block w-auto h-[150px] sm:h-[500px]" src={notebookL} alt="" />
        <img className="absolute sm:relative w-auto bottom-[-110px] right-[-70px] sm:bottom-0 sm:right-0 h-[100px] sm:h-[380px]" src={notebookM} alt="" />
        <img className="right-0 sm:bottom-0 absolute block h-auto w-[800px] sm:w-[900px]" src={profilepic} alt="" />

      </div>

    </div>
  )
}

export default Hero
