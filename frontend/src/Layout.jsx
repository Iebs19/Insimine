// Layout.jsx
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Particles from '@/components/magicui/particles';
import { LightMode, DarkMode } from '@mui/icons-material';
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const Layout = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    setColor(theme === 'dark' ? '#95d524' : '#04165d');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <Navbar/>
      <div className='mt-12 p-2'>
        {/* <NeonGradientCard className="w-1/2 h-auto items-center justify-center text-center bg-transparent"> */}
          {children}
        {/* </NeonGradientCard> */}
      </div>
      <Particles
        className="absolute inset-0 pointer-events-none"
        quantity={200}
        ease={80}
        color={color}
        size={1.2}
        refresh
      ><div></div></Particles>
      <button
        onClick={toggleTheme}
        className="fixed  z-50 bottom-12 right-4 p-3 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-white-400"
        style={{ backgroundColor: theme === 'dark' ? '#333' : '#fff' }} // Adjust button background color
      >
        {theme === 'dark' ? <LightMode style={{ color: '#fff' }} /> : <DarkMode style={{ color: '#000' }} />}
      </button>
      <div className='pt-3'>

      <Footer/>
      </div>
    </div>
  );
};

export default Layout;
