import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";
import Features from "../components/Features";
import Feedback from "../components/Feedback";
import OurBlogs from "../components/OurBlogs";
import AboutCard from "../components/AboutCard";
import ServiceSub from "../components/subcomponent/ServiceSub";
import servicedeails from "../components/details/serviceDetails.js";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: <About />,
        children: [{ index: true, element: <AboutCard  /> }],
      },
      { path: "services", element: <Services /> },
     ...servicedeails.map(({ path, stockcashregular }) => ({
  path: `services/${path}`,
  element: <ServiceSub {...stockcashregular} />
})),
      { path: "features", element: <Features /> },
      { path: "feedback", element: <Feedback /> },
      { path: "ourblogs", element: <OurBlogs /> },
    ],
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
