import { useState } from 'react';
// import './App.css';
import Particles from "@/components/magicui/particles";
// import Layout from './Layout';
// import logo from "../src/assets/favicon_insimine.png";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import IconCloud from "@/components/magicui/icon-cloud";
import BlurFade from "@/components/magicui/blur-fade";
import ShimmerButton from "@/components/magicui/shimmer-button";
import PulsatingButton from "@/components/ui/pulsating-button";

function Hero() {

  return (
    <>
        <div className='flex flex-col justify-center'>
          {/* <GradualSpacing className='font-nas text-center font-bold pointer-events-none bg-gradient-to-b from-green to-lightBlue bg-clip-text text-9xl font-semibold leading-none text-transparent dark:from-green dark:to-lightBlue' text='InsiMine' duration={5} /> */}
          <GradualSpacing className='font-nas pb-2 text-7xl text-left bg-gradient-to-b from-green to-lightBlue bg-clip-text text-transparent dark:from-green dark:to-lightBlue' text='Mining Insights for' />
          <GradualSpacing className='font-nas text-7xl text-left' text='Data Driven Success' />
          {/* <GradualSpacing className='font-nas text-left' text='InsiMine is a trusted AI  ' />
          <GradualSpacing className='font-nas text-left' text='and analytics-based solutions provider empowering' />
          <GradualSpacing className='font-nas text-left' text=' pharmaceutical and healthcare industries to make informed,' />
          <GradualSpacing className='font-nas text-left' text=' data-driven decisions.' /> */}
          <BlurFade delay={1} inView >
            <p className='font-nas text-center space-x-1 p-8'>InsiMine is a trusted AI and analytics-based solutions provider empowering pharmaceutical and healthcare industries to make informed, data-driven decisions.</p>
            <div className='flex flex-row justify-center gap-8'>
            <ShimmerButton className="shadow-2xl" background='darkBlue' borderRadius='4px'>
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Learn More
              </span>
            </ShimmerButton>
            {/* <PulsatingButton className='text-black dark:text-white' pulseColor='green'>Book a call</PulsatingButton> */}

          </div>
          </BlurFade>
          
        </div>

    </>
  );
}

export default Hero;
