import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import logoWhite from '../assets/Insimine-LOGO-White.svg';
import logoBlue from '../assets/Insimine-LOGO-Blue.svg';

const footerData = {
  menus: [
    {
      title: 'Company',
      links: [
        { title: 'About Us', link: '/about-us' },
        { title: 'Careers', link: '/careers' },
        { title: 'Contact Us', link: '/contact-us' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { title: 'Blog', link: '/blog' },
        { title: 'Help Center', link: '/help' },
        { title: 'Privacy Policy', link: '/privacy' },
      ],
    },
    {
      title: 'Product',
      links: [
        { title: 'Features', link: '/features' },
        { title: 'Pricing', link: '/pricing' },
        { title: 'Integrations', link: '/integrations' },
      ],
    },
  ],
  legal: [
    { title: 'Privacy Policy', link: '/privacy' },
    { title: 'Terms of Service', link: '/terms' },
  ],
};

const Logo = () => {
    const { theme } = useTheme();
    const logo = theme === 'dark' ? logoWhite : logoBlue;

    return (
        <a href='/'>
            <img src={logo} alt="company logo" className="h-8 w-full"/>
        </a>
    );
};

const Footer = () => {
  const { theme } = useTheme();
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const linkHoverColor = theme === 'dark' ? 'hover:text-lime-500' : 'hover:text-green';

  return (
    <motion.footer
      className=" bottom-0 left-0 right-0 mt-10 py-12 bg-[#ffffff]/30 dark:bg-[#29c4f8]/30 backdrop-blur-md shadow-lg mb-[-24px] mx-[-20px]"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <Logo />
          </div>
          {footerData.menus.map((menu, index) => (
            <div key={index} className="w-full lg:w-1/4 mb-8 lg:mb-0">
              <h2 className={`text-lg font-semibold mb-4 ${textColor}`}>{menu.title}</h2>
              <ul>
                {menu.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    className="mb-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href={link.link}
                      className={`text-sm ${textColor} ${linkHoverColor}`}
                    >
                      {link.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex justify-between items-center">
          <p className={`text-sm ${textColor}`}>© 2024 InsiMine. All rights reserved.</p>
          <div className="flex space-x-4">
            {footerData.legal.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className={`text-sm ${textColor} ${linkHoverColor}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.title}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
