import { useState } from 'react';
import './App.css';
import Layout from './Layout';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import Insights from './components/Insights';
import ServicesSection from './components/ServicesSection';

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
          <ServicesSection />
        </div>
        <div className='pt-24'>
          <Clients />
        </div>


        <div className='pt-24'>
          <Testimonials />
        </div>
        {/* <Services /> */}


      </Layout>
    </>
  );
}

export default App;
