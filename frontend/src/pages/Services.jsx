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
        <div className='flex flex-row justify-between gap-4 z-10 pb-6' id='service1'>
          <div className='w-1/2'>
            <div className='sticky top-14'>
              <div className='font-nas text-4xl text-left'>
                1. Data Engineering
              </div>
              {/* <img src={DataEng} alt="Data Engineering" className='mt-4 w-full' /> */}
            </div>
          </div>
          <div className='w-1/2 h-screen overflow-y-auto'>
            <div className='flex flex-col font-nas text-2xl'>
              <h1 className='text-sm'>
                InsiMine offers a comprehensive data engineering framework designed specifically for the pharmaceutical and healthcare industries. Our services help you develop a robust data strategy, ensure data governance, and optimize data management processes.
              </h1>
              <div className='z-25'>
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et aliquid quos accusantium suscipit minus quod harum, fuga expedita? Nobis officiis reiciendis ea quas. Commodi non est blanditiis quo iusto iure.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laudantium numquam molestias earum veritatis suscipit non iure, impedit, exercitationem vero ea maxime aliquam asperiores eos ipsum, libero possimus omnis aliquid.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iure ipsa sint consequatur amet eius fugiat molestiae, quis sapiente maiores itaque beatae quaerat architecto ut blanditiis non sit, facilis dicta.
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
            <div className='sticky top-14'>
              <div className='font-nas text-4xl text-left'>
                2. Data Lakes & Big Data Management
              </div>
              {/* <img src={DataLake} alt="Data Lakes" className='mt-4 w-full' /> */}
            </div>
          </div>
          <div className='w-1/2 h-screen overflow-y-auto'>
            <div className='flex flex-col font-nas text-2xl'>
              <h1 className='text-sm'>
                InsiMine offers a comprehensive data engineering framework designed specifically for the pharmaceutical and healthcare industries. Our services help you develop a robust data strategy, ensure data governance, and optimize data management processes.
              </h1>
              <Accordion type="single">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other components' aesthetics.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        <div className='flex flex-row justify-between gap-4 z-10' id='service3'>
          <div className='w-1/2'>
            <div className='sticky top-14'>
              <div className='font-nas text-4xl text-left'>
                3. AI & Gen AI Applications
              </div>
              {/* <img src={GenAI} alt="Gen AI" className='mt-4 w-full' /> */}
            </div>
          </div>
          <div className='w-1/2 h-screen overflow-y-auto'>
            <div className='flex flex-col font-nas text-2xl'>
              <h1 className='text-sm'>
                InsiMine offers a comprehensive data engineering framework designed specifically for the pharmaceutical and healthcare industries. Our services help you develop a robust data strategy, ensure data governance, and optimize data management processes.
              </h1>
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other components' aesthetics.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you prefer.
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
