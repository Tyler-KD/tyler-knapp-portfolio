import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

// Footer component with LinkedIn and GitHub icon links
const Footer = () => {
    return (
        <footer className='px-4 text-center has-[8vh]'>
            <figure className="flex flex-row justify-between text-white px-6 pt-8 max-w-[200px] mx-auto">
                {/* When hovering, cursor turns to pointer */}
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tyler-knapp-8717862a7/" className='transition-all duration-200 hover:scale-110 cursor-pointer' type='button'><AiFillLinkedin className='w-[70px] h-auto' /></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/Tyler-KD" className='transition-all duration-200 hover:scale-110 cursor-pointer' type='button'><AiFillGithub className='w-[70px] h-auto' /></a>
            </figure>

            {/* Date constructor and getFullYear() method Gets the year using local time */}
            <section>
                <p className="copyright-text text-white pb-8">&copy;{new Date().getFullYear()} All rights reserved.</p>
            </section>

        </footer>
    )
}

export default Footer