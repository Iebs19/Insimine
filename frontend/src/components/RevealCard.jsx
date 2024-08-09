import React from "react";

const RevealCard = ({ title, image }) => {
    return (
      <div className="relative h-[300px] w-full group">
        <div className="flex h-1/2 flex-col justify-center bg-black p-6 z-10">
          <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
        </div>

        <div
          className="absolute inset-0 z-0 transition-transform duration-500 group-hover:top-1/2 group-hover:right-1/2 bg-slate-200"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        {/* <motion.div
      className="absolute inset-0 z-0 bg-slate-200"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
      initial={{ top: '0%', right: '0%' }}
      whileHover={{ top: '50%', right: '50%' }}
      transition={{
        duration: 0.15, // 150ms
        ease: [0.4, 0, 0.2, 1], // cubic-bezier
      }}
    /> */}
        {/* More Button */}
        <a
          href="#"
          rel="nofollow"
          className="absolute bottom-0 right-0 z-20 grid h-1/2 w-1/2 place-content-center bg-white text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-indigo-500"
        >
          <div className="flex items-center">
            <span className="text-xs">MORE</span>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-lg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </a>
      </div>
    );
  };

  export default RevealCard;