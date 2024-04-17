import React from 'react'
import { AiFillGithub, AiFillChrome } from 'react-icons/ai'

// Project component renders the project information
const Project = ({ project }) => {

    // Optional chaining and ternary operator to check if project.liveLink is defined.
    // If defined, use project.liveLink.
    // If undefined, set liveLink to an empty string ('') so that Project component will always have a defined liveLink to use.
    const liveLink = project?.liveLink ? project.liveLink : '';

    return (
        <figure className="mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shdadow-xl z-1 sm:pr-5">
            {/* Anchor element containing image takes 3 out of 8 columns defined on smaller screens and above */}
            <a target="_blank" rel="noreferrer" href={project.liveLink} className="group h-48 col-span-3 md:h-80">
                {/* Group-hover:scale will increase image scale when hover over */}
                <img src={project.image} alt={project.name} className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg" />
            </a>
            {/* Section containing description paragraph takes 4 columns out of 8 on smaller screens and above */}
            <section className="flex flex-col col-span-4 p-4 mx-auto my-auto">
                <h5 className="text-gray-200 font-bold text-xl leading-10">
                    {project.name}
                </h5>
                <p className="text-gray-400">
                    {project.description}
                </p>
            </section>
            {/* Only 1 column span left for div containing GitHub and Chrome icons */}
            {/* Need flex-row instead of flex-direction so that both icons are displayed next to each other */}
            <figure className="flex md:flex-col sm:flex-row justify-center text-white gap-4 mx-auto pb-4">
                <a href={project.githubLink} alt="GitHub Icon" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub className="w-[55px] h-auto transition-all duration-200 hover:scale-110 cursor-pointer" />
                </a>
                <a href={project.liveLink} alt="Chrome Icon" target="_blank" rel="noopener noreferrer">
                    <AiFillChrome className="w-[55px] h-auto transition-all duration-200 hover:scale-110 cursor-pointer" />
                </a>
            </figure>
        </figure>
    )
}

export default Project
