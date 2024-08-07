import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from '../assets/insimine-logo.png';
import PulsatingButton from "@/components/ui/pulsating-button";


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent font-nas">
{/* <nav className="fixed top-0 left-0 right-0 z-50 rounded-lg shadow-lg 
  dark:bg-[#95d524]/30 bg-[#29c4f8]/30 backdrop-blur-md font-nas"> */}
      <div className="flex items-center justify-between p-4">
        <img src={logo} alt="company logo" className="h-8"/>
        <div className="flex items-center space-x-8 text-black dark:text-white">
        <FlyoutLink href="#about-us">
            About Us
          </FlyoutLink>
          <FlyoutLink href="#services">
            Services
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={InsightsContent}>
            Insights
          </FlyoutLink>
          <PulsatingButton className="" pulseColor='green'>Book a consultation</PulsatingButton>

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
        <a href={href} className="relative font-bold hover:text-green transition-colors">
          {children}
        </a>
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
  bg-green/30 dark:bg-[#29c4f8]/30 backdrop-blur-md">
  <div className="mb-3 space-y-3">
    <a href="#blogs" className="block text-sm hover:underline">
      Blogs
    </a>
    <a href="#case-studies" className="block text-sm hover:underline">
      Case Studies
    </a>
    <a href="#white-papers" className="block text-sm hover:underline">
      White Papers
    </a>
  </div>
</div>

  );
};

export default Navbar;