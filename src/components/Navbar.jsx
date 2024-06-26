import React, { useState } from 'react';
// Imported from react-icons/ai
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// Installed with command npm react-router-dom
import { NavLink } from 'react-router-dom'

// Navbar component that's fixed to the top of the page and allows switching between pages.
const Navbar = () => {
    // Declaring state nav and function setNav to update nav state
    const [nav, setNav] = useState(false)
    // toggles value of navigation
    const handleNav = () => {
        setNav(!nav)
    }

    return (

        <nav className="flex items-center justify-between h-16 lg:h-20 bg-[#223]/30 rounded-b-3xl shadow-lg px-4">

            <h1 className="text-white text-xl sm:text-2xl transition-all duration-200 hover:scale-110">
                <NavLink to="/" className='font-bold'><span>Tyler Knapp</span></NavLink>
            </h1>
            <ul className="text-gray-700 font-medium hidden lg:flex lg:items-center lg:justify-center lg:space-x-10 text-2xl">
                {/* to="/" properties match url paths when NavLinks are clicked */}
                {/* React NavLink prevents browser refresh when user moves from one page to another */}
                <li className='p-2 transition-all duration-200 hover:scale-110'><NavLink to="/" activeclassname="selected">Home</NavLink></li>
                <li className='p-2 transition-all duration-200 hover:scale-110'><NavLink to="/about" activeclassname="text-black">About me</NavLink></li>
                <li className='p-2 transition-all duration-200 hover:scale-110'><NavLink to="/portfolio" activeclassname="text-black">Portfolio</NavLink></li>
                <li className='p-2 transition-all duration-200 hover:scale-110'><NavLink to="/contact" activeclassname="text-black">Contact</NavLink></li>
                <li className='p-2 transition-all duration-200 hover:scale-110'><NavLink to="/resume" activeclassname="text-black">Resume</NavLink></li>
            </ul>

            {/* On small screen, dropdown menu will be shown */}
            {/* On medium screen and above, it will be hidden */}
            <section onClick={handleNav} className='block md:hidden text-white z-40 cursor-pointer'>
                {/* Ternary operator: If nav is true, then AiOutlineClose icon will display. */}
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                
                <section className={nav ? 'z-30 text-gray-300 fixed left-0 top-0 w-full bg-[#202121] ease-in-out duration-500'
                    : 'fixed left-[-100%]'}>
                    <h2 className='text-3xl gray-primary-color m-4'>T. Knapp</h2>
                    <ul className='p-8 text-4xl ml-20'>
                        <li className='p-2 transition-all duration-200 hover:scale-110'><NavLink to="/" activeclassname="selected">Home</NavLink></li>
                        <li className='p-2 transition-all duration-200 hover:scale-110'><NavLink to="/about" activeclassname="text-black">About me</NavLink></li>
                        <li className='p-2 transition-all duration-200 hover:scale-110'><NavLink to="/portfolio" activeclassname="text-black">Portfolio</NavLink></li>
                        <li className='p-2 transition-all duration-200 hover:scale-110'><NavLink to="/contact" activeclassname="text-black">Contact</NavLink></li>
                        <li className='p-2 transition-all duration-200 hover:scale-110'><NavLink to="/resume" activeclassname="text-black">Resume</NavLink></li>
                    </ul>

                </section>


            </section>
        </nav>


    )
}

export default Navbar
