import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import AboutUs from "./pages/AboutUs.jsx";
import Services from "./pages/Services.jsx";
import Layout from "./Layout.jsx";
import Insights from "./pages/Insights.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import IndividualInsightSection from "./pages/IndividualInsightSection.jsx";
import BookingIframe from "./pages/BookingIframe.jsx";
import Layout2 from "./Layout2.jsx";
import IndividualPage from "./pages/IndividualPage.jsx";

// const baseUrl = "https://insimine.com/admin/api";
const baseUrl = "https://insimine.com/admin/api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/aboutus",
    element: (
      <Layout>
        <AboutUs />
      </Layout>
    ),
  },
  {
    path: "/services",
    element: (
      <Layout>
        <Services />
      </Layout>
    ),
  },
  {
    path: "/bookings",
    element: (
      <Layout2>
        <BookingIframe/>
      </Layout2>
    ),
  },
  {
    path: "/insights",
    element: (
      <Layout>
        <Insights />
      </Layout>
    ),
    // children: [
    //   {
    //     path: "blogs",
    //     element: <IndividualInsightSection title='Blog'/>,
    //   },
    //   {
    //     path: "case-studies",
    //     element: <IndividualInsightSection title='Case-Studies'/>,
    //   },
    //   {
    //     path: "white-papers",
    //     element: <IndividualInsightSection title='White-Papers'/>,
    //   },
    //   {
    //     path: "events",
    //     element: <IndividualInsightSection title='Events'/>,
    //   },
    // ],
  },
  {
    path: "/contact-us",
    element: (
      <Layout>
        <ContactUs />
      </Layout>
    ),
  },
  {
    path: "/blogs",
    element: (
      <Layout>
        <IndividualInsightSection title="Blogs" fetchUrl={`${baseUrl}/blog`} type='blog'/>
      </Layout>
    ),
  },
  {
    path: "/case-studies",
    element: (
      <Layout>
        <IndividualInsightSection title="Case Studies" fetchUrl={`${baseUrl}/case-study`} type='case-study'/>
      </Layout>
    ),
  },
  {
    path: "/white-papers",
    element: (
      <Layout>
        <IndividualInsightSection title="White Papers" fetchUrl={`${baseUrl}/white-paper`} type='white-paper'/>
      </Layout>
    ),
  },
  {
    path: "/events",
    element: (
      <Layout>
        <IndividualInsightSection title="Events" fetchUrl={`${baseUrl}/event`} type='event'/>
      </Layout>
    ),
  },
  {
    path: "/techstacks",
    element: (
      <Layout>
        <IndividualInsightSection title="TechStacks" fetchUrl={`${baseUrl}/techstack`} type='techstack'/>
      </Layout>
    ),
  },
  {
    path: "/blog/:id",
    element: (
      <Layout>
        <IndividualPage type='blog'/>
      </Layout>
    ),
  },
  {
    path: "/case-study/:id",
    element: (
      <Layout>
        <IndividualPage type='case-study'/>
      </Layout>
    ),
  },
  {
    path: "/techstack/:id",
    element: (
      <Layout>
        <IndividualPage type='techstack'/>
      </Layout>
    ),
  },
  {
    path: "/service/:id",
    element: (
      <Layout>
        <IndividualPage type='service'/>
      </Layout>
    ),
  },
  {
    path: "/event/:id",
    element: (
      <Layout>
        <IndividualPage type="event"/>
      </Layout>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
