import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Features from '../components/Features';
import Feedback from '../components/Feedback';
import OurBlogs from '../components/OurBlogs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> }, 
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'features', element: <Features /> },
      { path: 'feedback', element: <Feedback /> },
      { path: 'ourblogs', element: <OurBlogs /> }
    ]
  }
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
