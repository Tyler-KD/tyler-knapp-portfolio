import React from 'react';
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.png';
// Import Github and Chrome icons from react-icons
import { AiFillGithub, AiFillChrome } from 'react-icons/ai';

const Portfolio = () => {
  return (
    <div className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 h-[92vh]'>
        {/* On small screens and above, there will be 2 grid columns */}
        {/* On mobile screens, there will be default only 1 column */}
        {/* gap-6 between all items */}
        <div className='px-7 mx-auto grid sm:grid-cols-2 gap-6'>

            <div className='mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5'>
                {/* Anchor element containing image takes 3 out of 8 columns defined on smaller screens and above */}
                <a href="/" className='group h-48 col-span-3 md:h-80'>
                    {/* Group-hover:scale will increase image scale when hover over */}
                    <img src={proj1} alt="" className='h-full w-full object-cover object-center transition
                                                        duration-200 group-hover:scale-110 rounded-lg'/>

                </a>
                {/* Div containing description paragraph takes 4 columns out of 8 on smaller screens and above */}
                <div className='flex flex-col col-span-4 p-4 mx-auto my-auto'>
                    <h2 className='text-gray-200 font-bold text-xl leading-10'>
                        Project #1
                    </h2>
                    <p className='text-gray-400'>
                        Here is the description for Project #1
                    </p>
                </div>
                {/* Only 1 column span left for div containing GitHub and Chrome icons */}
                {/* Need flex-row instead of flex-direction so that both icons are displayed next to each other */}
                <div className='flex flex-row justify-between text-white gap-4 mx-auto pb-4'>
                    <AiFillGithub className='w-[55px] h-auto'/>
                    <AiFillChrome className='w-[55px] h-auto'/>
                </div>
            </div>

            <div className='mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5'>
                {/* Anchor element containing image takes 3 out of 8 columns defined on smaller screens and above */}
                <a href="/" className='group h-48 col-span-3 md:h-80'>
                    {/* Group-hover:scale will increase image scale when hover over */}
                    <img src={proj2} alt="" className='h-full w-full object-cover object-center transition
                                                        duration-200 group-hover:scale-110 rounded-lg'/>

                </a>
                {/* Div containing description paragraph takes 4 columns out of 8 on smaller screens and above */}
                <div className='flex flex-col col-span-4 p-4 mx-auto my-auto'>
                    <h2 className='text-gray-200 font-bold text-xl leading-10'>
                        Project #2
                    </h2>
                    <p className='text-gray-400'>
                        Here is the description for Project #2
                    </p>
                </div>
                {/* Only 1 column span left for div containing GitHub and Chrome icons */}
                {/* Need flex-row instead of flex-direction so that both icons are displayed next to each other */}
                <div className='flex flex-row justify-between text-white gap-4 mx-auto pb-4'>
                    <AiFillGithub className='w-[55px] h-auto'/>
                    <AiFillChrome className='w-[55px] h-auto'/>
                </div>
            </div>

            <div className='mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5'>
                {/* Anchor element containing image takes 3 out of 8 columns defined on smaller screens and above */}
                <a href="/" className='group h-48 col-span-3 md:h-80'>
                    {/* Group-hover:scale will increase image scale when hover over */}
                    <img src={proj3} alt="" className='h-full w-full object-cover object-center transition
                                                        duration-200 group-hover:scale-110 rounded-lg'/>

                </a>
                {/* Div containing description paragraph takes 4 columns out of 8 on smaller screens and above */}
                <div className='flex flex-col col-span-4 p-4 mx-auto my-auto'>
                    <h2 className='text-gray-200 font-bold text-xl leading-10'>
                        Project #3
                    </h2>
                    <p className='text-gray-400'>
                        Here is the description for Project #3
                    </p>
                </div>
                {/* Only 1 column span left for div containing GitHub and Chrome icons */}
                {/* Need flex-row instead of flex-direction so that both icons are displayed next to each other */}
                <div className='flex flex-row justify-between text-white gap-4 mx-auto pb-4'>
                    <AiFillGithub className='w-[55px] h-auto'/>
                    <AiFillChrome className='w-[55px] h-auto'/>
                </div>
            </div>

            <div className='mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5'>
                {/* Anchor element containing image takes 3 out of 8 columns defined on smaller screens and above */}
                <a href="/" className='group h-48 col-span-3 md:h-80'>
                    {/* Group-hover:scale will increase image scale when hover over */}
                    <img src={proj4} alt="" className='h-full w-full object-cover object-center transition
                                                        duration-200 group-hover:scale-110 rounded-lg'/>

                </a>
                {/* Div containing description paragraph takes 4 columns out of 8 on smaller screens and above */}
                <div className='flex flex-col col-span-4 p-4 mx-auto my-auto'>
                    <h2 className='text-gray-200 font-bold text-xl leading-10'>
                        Project #4
                    </h2>
                    <p className='text-gray-400'>
                        Here is the description for Project #4
                    </p>
                </div>
                {/* Only 1 column span left for div containing GitHub and Chrome icons */}
                {/* Need flex-row instead of flex-direction so that both icons are displayed next to each other */}
                <div className='flex flex-row justify-between text-white gap-4 mx-auto pb-4'>
                    <AiFillGithub className='w-[55px] h-auto'/>
                    <AiFillChrome className='w-[55px] h-auto'/>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Portfolio
