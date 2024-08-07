import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Particles from "@/components/magicui/particles";
import Layout from './Layout';
import logo from "../src/assets/favicon_insimine.png";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import IconCloud from "@/components/magicui/icon-cloud";
import BlurFade from "@/components/magicui/blur-fade";
import ShimmerButton from "@/components/magicui/shimmer-button";
import PulsatingButton from "@/components/ui/pulsating-button";

function App() {
  const [count, setCount] = useState(0);
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  return (
    <>
      <Layout>
        <div className='flex flex-col justify-center'>
          <GradualSpacing className='font-nas text-center font-bold pointer-events-none bg-gradient-to-b from-green to-lightBlue bg-clip-text text-9xl font-semibold leading-none text-transparent dark:from-green dark:to-lightBlue' text='InsiMine' duration={5} />
          <GradualSpacing className='font-nas text-4xl text-left' text='Mining Insights for Data Driven Success.' />
          <GradualSpacing className='font-nas text-left' text='InsiMine is a trusted AI  ' />
          <GradualSpacing className='font-nas text-left' text='and analytics-based solutions provider empowering' />
          <GradualSpacing className='font-nas text-left' text=' pharmaceutical and healthcare industries to make informed,' />
          <GradualSpacing className='font-nas text-left' text=' data-driven decisions.' />
          <div className='flex flex-row justify-center pt-4 gap-8'>
            <ShimmerButton className="shadow-2xl" background='darkBlue' borderRadius='4px'>
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Learn More
              </span>
            </ShimmerButton>
            <PulsatingButton className='' pulseColor='green'>Book a call</PulsatingButton>

          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
