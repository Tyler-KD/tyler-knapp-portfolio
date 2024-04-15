import React, { useState } from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

// useState hook manages the formData
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // State variable errors keeps track of validation errors for each field
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    // The handleChange function updates the state whenever an input field changes.
    // The validateField function checks if the value of the field is valid according to rules 
    // (non empty for name and message, and a regex pattern for email) and returns an error message if it's not.
    // The formData state is then used to populate the mailto: link.
    // mailto: protocol opens the user's default email client with populated data.
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: validateField(e.target.name, e.target.value) });
    };

    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                return value.trim() === '' ? 'Name is required.' : '';
            case 'email':
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                return !emailRegex.test(value) ? 'Invalid email address.' : '';
            case 'message':
                return value.trim() === '' ? 'Message is required.': '';
            default:
                return '';
        }
    }

    // export default function App() {
    //     const [message, setMessage] = useState('');
    //     const isAnonymous = true;


    // const handleClick = (e) => {
    //     e.currentTarget.disable = true;
    //     console.log('button clicked');
    // };

    // const isFormValid = () => {
    //     return Object.values(errors).every(x => x === '');
    // };

    return (
        <div className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 md:h-[76vh]'>
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
                            <form >
                                <div className='mb-6'>
                                    <div className='mx-0 mb-1 sm:mb-4'>
                                        <div className='mx-0 mb-1 sm:mb-4'>
                                            <input type="text" id="name" autoComplete="given-name" placeholder="Your name"
                                                className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0' name="name" onChange={handleChange} />
                                                {/* Displays error message when name field is invalid */}
                                                {errors.name && <p>{errors.name}</p>}
                                        </div>
                                        <div className='mx-0 mb-1 sm:mb-4'>
                                            <input type="email" id="email" autoComplete="email" placeholder="Your email address"
                                                className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0' name="email" onChange={handleChange} />
                                                {/* Displays error message when email field is invalid */}
                                                {errors.email && <p>{errors.email}</p>}
                                        </div>
                                    </div>
                                    <div className='mx-0 mb-1 sm:mb-4'>
                                        <textarea id="message" cols="30" rows="5" placeholder="Write your message..."
                                            className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0' name="message" onChange={handleChange} >
                                        </textarea>
                                        {/* Displays error message when message field is invalid */}
                                        {errors.message && <p>{errors.message}</p>}
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button onClick={handleChange} className='w-full bg-primary-color text-white px-6 py-3 font-xl rounded-md sm:mb-0 transition-all duration-200 hover:scale-110'>
                                        <a href={`mailto:tyler.kd.knapp@gmail.com?subject=${formData.subject}&body=${formData.body}&name=${formData.name}`}
                                        >Click</a>
                                    </button>
                                                                     
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
