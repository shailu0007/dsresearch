// src/routes/AppRoutes.jsx

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";
import Home from "../components/Home";
import About from "../components/About";
import AboutCard from "../components/AboutCard";
import Services from "../components/Services";
import Feedback from "../components/Feedback";
import OurBlogs from "../components/OurBlogs";
import TermsAndCondition from "../components/TermsAndCondition";
import PrivacyPolicy from "../components/PrivacyPolicy";
import ServiceAgreement from "../components/ServiceAgreement";
import KYC from "../components/KYC";
import RiskProfile from "../components/RiskProfile";
import FAQ from "../components/FAQ";
import Compliance from "../components/Compliance";
import Contact from "../components/Contact";
import Disclosure from "../components/Disclosure";
import Investor from "../components/Investor";
import ExpertAdvice from "../components/ExpertAdice";
import Payment from "../components/Payment";

import ServiceSub from "../components/subcomponent/ServiceSub";
import PricingSub from "../components/subcomponent/PricingSub";
import pricingDetails from "../components/details/pricingDetails";
import Pastperformance from "../components/Pastperformance";
import Career from "../components/Career";
import servicedeails from "../components/details/serviceDetails.js";
import Auth from "../components/client/Auth.jsx";
import PrivateClientRoute from "./PrivateCientRoute";
import Dashboard from "../components/client/Dashboard";
import AdminLogin from "../components/admin/AdminLogin.jsx";
import AdminDashboard from "../components/admin/AdminDashboard.jsx";
import PrivateAdminRoute from "./PrivateAdminRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "about",
        element: <About />,
        children: [{ index: true, element: <AboutCard /> }],
      },

      { path: "services", element: <Services /> },
      { path: "payment", element: <Payment /> },

      // Dynamically load service sub-routes
      ...servicedeails.map(({ path, stockcashregular }) => ({
        path: `services/${path}`,
        element: <ServiceSub stockcashregular={stockcashregular} />,
      })),

      // Pricing main page
      { path: "pricing", element: <PricingSub /> },

      // Dynamically load pricing sub-routes
      ...pricingDetails.map(({ path, stockCashServices }) => ({
        path: `pricing/${path}`,
        element: <PricingSub stockCashServices={stockCashServices} />,
      })),

      { path: "feedback", element: <Feedback /> },
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
      { path: "pastperformance", element: <Pastperformance /> },
      { path: "Career", element: <Career /> }
    ],
  },
  { path: "auth", element: <Auth /> },
  {
    path: "/dashboard",
    element:
      <PrivateClientRoute>
        <Dashboard />
      </PrivateClientRoute>
  },

  { path: "/admin/login", element: <AdminLogin /> },
  {
    path: "/admin/dashboard",
    element:
      <PrivateAdminRoute>
        <AdminDashboard />
      </PrivateAdminRoute>
  }
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;