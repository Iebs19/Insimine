import React from 'react'
import Layout from '@/Layout'
import { NeonGradientCard } from '../components/magicui/neon-gradient-card';
import { motion } from 'framer-motion';
import valueimg from '../assets/ourvalues.svg';
import methodimg from '../assets/ourmethods.svg';
const AboutUs = () => {

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
    <div className='flex flex-col justify-center pt-4 '>
      <div className='font-nas font-bold justify-start  text-7xl '>
        About Us
      </div>
      <div className='flex flex-col justify-center mr-auto pt-12'>
        <div className='font-nas text-xl'>
          InsiMine empowers the pharmaceutical and healthcare industries with cutting-edge data and analytics solutions. Our team of experts combines deep industry knowledge with advanced technology to help you navigate the complexities of the data landscape and achieve your strategic goals.
        </div>
      </div>
      <div className='flex flex-col gap-4 gap-y-12 pt-12 px-12'>
        <div className='flex flex-row justify-between'>
          <motion.div {...floatAnimation}>
            <img width='300' height='300' src={valueimg} />
          </motion.div>
          <motion.div {...floatAnimation} className='p-4'>
            <NeonGradientCard>
              <h1 className='font-nas text-4xl'>Our Values</h1>
              <div className='text-left pt-2'>
                <li>Innovation: Continuously pushing the boundaries of what’s possible with data and technology.</li>
                <li>Integrity: Upholding the highest standards of ethics and transparency in all our dealings.</li>
                <li>Collaboration: Working closely with our clients to understand their unique challenges and deliver tailored solutions.</li>
                <li>Excellence: Committed to delivering the highest quality services and solutions.</li>
              </div>
            </NeonGradientCard>
          </motion.div>



        </div>
        <div className='flex flex-row justify-between gap-x-24 gap-y-10'>
          <motion.div {...floatAnimation}>
            <NeonGradientCard>
              <h1 className='font-nas text-4xl'>Our Mission</h1>
              <div className='text-center pt-2'>
                To enable pharmaceutical and healthcare organizations to harness the power of their data for improved decision-making, better patient outcomes, and enhanced operational efficiency.
              </div>
            </NeonGradientCard>
          </motion.div>
          <motion.div {...floatAnimation}>
            <NeonGradientCard>
              <h1 className='font-nas text-4xl'>Our Vision</h1>
              <div className='text-center pt-2'>
                To be the global leader in data analytics and AI solutions for the pharmaceutical and healthcare industries, transforming businesses through innovative technologies.
              </div>
            </NeonGradientCard>
          </motion.div>
        </div>
        <div className='flex flex-row justify-between'>
          <motion.div {...floatAnimation} className='p-4'>
            <NeonGradientCard>
              <h1 className='font-nas text-4xl'>Our Approach</h1>
              <div className='text-left pt-2'>
                <li>Strategize and Plan: Develop comprehensive strategies and project plans to ensure successful execution</li>
                <li>Discovery and Design: Uncover insights and design solutions that align with your goals and vision.</li>
                <li>Build and Deploy: Implement secure, reliable AI solutions and scale them to production.</li>
                <li>Continuous Support: Provide ongoing assistance to ensure sustained success and client satisfaction.</li>
              </div>
            </NeonGradientCard>
          </motion.div>
          <motion.div {...floatAnimation}>
            <img width='300' height='300' src={methodimg} />
          </motion.div>
        </div>

        <div className='flex flex-row justify-center'>
          <motion.div {...floatAnimation}>
            <NeonGradientCard>
              <h1 className='font-nas text-4xl'>Why Insimine</h1>
              <div className='text-left pt-2'>
                
                  <li>Industry Expertise: Extensive experience in the pharmaceutical and healthcare sectors.</li>
                  <li>Advanced Technology: Leveraging the latest in data engineering, big data management, and AI technologies.</li>
                  <li>Proven Track Record: Demonstrated success in driving growth, improving efficiency, and enhancing patient outcomes.</li>
                  <li>Customized Solutions: Tailored services to meet the specific needs and goals of your organization.</li>
              </div>
            </NeonGradientCard>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
{/* <div className='flex flex-col gap-4'>

  <motion.div {...floatAnimation}>
    <NeonGradientCard>
      <h1 className='font-nas text-4xl'>Our Mission</h1>
      <div className='text-center pt-2'>
        To enable pharmaceutical and healthcare organizations to harness the power of their data for improved decision-making, better patient outcomes, and enhanced operational efficiency.
      </div>
    </NeonGradientCard>
  </motion.div>
  <motion.div {...floatAnimation}>
    <NeonGradientCard>
      <h1 className='font-nas text-4xl'>Why Insimine</h1>
      <div className='text-left pt-2'>
        <ul>
          <li>Industry Expertise: Extensive experience in the pharmaceutical and healthcare sectors.</li>
          <li>Advanced Technology: Leveraging the latest in data engineering, big data management, and AI technologies.</li>
          <li>Proven Track Record: Demonstrated success in driving growth, improving efficiency, and enhancing patient outcomes.</li>
          <li>Customized Solutions: Tailored services to meet the specific needs and goals of your organization.</li>
        </ul>
      </div>
    </NeonGradientCard>
  </motion.div>
</div>
<div className='flex flex-col gap-4'>
  <motion.div {...floatAnimation} className='h-3/4'>
    <NeonGradientCard>
      <h1 className='font-nas text-4xl'>Our Values</h1>
      <div className='text-left pt-2'>
          <li>Innovation: Continuously pushing the boundaries of what’s possible with data and technology.</li>
          <li>Integrity: Upholding the highest standards of ethics and transparency in all our dealings.</li>
          <li>Collaboration: Working closely with our clients to understand their unique challenges and deliver tailored solutions.</li>
          <li>Excellence: Committed to delivering the highest quality services and solutions.</li>
      </div>
    </NeonGradientCard>
  </motion.div>
</div>
<div className='flex flex-col gap-4'>
  <motion.div {...floatAnimation}>
    <NeonGradientCard>
      <h1 className='font-nas text-4xl'>Our Vision</h1>
      <div className='text-center pt-2'>
        To be the global leader in data analytics and AI solutions for the pharmaceutical and healthcare industries, transforming businesses through innovative technologies.
      </div>
    </NeonGradientCard>
  </motion.div>
  <motion.div {...floatAnimation}>
    <NeonGradientCard>
      <h1 className='font-nas text-4xl'>Our Approach</h1>
      <div className='text-left pt-2'>
          <li>Strategize and Plan: Develop comprehensive strategies and project plans to ensure successful execution</li>
          <li>Discovery and Design: Uncover insights and design solutions that align with your goals and vision.</li>
          <li>Build and Deploy: Implement secure, reliable AI solutions and scale them to production.</li>
          <li>Continuous Support: Provide ongoing assistance to ensure sustained success and client satisfaction.</li>
      </div>
    </NeonGradientCard>
  </motion.div>
</div> */}