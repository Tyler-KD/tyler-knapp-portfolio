import React from 'react';

// AboutMe component contains a short bio paragraph and recent portrait photo
const AboutMe = () => {
    return (
        <section className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16'>
            {/* bg-black/40 property is a black background with 40 opacity */}
            {/* Need to use relative position on div because image uses absolute position */}
            <section className='py-16 mb-6 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16 relative bg-black/40 max-w-[1300px] mx-auto rounded-xl'>
                <section className='p-7 mx-auto'>
                    <section>
                        {/* leading-tight and leading-relaxed affects line height */}
                        <h4 className='text-3xl font-bold leading-tight gray-primary-color sm:text-4xl lg:text-5xl'>Hello, I am <span className='italic'>Tyler Knapp</span></h4>
                        {/* Paragraph for describing me */}
                        <p className='max-w-lg mt-3 text-xl leading-relaxed text-stone-200 dark:text-gray-400 md:mt-8'>
                            I am a full stack developer with a certificate in full-stack development from Rice University and a Bachelor of Science Degree in Biology from Florida State University.
                            At around the age of 13, I built my first computer.  From that point on, I've been deeply rooted in building and understanding computer components.  This early exposure in
                            tech led to a fascination for digital art and post-processing software during my freelance photography.  Eventually, I found my calling in web development and I love it!
                            My hope is to constantly absorb information around me no matter the odds and learn at least one new development subject a day.  Enjoy my page
                            and feel free to contact me.  Let's code together!
                        </p>
                    </section>
                    <img className='flex md:relative mx-auto bottom-[5%] right-[20%] w-[240px] md:w-[400px] lg:absolute h-auto' src="/assets/Photo 10-29-23 Copy.jpg" alt="Portfolio Photo 2" />
                </section>
            </section>
        </section>
    )
}

export default AboutMe
