import React, { useState } from "react";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { motion } from "framer-motion";
// import blogsData from '../data/blogs.json';

const blogs = [
    {
      title: "Enhancing Clinical Trial Data Management with Advanced Data Lakes",
      image: "src/assets/Data_Lake.png",
      text: "A leading pharmaceutical company was facing significant challenges in managing its clinical trial data. The variety and volume of data collected during clinical trials increased exponentially, leading to inefficiencies in data retrieval, analysis, and reporting. Traditional data warehousing solutions were no longer sufficient to handle the complex and large-scale data requirements.",
    },
    {
      title:
        "Optimizing Supply Chain Management in Medical Devices with AI and GenAI",
      image: "src/assets/GenAI.png",
      text: "A global medical device manufacturer faced challenges in its supply chain management, including demand forecasting inaccuracies, inventory management issues, and delayed deliveries. Traditional methods of supply chain management were proving to be inefficient, leading to increased operational costs and customer dissatisfaction.",
    },
    {
      title: "Enhancing Patient Monitoring with AI-Powered IoT Solutions",
      image: "src/assets/Data_Eng.png",
      text: "A leading medical device company was struggling with inefficiencies in patient monitoring due to fragmented data sources and manual processes. The lack of real-time data integration and analysis was hindering the ability to provide timely and accurate patient care.",
    },
  ];

  const RevealCard = ({ title, image }) => {
    return (
      <div className="relative h-[300px] w-full group">
        {/* Text Section */}
        <div className="flex h-1/2 flex-col justify-center bg-black p-6 z-10">
          <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
        </div>
        {/* Image Section */}
        <div
          className="absolute inset-0 z-0 transition-transform duration-500 group-hover:top-1/2 group-hover:right-1/2 bg-slate-200"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
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
  
  
  
//   export default RevealCard;
  

const BlogSection = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {blogs.map((blog, index) => (
          <RevealCard
            key={index}
            title={blog.title}
            image={blog.image}
          />
        ))}
      </div>
    );
  };







function Insights() {
return (
    <div>
        <h1 className="font-nas text-4xl p-4">The Ingenious Collection</h1>
        <h1 className="font-nas text-2xl p-2">
            Dive into a world of knowledge with our blogs, case studies, and whitepapers.
        </h1>
<BlogSection/>
        {/* <div className="flex flex-row gap-4">
            {blogs.map((blog, index) => (
                <NeonGradientCard
                    key={index}
                    className="max-w-sm items-center justify-center text-center"
                >
                    <motion.div className="relative group" 
                    initial={{ y: "10%", opacity: 0 }}
                            whileHover={{ y: "0%", opacity: 1 }}
                            transition={{ duration: 0.3 }} >
                        <div className="w-full h-48 overflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black opacity-30" />
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ y: "10%", opacity: 0 }}
                            whileHover={{ y: "0%", opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h1 className="text-white font-nas text-xl font-medium bg-gradient-to-r from-transparent via-white to-transparent bg-clip-text">
                                {blog.title}
                            </h1>
                        </motion.div>
                    </motion.div>
                </NeonGradientCard>
            ))}
        </div> */}
        <div className="flex justify-center p-4">
            <ShimmerButton
                className="shadow-2xl"
                background="darkBlue"
                borderRadius="4px"
            >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    View all
                </span>
            </ShimmerButton>
        </div>
    </div>
);
}

// function Insights() {
//     return (
//         <div>
//             <h1 className="font-nas text-4xl p-4">The Ingenious Collection</h1>
//             <h1 className="font-nas text-2xl p-2">Dive into a world of knowledge with our blogs, case studies, and whitepapers.</h1>
//             <div className='flex flex-row gap-4'>
//                 {blogs.map((blog, index) => (
//                     <motion.div
//                         key={index}
//                         className="relative max-w-sm h-72 overflow-hidden"
//                         // whileHover={{ scale: 1.05 }}
//                         // transition={{ type: "spring", stiffness: 300 }}
//                     >
//                         <NeonGradientCard className="h-full flex flex-col items-center justify-center text-center relative">
//                             <div className="relative w-full h-48 overflow-hidden">
//                                 <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
//                                 <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
//                                     <h1 className="text-xl font-bold text-center">{blog.title}</h1>
//                                 </div>
//                             </div>
//                             <motion.div
//                                 className="absolute bottom-0 left-0 w-full bg-green-500 flex items-center justify-center transition-transform duration-300 transform translate-y-full hover:translate-y-0"
//                                 whileHover={{ opacity: 1 }}
//                                 transition={{ type: "spring", stiffness: 300 }}
//                             >
//                                 <a href={blog.link} className="text-white font-medium py-2 px-4">Learn More</a>
//                             </motion.div>
//                         </NeonGradientCard>
//                     </motion.div>
//                 ))}
//             </div>
//             <div className='flex justify-center p-4'>
//                 <ShimmerButton className="shadow-2xl" background='darkBlue' borderRadius='4px'>
//                     <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
//                         View all
//                     </span>
//                 </ShimmerButton>
//             </div>
//         </div>
//     );
// }

export default Insights;
