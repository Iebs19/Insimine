import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from 'next-themes';
import AboutUs from './pages/AboutUs.jsx';
import Services from './pages/Services.jsx';
import Layout from './Layout.jsx';
import Insights from './pages/Insights.jsx';
import ContactUs from './pages/ContactUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/aboutus',
    element:( 
    <Layout>
      <AboutUs/>
    </Layout>
  )},
  {
    path: '/services',
    element:( 
    <Layout>
      <Services/>
    </Layout>
  )},
  {
    path: '/insights',
    element:( 
    <Layout>
      <Insights/>
    </Layout>
  )},
  {
    path: '/contact-us',
    element:( 
    <Layout>
      <ContactUs/>
    </Layout>
  )},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
