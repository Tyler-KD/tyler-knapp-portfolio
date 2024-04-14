import React from "react";

const Resume = () => {
    return (
        <div className="pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 md:h-[92vh]">
            {/* Div for Download Resume Button */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 bg-[#223]/30 rounded-3xl">
                <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto">
                    <a href="#" title="" className="shadow-2xl mr-4 inline-flex items-center py-4 mt-8 font-semibold text-white bg-primary-color rounded-lg transition-all duration-200 hover:scale-110" role="button">
                        Download Resume
                    </a>
                </div>

                {/* Form will display in 2 columns on mdeium or larger screens */}
                <div className="flex justify-center">
                    <div className="grid md:grid-cols-2">
                        {/* Front-end Proficiencies*/}
                        <div className="my-auto pr-6">
                            

                        </div>

                        {/* Back-end Proficiencies */}
                        <div className="my-auto pr-6">

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

    
}

export default Resume