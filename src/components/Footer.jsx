import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='px-4 text-center has-[8vh]'>
            <h2>Tyler Knapp</h2>
            <div className="flex flex-row justify-between text-white p-8 max-w-[500px] mx-auto">
                {/* When hovering, cursor turns to pointer */}
                <a href="#" className='transition-all duration-200 hover:scale-110 cursor-pointer'><AiFillLinkedin className='w-[70px] h-auto'/></a>
                <a className='transition-all duration-200 hover:scale-110 cursor-pointer'><AiFillGithub className='w-[70px] h-auto'/></a>
                {/* {new Date.getFullYear()&copy} */}

            </div>
            


        </footer>
    )
}

export default Footer