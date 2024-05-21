import React from "react";
import Project from "./Project";

// Portfolio component displays deployed projects or applications
const Portfolio = () => {
    // projects is an array of project objects.  
    // Each object in the array is passed as a prop to the Project component,
    // which then renders the project information.
    const projects = [
        {
            name: "Foodr",
            description: "Collaborative quiz application that helps users decide what to eat based on various choices",
            image: "/assets/Foodr After Screenshot.png",
            githubLink: "https://github.com/camwhritenour/Foodr",
            liveLink: "https://camwhritenour.github.io/Foodr/"
        },
        {
            name: "Employee Locator",
            description: "Manage a company's employee database using Node.js, Inquirer, and MySQL",
            image: "/assets/Employee Locator screenshot (1).png",
            githubLink: "https://github.com/Tyler-KD/employee-locator",
            liveLink: "https://github.com/Tyler-KD/employee-locator"
        },
        {
            name: "E-Commerce Back End Object-Relational Mapping (ORM)",
            description: "Back end for an e-commerce site built to take a working Express.js API and configure it to use Sequelize to interact with a MySQL database",
            image: "/assets/E-Commerce Back End Insomnia Core Routes.png",
            githubLink: "https://github.com/Tyler-KD/e-commerce-back-end-object-relational-mapping-orm-",
            liveLink: "https://github.com/Tyler-KD/e-commerce-back-end-object-relational-mapping-orm-"
        },
        {
            name: "Tech Wire",
            description: "Full-stack application where developers can publish blog posts and comments on other developers' posts as well following the MVC paradigm",
            image: "/assets/Tech Wire Homepage.png",
            githubLink: "https://github.com/Tyler-KD/tech-wire",
            liveLink: "https://tech-wire-3efc7fd046fa.herokuapp.com/"
        },
        {
            name: "Read Red and White",
            description: "Collaborative full stack application which allows users to write, share, and pair book reviews with a perfect wine selection",
            image: "/assets/Read Red and White homepage.png",
            githubLink: "https://github.com/Tyler-KD/Read-Red-and-White",
            liveLink: "https://read-red-and-white-7daadef70c76.herokuapp.com/"
        },
        {
            name: "PWA Just Another Text Editor",
            description: "Text Editor that runs in the browser with or without an internet connection",
            image: "/assets/PWA Just Another Text Editor Registered Service worker.png",
            githubLink: "https://github.com/Tyler-KD/PWA-Just-Another-Text-Editor",
            liveLink: "https://pwa-just-another-text-editor.onrender.com/"
        },
        {
            name: "devHub",
            description: "Collaborative MERN stack application serving as a centralized hub for developers to showcase skills, share projects, and engage with enthusiasts",
            image: "/assets/devHub Homepage.png",
            githubLink: "https://github.com/Tyler-KD/MyTypeOfDev",
            liveLink: "https://mytypeofdev-2vjm.onrender.com/"
        },
    ];

    // Map over an array of project objects
    return (
        <section className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 '>
            {/* On small screens and above, there will be 2 grid columns */}
            {/* On mobile screens, there will be default only 1 column */}
            {/* gap-6 between all items */}
            <section className='px-7 mx-auto grid sm:grid-cols-2 gap-6'>
                {projects.map((project) => (
                    <Project key={project.name} project={project?.liveLink ? project : {...project, liveLink: ""}} />
                ))}
            </section>
        </section>
    );
};

export default Portfolio