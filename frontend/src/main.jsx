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
import blogs from './data/blogs.json';

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
    path: "blogs",
    element: (
      <Layout>
        <IndividualInsightSection title="Blogs" data={blogs}/>
      </Layout>
    ),
  },
  {
    path: "case-studies",
    element: (
      <Layout>
        <IndividualInsightSection title="Case Studies" data={blogs}/>
      </Layout>
    ),
  },
  {
    path: "white-papers",
    element: (
      <Layout>
        <IndividualInsightSection title="White Papers" data={blogs}/>
      </Layout>
    ),
  },
  {
    path: "events",
    element: (
      <Layout>
        <IndividualInsightSection title="Events" data={blogs}/>
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
