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
import TermsAndCondition from "../components/TermsAndCondition.jsx";
import PrivacyPolicy from "../components/PrivacyPolicy.jsx";
import ServiceAgreement from "../components/ServiceAgreement.jsx";
import KYC from "../components/KYC.jsx";
import RiskProfile from "../components/RiskProfile.jsx";
import FAQ from "../components/FAQ.jsx";
import Compliance from "../components/Compliance.jsx";
import Contact from "../components/Contact.jsx";
import Disclosure from "../components/Disclosure.jsx";
import Investor from "../components/Investor.jsx";
import ExpertAdvice from "../components/ExpertAdice.jsx";
import Auth from "../components/client/Auth.jsx";

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
      { path: "feedback", element: <Feedback /> },
      { path: "ourblogs", element: <OurBlogs /> },
      { path: "ourblogs", element: <OurBlogs /> },
       { path: "terms-and-condition", element: <TermsAndCondition /> },
       { path: "privacy-and-policy", element: <PrivacyPolicy /> },
        { path: "service-agreement", element: <ServiceAgreement /> },
        { path: "kyc", element: <KYC /> },
        { path: "risk-profile", element: <RiskProfile /> },
        { path: "faq", element: <FAQ /> },
        { path: "compliance", element: <Compliance /> },
        { path: "contact", element: <Contact /> },
         { path: "disclosure", element: <Disclosure /> },
         { path: "investor-charter", element: <Investor /> },
         { path: "expertAdvice", element: <ExpertAdvice /> },
    ],
  },
  { path: "auth", element: <Auth /> },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
