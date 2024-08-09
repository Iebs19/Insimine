import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import DataLake from "../assets/Data_Lake.png";
import DataEng from "../assets/Data_Eng.png";
import GenAI from "../assets/GenAI.png";

function Services() {
  return (
    <div className='flex flex-col justify-center pt-4'>
      <div className='font-nas font-bold justify-start text-7xl no-scrollbar'>
        Services
      </div>
      <div className='flex flex-col justify-center mr-auto pt-6 no-scrollbar'>
        <div className='font-nas text-xl'>
          Unlock the full potential of your data with InsiMine's specialized data and analytics services tailored for the pharmaceutical and healthcare industries. Our innovative solutions transform raw data into actionable insights, driving growth, improving patient outcomes, and enhancing operational efficiency. Discover how our expertise in Data Engineering, Data Lakes & Big Data Management, and AI & Gen AI Applications can empower your organization to make informed, intelligent decisions.
        </div>
      </div>
      <div className='flex flex-col pt-12 px-24'>
        <div className='flex flex-row justify-between gap-4 z-10' id='service1'>
          <div className='w-1/2'>
            <div className='sticky top-24'>
              <div className='font-nas text-4xl text-left'>
                1. Data Engineering
              </div>
              {/* <img src={DataEng} alt="Data Engineering" className='mt-4 w-full' /> */}
            </div>
          </div>
          <div className='w-1/2 h-screen overflow-y-auto'>
            <div className='flex flex-col text-2xl'>
              <h1 className='text-sm font-nas font-bold'>
                InsiMine offers a comprehensive data engineering framework designed specifically for the pharmaceutical and healthcare industries. Our services help you develop a robust data strategy, ensure data governance, and optimize data management processes.
              </h1>
              <div className='z-25'>
              <Accordion type="single">
                <AccordionItem value="item-1" >
                  <AccordionTrigger className='font-nas'>•	Data Strategy and Roadmap</AccordionTrigger>
                  <AccordionContent className='text-left'>
                  We offer a robust Enterprise Information Management (EIM) strategy and roadmap tailored to pharmaceutical and healthcare needs. The strategic support includes comprehensive data infrastructure evaluation to ensure scalability and compliance, development of data security and compliance strategies to protect sensitive healthcare data, and implementation of a data governance framework to ensure data integrity and accuracy.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className='font-nas'>•	Data Enablement</AccordionTrigger>
                  <AccordionContent className='text-left'>
                  	In this service segment, InsiMine supports healthcare enterprises in efficient data ingestion and onboarding processes for diverse healthcare data sources. We establish data catalogs and lineage systems to track data flow and usage, ensuring data quality and standardization to meet regulatory requirements. Our data integration and orchestration services also enable seamless data flow across systems, enhancing operational efficiency and data usability.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className='font-nas'>•	Benefits</AccordionTrigger>
                  <AccordionContent className='text-left'>
                    <li>Enhanced data reliability and accessibility for better decision-making.</li>
                    <li>Improved data governance and compliance with healthcare regulations.</li>
                    <li>Scalable and flexible data management solutions tailored to industry needs.</li>
                    <li>Optimized business decision-making through trustworthy analytics-ready data.</li>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              </div>
              
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        <div className='flex flex-row justify-between gap-4 z-10' id='service2'>
          <div className='w-1/2'>
            <div className='sticky top-24'>
              <div className='font-nas text-4xl text-left'>
                2. Data Lakes & Big Data Management
              </div>
              {/* <img src={DataLake} alt="Data Lakes" className='mt-4 w-full' /> */}
            </div>
          </div>
          <div className='w-1/2 h-screen overflow-y-auto'>
            <div className='flex flex-col text-2xl'>
              <h1 className='text-sm font-nas'>
              Transform your pharmaceutical and healthcare business with a centralized data repository. Our data lakes and big data management services enable you to manage vast amounts of structured and unstructured data efficiently, providing scalable and flexible data management and analytics capabilities.
              </h1>
              <Accordion type="single">
                <AccordionItem value="item-1">
                  <AccordionTrigger className='font-nas'>•	Data Storage and Sharing</AccordionTrigger>
                  <AccordionContent className='text-left'>
                   InsiMine offers secure and scalable storage solutions specifically designed to handle large healthcare datasets, ensuring improved query performance for faster data retrieval and analysis. Our services also include on-demand data exploration capabilities, supporting research and development efforts by enabling efficient access to critical data.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className='font-nas'>•	Big Data Framework</AccordionTrigger>
                  <AccordionContent>
                  We provide cloud-based big data frameworks that offer unprecedented scalability and flexibility, essential for managing extensive and diverse healthcare data sources such as clinical trial data and patient records. Our solutions enable the rapid ingestion of these varied data types, ensuring they are efficiently processed and analyzed. Additionally, we implement comprehensive data governance processes to manage the complexities of healthcare data, maintaining integrity and compliance throughout.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className='font-nas'>•	Benefits</AccordionTrigger>
                  <AccordionContent className='text-left'>
                    <li>Enhanced data accessibility and usability for various stakeholders.</li>
                    <li>Faster analytics and reporting to support clinical and operational decisions.</li>
                    <li>Scalable and flexible data management solutions to handle growing data volumes.</li>
                    <li>Improved data governance and compliance with industry standards and regulations.</li>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        <div className='flex flex-row justify-between gap-4 z-10' id='service3'>
          <div className='w-1/2'>
            <div className='sticky top-24'>
              <div className='font-nas text-4xl text-left'>
                3. AI & Gen AI Applications
              </div>
              {/* <img src={GenAI} alt="Gen AI" className='mt-4 w-full' /> */}
            </div>
          </div>
          <div className='w-1/2 h-screen overflow-y-auto'>
            <div className='flex flex-col text-2xl'>
              <h1 className='text-sm'>
              Leverage the power of AI and Gen AI to transform your pharmaceutical and healthcare operations. Our AI and Gen AI applications provide advanced analytics, predictive modeling, and automated decision-making capabilities to drive growth, improve patient outcomes, and enhance operational efficiency.
              </h1>
              <Accordion type="single">
                <AccordionItem value="item-1">
                  <AccordionTrigger className='font-nas'>•	AI-Powered Analytics</AccordionTrigger>
                  <AccordionContent className='text-left'>
                  InsiMine’s AI-powered analytics offer automated insights generation to support clinical and business decisions, ensuring organizations can make data-driven choices with confidence. Our predictive modeling and forecasting capabilities allow for anticipating patient needs and optimizing resource allocation. Additionally, our real-time data processing ensures timely and accurate insights, enhancing overall decision-making and operational efficiency.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className='font-nas'>•	Gen AI Solutions</AccordionTrigger>
                  <AccordionContent className='text-left'>
                   Our GenAI Solutions encompass cutting-edge technologies to transform healthcare delivery and outcomes. Our Natural Language Processing (NLP) capabilities enhance patient interactions and provide valuable sentiment analysis, improving patient engagement and satisfaction. We leverage Computer Vision for advanced image and video analysis, aiding in diagnostics and treatment planning. Additionally, our advanced machine learning models support drug discovery, patient risk stratification, and other critical healthcare applications, driving innovation and efficiency across the industry.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className='font-nas'>•	Benefits</AccordionTrigger>
                  <AccordionContent className='text-left'>
                    <li>Improved decision-making with advanced analytics tailored to healthcare.</li>
                    <li>Enhanced patient experiences through AI-driven insights and personalized care.</li>
                    <li>Increased operational efficiency with automated processes and predictive analytics.</li>
                    <li>Scalable AI solutions designed to meet the unique needs of the pharmaceutical and healthcare industries.</li>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
