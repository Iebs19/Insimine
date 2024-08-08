import { useState } from 'react';
import reactLogo from './assets/react.svg';
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
import Services from './components/ServicesHome';
import Clients from './components/Clients';
import Insights from './components/Insights';

function App() {

  return (
    <>
      <Layout>
        <div className='pt-24'>
          <Hero />

        </div>
        <div className='pt-24'>
          <Insights />

        </div>
        <div className='pt-24'>
          <Clients />

        </div>

        {/* <ScrollBasedVelocity /> */}
        <div className='pt-24'>
          <Testimonials />
        </div>
        {/* <Services /> */}


      </Layout>
    </>
  );
}

export default App;
