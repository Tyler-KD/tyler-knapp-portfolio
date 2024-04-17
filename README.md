# Tyler Knapp Portfolio

![GitHub License](https://img.shields.io/badge/license-MIT-default.svg)

## Description

Tyler Knapp Portfolio is a professional portfolio using React.  This project was built to practice React skills and join a community of web developers by sharing my projects and work with future employers and fellow developers.  It solves the problem of wanting to view a potential employee's deployed React portfolio of work samples so that an employer can assess whether the developer is a good candidate for an open position.  Some things learned throughout this project were seeing in action the fast responsiveness of React when navigating between pages due to the react-router-dom module, understanding how various imported hooks can handle formData and validation much more effectively than the standard useState hook, making an array of objects in the Portfolio component which are passed as props to the Project component so that React doesn't have repeated code, installing Tailwind CSS giving much faster creative styling control while building up components in real-time, and just overall experiencing the advantages of React for aesthetic details such as transitions and future animations which give the application more character and personality.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Video](#video)
* [Deployed Site](#deployed-site)
* [Credits](#credits)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Features](#features)
* [Questions](#questions)

## Installation

Within the main directory, install dependencies by running "npm i' within the terminal of the main directory.  This will install all the necessary dependencies needed for React and Vite to run as well as integrate Tailwind CSS with React.  Then, connect to the server with the command "npm run start."

## Usage

To run this application from the terminal, enter "npm run start" to start the server.  The message "Local: http://localhost:3000" will display within the console.  Vite will instantly start the server using the current working directory as a root.  Once the application is loaded, a homepage will be displayed containing a header, a section of content, and a footer.  Looking at the header, the user is presented with a name and multiple navigation titles corresponding to different sections of the portfolio.  

When a navigation title is clicked, then the corresponding section is presented below the navigation without the page reloading the highlighted title.  By default, the portfolio natively loads the landing page with a friendly Hero section of image overlays and navbar links.  When clicking the "About me" title, a recent photo combined with a short bio is displayed.  Within the "Portfolio" section, two grid columns separate multiple deployed applications.  Clicking the image will direct to the deployed site in a separate tab.  Also, clicking the GitHub icon or Chrome icon will direct to a GitHub repository or deployed site respectively.  

In the "Contact" section, a contact form with fields for a name, an email address, and a message display.  After all three fields are validated, the "Send Message" button opens the user's default email client with a new email pre-filled with the provided information.  If any of the fields are invalid before clicking "Send Message," then messages will alert the user of the necessary field requirements and the button will be disabled.  Within the "Resume" section, a link to a viewable and downloadable pdf resume headline two columns of Front-end and Back-end proficiencies.  Viewing the footer, LinkedIn and GitHub icons link to the LinkedIn and GitHub profiles respectively.  Finally, a dropdown menu button will display on small screens instead of the navigation titles.  After clicking the button, a dropdown menu will pop-up with navigation titles to every section.

For usage instructions with the deployed application using Netlify, follow the previous instructions after the application is loaded.

**Attached is a screenshot of the application landing page and Hero section:**



## Video

N/A

## Deployed Site

[Tyler Knapp Portfolio](https://tyler-knapp-portfolio.netlify.app/)

## Credits

[Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)

[link - React](https://react.dev/reference/react-dom/components/link)

[How to Create Mailto Links in HTML](https://www.w3docs.com/snippets/html/how-to-create-mailto-links.html)

[React: 2 Ways to Open an External Link in New Tab](https://www.kindacode.com/article/ways-to-open-an-external-link-in-react/)

[Min-Height - Tailwind CSS](https://tailwindcss.com/docs/min-height)

## Contributing

N/A

## License

MIT License

Copyright (c) 2024 Tyler-KD

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

* (https://choosealicense.com/licenses/mit/)

## Tests

N/A

## Features

react 18.2.0, react-dom 18.2.0, react-hook-form 7.51.3, react-icons 5.0.1, react-router-dom 6.22.3, @types/react 18.2.66,
@types/react-dom 18.2.22, @vitejs/plugin-react 4.2.1, autoprefixer 10.4.19, eslint 8.57.0, eslint-plugin-react 7.34.1,
eslint-plugin-react-hooks 4.6.0, eslint-plugin-react-refresh 0.4.6, postcss 8.4.38, tailwindcss 3.4.3, vite 5.2.0

## Questions

If you have any questions, please visit [GitHub/Tyler-KD](https://github.com/Tyler-KD) or submit questions to tyler.kd.knapp@gmail.com.