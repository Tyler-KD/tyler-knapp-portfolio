import React, { useState } from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineMail, AiFillMail } from 'react-icons/ai';
import { TbLocationFilled } from 'react-icons/tb';
import { AiFillSchedule } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

// useForm hook from react-hook-form handles form state and validation.
// The register function from useForm is used to register input fields with validation rules.
// The errors object contains any validation errors.
// The handleSubmit function wraps form's submit handler and takes care of form validation upon submission.
const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // onSubmit function is called with the form data.
    // It destructures the name, email, and message from the form data, and then sets window.location.href 
    // to a mailto: link with the email, subject, and body filled in.  
    // This will open the user's default email client with a new email pre-filled with the provided information.
    const onSubmit = (data) => {
        const { name, email, message } = data;
        window.location.href = `mailto:${email}?subject=Contact from ${name}&body=${message}`;
    };

    return (
        <section className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 min-h-screen'>
            <section className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 bg-[#223]/30 rounded-3xl'>
                {/* Contact introduction */}
                <section className='mb-4'>
                    <section className='mb-6 max-w-3xl text-center sm:text-center md:mx-auto'>
                        {/* Tracking-tight decreases letter spacing */}
                        <h6 className='mb-4 font-bold tracking-tight gray-primary-color text-3xl sm:text-5xl'>
                            Let's connect
                        </h6>
                        <p className='mx-auto mt-4 max-w-3xl text-xl text-gray-400'>
                            and start working on amazing things
                        </p>
                    </section>
                </section>

                {/* Form will display in 2 columns on medium or larger screens */}
                {/* By default, will display only 1 column on small screens */}
                <section className='flex justify-center'>
                    <section className='grid md:grid-cols-2'>
                        {/* My Contact Information */}
                        <section className='my-auto pr-6'>
                            <ul>
                                <li className='flex'>
                                    <TbLocationFilled className='w-[70px] h-auto text-gray-300' />
                                    <section className='m-5'>
                                        <h6 className='text-lg font-bold text-gray-200'>My Location</h6>
                                        <p className='text-gray-400'>Houston,</p>
                                        <p className='text-gray-400'>Texas</p>
                                    </section>
                                </li>
                                <li className='flex'>
                                    <AiFillMail className='w-[70px] h-auto text-gray-300' />
                                    <section className='m-5'>
                                        <h6 className='text-lg font-bold text-gray-200'>Contact</h6>
                                        <p className='text-gray-400'>Mobile: xxxx</p>
                                        <p className='text-gray-400'>Mail: tyler.kd.knapp@gmail.com</p>
                                    </section>
                                </li>
                                <li className='flex'>
                                    <AiFillSchedule className='w-[70px] h-auto text-gray-300' />
                                    <section className='m-5'>
                                        <h6 className='text-lg font-bold text-gray-200'>Working</h6>
                                        <p className='text-gray-400'>Monday - Friday: 8:00 - 17:00</p>
                                        <p className='text-gray-400'>Saturday &amp; Sunday: 8:00-12:00</p>
                                    </section>
                                </li>
                            </ul>
                        </section>

                        <section className='max-w-6xl p-5 md:p-12' id="form">
                            <h6 className='mb-4 text-2xl font-bold text-gray-300'>Ready to Get Started?</h6>

                            {/* User Contact Form */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <section className='mb-6'>
                                    <section className='mx-0 mb-1 sm:mb-4'>
                                        <fieldset className='mx-0 mb-1 sm:mb-4'>
                                            <input {...register("name", { required: "Name is required." })} type="text" id="name" autoComplete="given-name" placeholder="Your name"
                                                className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0' />
                                            {/* Displays error message when name field is invalid */}
                                            {errors.name && <p>{errors.name.message}</p>}
                                        </fieldset>
                                        <fieldset className='mx-0 mb-1 sm:mb-4'>
                                            <input {...register("email", {
                                                required: "Email is required.", pattern: {
                                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                    message: "Invalid email address."
                                                }
                                            })} type="email" id="email" autoComplete="email" placeholder="Your email address"
                                                className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0' />
                                            {/* Displays error message when email field is invalid */}
                                            {errors.email && <p>{errors.email.message}</p>}
                                        </fieldset>
                                        <fieldset className='mx-0 mb-1 sm:mb-4'>
                                            <textarea {...register("message", { required: "Message is required." })} id="message" cols="30" rows="5" placeholder="Write your message..."
                                                className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0'>
                                            </textarea>
                                            {/* Displays error message when message field is invalid */}
                                            {errors.message && <p>{errors.message.message}</p>}
                                        </fieldset>
                                    </section>

                                </section>

                                <section className='text-center'>
                                    <button className='w-full bg-primary-color text-white px-6 py-3 font-xl rounded-md sm:mb-0 transition-all duration-200 hover:scale-110'>
                                        Send Message
                                    </button>
                                </section>

                            </form>

                        </section>
                    </section>
                </section>

            </section>
        </section>
    )
};

export default Contact
