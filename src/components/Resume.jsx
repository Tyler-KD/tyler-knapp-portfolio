import React from "react";
import PDF from "../documentation/Tyler Knapp Resume.pdf"

const Resume = () => {
    return (
        <section className="pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 md:h-[76vh]">
            {/* Div for Download Resume Button */}
            <section>
                <figure className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto">
                    <a target="_blank" rel="noreferrer" href={PDF} title="" className="shadow-2xl mr-4 inline-flex items-center px-6 py-4 mt-8 font-semibold text-white bg-primary-color rounded-lg transition-all duration-200 hover:scale-110 animate-bounce" role="button">
                        Download Resume
                    </a>
                </figure>

                {/* Form will display in 2 columns on mdeium or larger screens */}
                <section className="flex justify-center pt-16">
                    <section className='px-7 mx-auto grid sm:grid-cols-2 gap-20'>
                        {/* Front-end Proficiencies*/}
                        <section className='mb-4 flex flex-col col-span-1 sm:grid sm:grid-cols-1 rounded-lg bg-black/40  shadow-xl z-1 '>
                            <h6 className="text-gray-400 font-bold text-3xl p-7">Front-end Proficiencies</h6>
                            <ul className="list-disc text-gray-200 font-bold text-xl leading-10 mx-8 my-auto p-6">
                                <li>"HTML5"</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>ReactJS</li>
                                <li>Tailwind CSS</li>
                                <li>Bootstrap</li>
                                <li>Webpack</li>
                                <li>jQuery</li>
                            </ul>
                        </section>

                        {/* Back-end Proficiencies */}
                        <section className='mb-4 flex flex-col col-span-1 sm:grid sm:grid-cols-1 rounded-lg bg-black/40 shadow-xl z-1'>
                            <h6 className="text-gray-400 font-bold text-3xl p-6">Back-end Proficiencies</h6>
                            <ul className="list-disc text-gray-200 font-bold text-xl leading-10 mx-8 my-auto p-6">
                                <li>JavaScript</li>
                                <li>SQL</li>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                                <li>NodeJS</li>
                                <li>ExpressJS</li>
                                <li>Ruby on Rails</li>
                            </ul>
                        </section>

                    </section>

                </section>

            </section>

        </section>

    )


}

export default Resume