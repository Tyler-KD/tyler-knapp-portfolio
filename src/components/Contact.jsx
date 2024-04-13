import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

const Contact = () => {
    return (
        <div className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 md:h-[92vh]'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 bg-[#223]/30 rounded-3xl'>
                {/* Contact introduction */}
                <div className='mb-4'>
                    <div className='mb-6 max-w-3xl text-center sm:text-center md:mx-auto'>
                        {/* Tracking-tight decreases letter spacing */}
                        <h2 className='mb-4 font-bold tracking-tight gray-primary-color text-3xl sm:text-5xl'>
                            Let's connect
                        </h2>
                        <p className='mx-auto mt-4 max-w-3xl text-xl text-gray-400'>
                            and start working on amazing things
                        </p>
                    </div>
                </div>

                {/* Form will display in 2 columns on medium or larger screens */}
                {/* By default, will display only 1 column on small screens */}
                <div className='flex justify-center'>
                    <div className='grid md:grid-cols-2'>
                        {/* My Contact Information */}
                        <div className='my-auto pr-6'>
                            <ul>
                                <li className='flex'>
                                    <AiFillLinkedin className='w-[70px] h-auto text-gray-300' />
                                    <div className='m-5'>
                                        <h3 className='text-lg font-bold text-gray-200'>My Address</h3>
                                        <p className='text-gray-400'>1111 xxx Street</p>
                                        <p className='text-gray-400'>xxx City</p>
                                    </div>
                                </li>
                                <li className='flex'>
                                    <AiFillGithub className='w-[70px] h-auto text-gray-300' />
                                    <div className='m-5'>
                                        <h3 className='text-lg font-bold text-gray-200'>Contact</h3>
                                        <p className='text-gray-400'>Mobile: xxxx</p>
                                        <p className='text-gray-400'>Mail: xxx@xxx.com</p>
                                    </div>
                                </li>
                                <li className='flex'>
                                    <AiFillInstagram className='w-[70px] h-auto text-gray-300' />
                                    <div className='m-5'>
                                        <h3 className='text-lg font-bold text-gray-200'>Working</h3>
                                        <p className='text-gray-400'>Monday - Friday: 8:00 - 17:00</p>
                                        <p className='text-gray-400'>Saturday &amp; Sunday: 8:00-12:00</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* User Contact Form */}
                        <div className='max-w-6xl p-5 md:p-12' id="form">
                            <h2 className='mb-4 text-2xl font-bold text-gray-300'>Ready to Get Started?</h2>
                            {/* Endpoint for collecting form submission */}
                            <form action="https://getform.io/f/pboxzmda" method="POST">
                                <div className='mb-6'>
                                    <div className='mx-0 mb-1 sm:mb-4'>
                                        <div className='mx-0 mb-1 sm:mb-4'>
                                            <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0' name="name" />
                                        </div>
                                        <div className='mx-0 mb-1 sm:mb-4'>
                                            <input type="email" id="email" autoComplete="email" placeholder="Your email address" className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0' name="email" />
                                        </div>
                                    </div>
                                    <div className='mx-0 mb-1 sm:mb-4'>
                                        <textarea name="textarea" id="textarea" cols="30" rows="5" placeholder="Write your message..." className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0'></textarea>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button type="submit" className='w-full bg-primary-color text-white px-6 py-3 font-xl rounded-md sm:mb-0'>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
