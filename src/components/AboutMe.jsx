import React from 'react';
import mobile from '../assets/mobileR.png';

const AboutMe = () => {
    return (
        <div className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16'>
            {/* bg-black/40 property is a black background with 40 opacity */}
            {/* Need to use relative position on div because image uses absolute position */}
            <div className='py-16 mb-6 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16 relative bg-black/40 max-w-[1300px] mx-auto rounded-xl'>
                <div className='p-7 mx-auto'>
                    <div>
                        {/* leading-tight and leading-relaxed affects line height */}
                        <h2 className='text-3xl font-bold leading-tight gray-primary-color sm:text-4xl lg:text-5xl'>Hello, I am <span className='italic'>Tyler Knapp</span></h2>
                        {/* Paragraph for describing me */}
                        <p className='max-w-lg mt-3 text-xl leading-relaxed text-gray-400 md:mt-8'>
                            I am a full stack developer with a certificate in full-stack development from Rice University and a Bachelor of Science Degree in Biology from Florida State University.
                            At around the age of 13, I built my first computer.  From that point on, I've been deeply rooted in building and understanding computer components.  This early exposure in
                            tech led to a fascination for digital art and post-processing software during my freelance photography.  Eventually, I found my calling in web development and I love it!
                            My hope is to constantly absorb information around me no matter the odds and learn at least one new development subject a day.  Enjoy my page
                            and feel free to contact me.  Let's code together!
                        </p>
                    </div>
                    <img className='flex md:absolute mx-auto bottom-[-30%] right-[20%] w-[240px] md:w-[400px] h-auto' src={mobile} alt="" />
                </div>

            </div>

            <div className='bg-black/40 max-w-[1300px] mx-auto rounded-xl overflow-hidden'>
                <div className='px-6 py-10'>
                    <div className='mx-auto max-w-5xl text-center'>
                        <h2 className='block w-full gray-primary-color text-3xl sm:text-4xl'>
                            Optimize your website.
                        </h2>
                        <p className='mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium
                                    leading-relaxed tracking-wide text-gray-400'>
                            Redesign your website.
                        </p>
                    </div>

                    {/* Skills section */}
                    <div className=' mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3'>
                        <div className='rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow'>
                            <h3 className='text-xl italic text-gray-200'>Customizable</h3>
                            <p className='my-4 font-normal leading-relaxed tracking-wide text-gray-400'>
                                Tailor your landing page's look and feel, from the color scheme to the font size, to the design of the page.
                            </p>
                        </div>

                        <div className='rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow'>
                            <h3 className='text-xl italic text-gray-200'>Fast Performance</h3>
                            <p className='my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400'>
                                I build templates for speed in mind, for super-fast load times so that your customers never waver.
                            </p>
                        </div>

                        <div className='rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow'>
                            <h3 className='text-xl italic text-gray-200'>Fully Featured</h3>
                            <p className='my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400'>
                                Everything needed to suceed and launch a landing page is on me, right out of the box.
                            </p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutMe
