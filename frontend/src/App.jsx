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
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import ScrollBasedVelocity from './components/ScrollBasedVelocity';
import ImgMarquee from './components/ImgMarquee';
import Services from './components/Services';
import Clients from './components/Clients';

function App() {

  return (
    <>
      <Layout>
        <div className='p-9'>
          <Hero />
          
        </div>
        <Clients />
        {/* <ScrollBasedVelocity /> */}
        <div className='p-9'>
          <Testimonials/>   
        </div>
        {/* <Services /> */}
        

      </Layout>
    </>
  );
}

export default App;
