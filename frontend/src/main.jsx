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
<<<<<<< Updated upstream
import Layout from './Layout.jsx';
=======
import Services from './components/Services.jsx';
import { Layout } from 'lucide-react';
>>>>>>> Stashed changes

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/aboutus',
<<<<<<< Updated upstream
    element:( 
    <Layout>
      <AboutUs/>
    </Layout>
  )}
=======
    element: <AboutUs/>
  },
  {
    path: '/services',
    element: (<Layout><Services/></Layout>)
  }
>>>>>>> Stashed changes
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
