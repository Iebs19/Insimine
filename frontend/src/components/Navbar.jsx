import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PulsatingButton from "@/components/ui/pulsating-button";
import logoWhite from '../assets/Insimine-LOGO-White.svg';
import logoBlue from '../assets/Insimine-LOGO-Blue.svg';
import { useTheme } from 'next-themes';
import { Link } from "react-router-dom";


const Logo = () => {
    const { theme } = useTheme(); // or your theme hook/context
  
    const logo = theme === 'dark' ? logoWhite : logoBlue;
  
    return (
        <Link to='/'>
            <img src={logo} alt="company logo" className="h-8 w-full"/>
        </Link>
    )
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 font-nas transition-transform duration-300 ease-out rounded-sm
      ${scrolled ? 'bg-[#ffffff]/30 dark:bg-[#29c4f8]/30 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="flex items-center justify-between p-4 pb-2">
        <Logo/>
        <div className="flex items-center space-x-8 text-black dark:text-white">
          <FlyoutLink href="/aboutus" FlyoutContent={AboutContent}>
            About Us
          </FlyoutLink>
          <FlyoutLink href="/services" FlyoutContent={ServicesContent}>
            Services
          </FlyoutLink>
          <FlyoutLink href="/insights" FlyoutContent={InsightsContent}>
            Insights
          </FlyoutLink>
          <PulsatingButton className="" pulseColor='green'><a href="/bookings">Book a consultation</a></PulsatingButton>
        </div>
      </div>
    </nav>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);
  
    const showFlyout = FlyoutContent && open;
  
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative w-fit h-fit"
      >

        <Link to={href} className="relative font-bold hover:text-green transition-colors">
          {children}
          <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-lightBlue/60 transition-transform duration-300 ease-out"
        />
        </Link>
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              style={{ translateX: "-50%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-1/2 top-12 text-black dark:text-white"
            >
              <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-green/30 dark:bg-[#29c4f8]/30 backdrop-blur-md" />
              <FlyoutContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
};

const InsightsContent = () => {
  return ( 
    <div className="relative w-48 p-4 rounded-lg shadow-lg 
      bg-green/80 dark:bg-[#29c4f8]/80 backdrop-blur-lg pb-2">
      <div className="mb-3 space-y-3">
        <Link to="/blogs" className="block text-sm hover:underline">
          Blogs
        </Link>
        <Link to="/case-studies" className="block text-sm hover:underline">
          Case Studies
        </Link>
        <Link to="/white-papers" className="block text-sm hover:underline">
          White Papers
        </Link>
        <Link to="/events" className="block text-sm hover:underline">
          Events
        </Link>
      </div>
    </div>
  );
};
const AboutContent = () => {
  return ( 
    <div className="relative w-48 p-4 rounded-lg shadow-lg 
      bg-green/80 dark:bg-[#29c4f8]/80 backdrop-blur-lg pb-2">
      <div className="mb-3 space-y-3">
        <a href="/contact-us" className="block text-sm hover:underline">
          Contact Us
        </a>
      </div>
    </div>
  );
};
const ServicesContent = () => {
  return ( 
    <div className="relative w-48 p-4 rounded-lg shadow-lg 
      bg-green/80 dark:bg-[#29c4f8]/80 backdrop-blur-lg pb-2">
      <div className="mb-3 space-y-3">
        <a href="/service/1" className="block text-sm hover:underline">
        Data Engineering
        </a>
        <a href="/service/2" className="block text-sm hover:underline">
        Data Lakes & Big Data Management
        </a>
        <a href="/service/3" className="block text-sm hover:underline">
        AI & Gen AI Applications
        </a>
      </div>
    </div>
  );
};

export default Navbar;
