import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './styles/tailwind.css'
import About from './pages/AboutPage.jsx'
import PorfolioPage from './pages/PortfolioPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ResumePage from './pages/ResumePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
      index: true,
      element: <About/>,
      },
      {
        path: '/portfolio',
        element: <PorfolioPage/>
      },
      {
        path: '/contact',
        element: <ContactPage/>
      },
      {
        path: '/resume',
        element: <ResumePage/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
