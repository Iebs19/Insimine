import React from 'react';
import { motion } from 'framer-motion';
import ourcapabilities from "..//assets/1st-Infographic-Transparent.png";
import ShimmerButton from './magicui/shimmer-button';

function ServicesSection() {
    return (
        <div className='flex flex-col items-center'>
            <h1 className="font-nas text-4xl p-4">Our Capabilities</h1>
            <div className='flex justify-center pb-4'>
                <div className='relative group w-1/3'>
                    <motion.img
                        src={ourcapabilities}
                        className="invert-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                    <div className="absolute bottom-0 left-[-350px] p-4 bg-background border border-gray-300 w-full rounded-lg h-auto transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-transform transition-opacity duration-300">
                        <h1 className='font-nas'>Data Engineering:</h1>
                        <p className='text-left'>Develop a robust data strategy, governance framework, and integration solutions for seamless data management.</p>
                    </div>
                    <div className="absolute top-0 right-[-350px] p-4 bg-background border border-gray-300 w-full rounded-lg h-auto transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-transform transition-opacity duration-300">
                        <h1 className='font-nas'>Data Lakes & Big Data Management:</h1>
                        <p className='text-left'>Centralize and manage vast amounts of structured and unstructured data efficiently.</p>
                    </div>
                    <div className="absolute bottom-0 right-[-350px] p-4 bg-background border border-gray-300 w-full rounded-lg h-auto transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform transition-opacity duration-300">
                        <h1 className='font-nas'>AI & Gen AI Applications:</h1>
                        <p className='text-left'>Leverage advanced analytics and AI-driven solutions to transform your business operations.</p>
                    </div>
                </div>
            </div>
            <ShimmerButton className="shadow-2xl" background='darkBlue' borderRadius='4px' href='/services'>
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Learn More
                </span>
            </ShimmerButton>
        </div>
    );
}

export default ServicesSection;
