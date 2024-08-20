import React from 'react';
import { motion } from 'framer-motion';
import ourcapabilities from "..//assets/1st-Infographic-Transparent.png";
import ourcapabilitiesdark from "..//assets/Dark-Mode-Infographics.png"
import ShimmerButton from './magicui/shimmer-button';
import { NeonGradientCard } from './magicui/neon-gradient-card';

function ServicesSection() {
    const floatAnimation = {
        initial: { y: 0 },
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
            },
        },
    };

    return (
        <div className='flex flex-col items-center'>
            <h1 className="font-nas text-4xl p-4">Our Capabilities</h1>
            <div className='flex justify-center pb-4'>
                <div className='relative group w-1/3'>
                    <img
                        src={ourcapabilities}
                        className="invert-0 block dark:hidden"
                        alt="Our Capabilities"
                    />
                    <img
                        src={ourcapabilitiesdark}
                        className="invert-0 hidden dark:block"
                        alt="Our Capabilities"
                    />
                    <motion.div {...floatAnimation} className="absolute bottom-0 left-[-350px] bg-background w-full h-auto">
                        <NeonGradientCard className='bg-background'>
                            <h1 className='font-nas'>Data Engineering:</h1>
                            <p className='text-left'>Develop a robust data strategy, governance framework, and integration solutions for seamless data management.</p>
                        </NeonGradientCard>
                    </motion.div>
                    <motion.div {...floatAnimation} className="absolute top-0 right-[-350px] bg-background w-full h-auto">
                        <NeonGradientCard className='bg-background'>
                            <h1 className='font-nas'>Data Lakes & Big Data Management:</h1>
                            <p className='text-left'>Centralize and manage vast amounts of structured and unstructured data efficiently.</p>
                        </NeonGradientCard>
                    </motion.div>
                    <motion.div {...floatAnimation} className="absolute bottom-0 right-[-350px] bg-background w-full h-auto">
                        <NeonGradientCard className='bg-background'>
                            <h1 className='font-nas'>AI & Gen AI Applications:</h1>
                            <p className='text-left'>Leverage advanced analytics and AI-driven solutions to transform your business operations.</p>
                        </NeonGradientCard>
                    </motion.div>
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
