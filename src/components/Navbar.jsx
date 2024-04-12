import React, { useState } from 'react';
// Imported from react-icons/ai
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// Installed with command npm react-router-dom
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    // Declaring state nav and function setNav to update nav state
    const [nav, setNav] = useState(false)
    // toggles value of navigation
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='px-4 sm:px-6 lg:px-8 mx-auto max-w-[1500px] has-[8vh]'>
            <div class="flex items-center justify-between h-16 lg:h-20 bg-[#223]/30 rounded-b-3xl shadow-lg px-4">

                <div class="text-white text-xl sm:text-2xl">
                    <a href='#' className='font-bold'><span>Tyler Knapp</span></a>
                </div>
                <ul class="text-gray-700 font-medium hidden lg:flex lg:items-center lg:justify-center lg:space-x-10 text-2xl">
                    <li className='p-2'><NavLink to="/" activeClassName="selected">Home</NavLink></li>
                    <li className='p-2'><NavLink to="/" activeClassName="text-black">About</NavLink></li>
                    <li className='p-2'><NavLink to="/" activeClassName="text-black">Portfolio</NavLink></li>
                    <li className='p-2'><NavLink to="/" activeClassName="text-black">Contact</NavLink></li>
                </ul>

                {/* On small screen, it will be shown */}
                {/* On medium screen and above, it will be hidden */}
                <div onClick={handleNav} className='block md:hidden text-white z-40'>
                    {/* Ternary operator: If nav is true, then AiOutlineClose icon will display. */}
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

                    <div className={nav ? 'z-30 text-gray-300 fixed h-[50%] left-0 top-0 w-full bg-[#202121] ease-in-out duration-500'
                        : 'fixed left-[-100%]'}>
                        <h1 className='text-3xl gray-primary-color m-4'>T. Knapp</h1>
                        <ul className='p-8 text-4xl ml-20'>
                            <li className='p-2'><NavLink to="/" activeClassName="selected">Home</NavLink></li>
                            <li className='p-2'><NavLink to="/" activeClassName="text-black">About</NavLink></li>
                            <li className='p-2'><NavLink to="/" activeClassName="text-black">Portfolio</NavLink></li>
                            <li className='p-2'><NavLink to="/" activeClassName="text-black">Contact</NavLink></li>
                        </ul>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Navbar