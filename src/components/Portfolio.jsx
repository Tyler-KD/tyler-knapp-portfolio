import React from 'react';

// Import Github and Chrome icons from react-icons
import { AiFillGithub, AiFillChrome } from 'react-icons/ai';

const Portfolio = () => {
    return (
        <section className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 '>
            {/* On small screens and above, there will be 2 grid columns */}
            {/* On mobile screens, there will be default only 1 column */}
            {/* gap-6 between all items */}
            <section className='px-7 mx-auto grid sm:grid-cols-2 gap-6'>

                <figure className='mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5'>
                    {/* Anchor element containing image takes 3 out of 8 columns defined on smaller screens and above */}
                    <a target="_blank" rel="noreferrer" href="https://camwhritenour.github.io/Foodr/" className='group h-48 col-span-3 md:h-80'>
                        {/* Group-hover:scale will increase image scale when hover over */}
                        <img src="/assets/Foodr After Screenshot.png" alt="Foodr image" className='h-full w-full object-cover object-center transition
                                                        duration-200 group-hover:scale-110 rounded-lg'/>

                    </a>
                    {/* Div containing description paragraph takes 4 columns out of 8 on smaller screens and above */}
                    <section className='flex flex-col col-span-4 p-4 mx-auto my-auto'>
                        <h5 className='text-gray-200 font-bold text-xl leading-10'>
                            Foodr
                        </h5>
                        <p className='text-gray-400'>
                            Collaborative quiz application that helps users decide what to eat based on various choices
                        </p>
                    </section>
                    {/* Only 1 column span left for div containing GitHub and Chrome icons */}
                    {/* Need flex-row instead of flex-direction so that both icons are displayed next to each other */}
                    <figure className='flex flex-row justify-between text-white gap-4 mx-auto pb-4'>
                        {/* <a className='transition-all duration-200 hover:scale-110 cursor-pointer'><AiFillGithub className='w-[55px] h-auto'/></a>
                <a className='transition-all duration-200 hover:scale-110 cursor-pointer'><AiFillChrome className='w-[55px] h-auto'/></a> */}
                        <AiFillGithub href="https://github.com/camwhritenour/Foodr" alt='' className='w-[55px] h-auto transition-all duration-200 hover:scale-110 cursor-pointer' />
                        <AiFillChrome className='w-[55px] h-auto transition-all duration-200 hover:scale-110 cursor-pointer' />
                    </figure >
                </figure>

                <figure className='mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5'>
                    {/* Anchor element containing image takes 3 out of 8 columns defined on smaller screens and above */}
                    <a target="_blank" rel="noreferrer" href="https://github.com/Tyler-KD/employee-locator" className='group h-48 col-span-3 md:h-80'>
                        {/* Group-hover:scale will increase image scale when hover over */}
                        <img src="/assets/Employee Locator screenshot (1).png" alt="Employee Locator image" className='h-full w-full object-cover object-center transition
                                                        duration-200 group-hover:scale-110 rounded-lg'/>

                    </a>
                    {/* Div containing description paragraph takes 4 columns out of 8 on smaller screens and above */}
                    <section className='flex flex-col col-span-4 p-4 mx-auto my-auto'>
                        <h5 className='text-gray-200 font-bold text-xl leading-10'>
                            Employee Locator
                        </h5>
                        <p className='text-gray-400'>
                            Manage a company's employee database using Node.js, Inquirer, and MySQL
                        </p>
                    </section>
                    {/* Only 1 column span left for div containing GitHub and Chrome icons */}
                    {/* Need flex-row instead of flex-direction so that both icons are displayed next to each other */}
                    <figure className='flex flex-row justify-between text-white gap-4 mx-auto pb-4'>
                        <AiFillGithub className='w-[55px] h-auto transition-all duration-200 hover:scale-110 cursor-pointer' />
                        <AiFillChrome className='w-[55px] h-auto transition-all duration-200 hover:scale-110 cursor-pointer' />
                    </figure>
                </figure>

                <figure className='mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5'>
                    {/* Anchor element containing image takes 3 out of 8 columns defined on smaller screens and above */}
                    <a target="_blank" rel="noreferrer" href="https://github.com/Tyler-KD/e-commerce-back-end-object-relational-mapping-orm-" className='group h-48 col-span-3 md:h-80'>
                        {/* Group-hover:scale will increase image scale when hover over */}
                        <img src="/assets/E-Commerce Back End Insomnia Core Routes.png" alt="E-Commerce Back End Object-Relational Mapping (ORM) image" className='h-full w-full object-cover object-center transition
                                                        duration-200 group-hover:scale-110 rounded-lg'/>

                    </a>
                    {/* Div containing description paragraph takes 4 columns out of 8 on smaller screens and above */}
                    <section className='flex flex-col col-span-4 p-4 mx-auto my-auto'>
                        <h5 className='text-gray-200 font-bold text-xl leading-10'>
                            E-Commerce Back End Object-Relational Mapping (ORM)
                        </h5>
                        <p className='text-gray-400'>
                            Back end for an e-commerce site built to take a working Express.js API and configure it to use Sequelize to interact with a MySQL database
                        </p>
                    </section>
                    {/* Only 1 column span left for div containing GitHub and Chrome icons */}
                    {/* Need flex-row instead of flex-direction so that both icons are displayed next to each other */}
                    <figure className='flex flex-row justify-between text-white gap-4 mx-auto pb-4'>
                        <AiFillGithub className='w-[55px] h-auto transition-all duration-200 hover:scale-110 cursor-pointer' />
                        <AiFillChrome className='w-[55px] h-auto transition-all duration-200 hover:scale-110 cursor-pointer' />
                    </figure>
                </figure>

                <figure className='mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5'>
                    {/* Anchor element containing image takes 3 out of 8 columns defined on smaller screens and above */}
                    <a target="_blank" rel="noreferrer" href="https://tech-wire-3efc7fd046fa.herokuapp.com/" className='group h-48 col-span-3 md:h-80'>
                        {/* Group-hover:scale will increase image scale when hover over */}
                        <img src="/assets/Tech Wire Homepage.png" alt="Tech Wire image" className='h-full w-full object-cover object-center transition
                                                        duration-200 group-hover:scale-110 rounded-lg'/>

                    </a>
                    {/* Div containing description paragraph takes 4 columns out of 8 on smaller screens and above */}
                    <section className='flex flex-col col-span-4 p-4 mx-auto my-auto'>
                        <h5 className='text-gray-200 font-bold text-xl leading-10'>
                            Tech Wire
                        </h5>
                        <p className='text-gray-400'>
                            Full-stack application where developers can publish blog posts and comments on other developers' posts as well following the MVC paradigm
                        </p>
                    </section>
                    {/* Only 1 column span left for div containing GitHub and Chrome icons */}
                    {/* Need flex-row instead of flex-direction so that both icons are displayed next to each other */}
                    <figure className='flex flex-row justify-between text-white gap-4 mx-auto pb-4'>
                        <AiFillGithub className='w-[55px] h-auto transition-all duration-200 hover:scale-110 cursor-pointer' />
                        <AiFillChrome className='w-[55px] h-auto transition-all duration-200 hover:scale-110 cursor-pointer' />
                    </figure>
                </figure>

                <figure className='mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5'>
                    {/* Anchor element containing image takes 3 out of 8 columns defined on smaller screens and above */}
                    <a target="_blank" rel="noreferrer" href="https://read-red-and-white-7daadef70c76.herokuapp.com/" className='group h-48 col-span-3 md:h-80'>
                        {/* Group-hover:scale will increase image scale when hover over */}
                        <img src="/assets/Read Red and White homepage.png" alt="Read Red and White image" className='h-full w-full object-cover object-center transition
                                                        duration-200 group-hover:scale-110 rounded-lg'/>

                    </a>
                    {/* Div containing description paragraph takes 4 columns out of 8 on smaller screens and above */}
                    <section className='flex flex-col col-span-4 p-4 mx-auto my-auto'>
                        <h5 className='text-gray-200 font-bold text-xl leading-10'>
                            Read Red and White
                        </h5>
                        <p className='text-gray-400'>
                            Collaborative full stack application which allows users to write, share, and pair book reviews with a perfect wine selection
                        </p>
                    </section>
                    {/* Only 1 column span left for div containing GitHub and Chrome icons */}
                    {/* Need flex-row instead of flex-direction so that both icons are displayed next to each other */}
                    <figure className='flex flex-row justify-between text-white gap-4 mx-auto pb-4'>
                        <AiFillGithub className='w-[55px] h-auto transition-all duration-200 hover:scale-110 cursor-pointer' />
                        <AiFillChrome className='w-[55px] h-auto transition-all duration-200 hover:scale-110 cursor-pointer' />
                    </figure>
                </figure>

                <figure className='mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5'>
                    {/* Anchor element containing image takes 3 out of 8 columns defined on smaller screens and above */}
                    <a target="_blank" rel="noreferrer" href="https://pwa-just-another-text-editor.onrender.com/" className='group h-48 col-span-3 md:h-80'>
                        {/* Group-hover:scale will increase image scale when hover over */}
                        <img src="/assets/PWA Just Another Text Editor Registered Service worker.png" alt="PWA Just Another Text Editor image" className='h-full w-full object-cover object-center transition
                                                        duration-200 group-hover:scale-110 rounded-lg'/>

                    </a>
                    {/* Div containing description paragraph takes 4 columns out of 8 on smaller screens and above */}
                    <section className='flex flex-col col-span-4 p-4 mx-auto my-auto'>
                        <h5 className='text-gray-200 font-bold text-xl leading-10'>
                            PWA Just Another Text Editor
                        </h5>
                        <p className='text-gray-400'>
                            Text Editor that runs in the browser with or without an internet connection
                        </p>
                    </section>
                    {/* Only 1 column span left for div containing GitHub and Chrome icons */}
                    {/* Need flex-row instead of flex-direction so that both icons are displayed next to each other */}
                    <figure className='flex flex-row justify-between text-white gap-4 mx-auto pb-4'>
                        <AiFillGithub className='w-[55px] h-auto transition-all duration-200 hover:scale-110 cursor-pointer' />
                        <AiFillChrome className='w-[55px] h-auto transition-all duration-200 hover:scale-110 cursor-pointer' />
                    </figure>
                </figure>

            </section>

        </section>
    )
}

export default Portfolio
