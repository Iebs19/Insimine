import React from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NeonGradientCard } from '../components/magicui/neon-gradient-card';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

function ContactUs() {
    return (
        <div className='flex flex-col pt-4'>
            <div className='font-nas font-bold justify-center text-7xl'>
                Contact Our Team
            </div>
            <div className='flex flex-col justify-center mr-auto pt-6'>
                <div className='font-nas mx-4 text-2xl'>
                    Connect to our team to ask a question or learn more about how we can support your business.
                </div>
            </div>
            <div className='p-4 text-black dark:text-white'>
                <NeonGradientCard>
                    <form className="flex flex-col p-4 gap-4" onSubmit={(e) => { e.preventDefault(); /* Add your submit logic here */ }}>
                        <div className='flex flex-row gap-4'>
                            <Input type="text" id="fname" placeholder="First Name" required />
                            <Input type="text" id="lname" placeholder="Last Name" required />
                        </div>
                        <div className='flex flex-row gap-4'>
                            <Input type="email" id="email" placeholder="Email" required />
                            <Input type="tel" id="phonenumber" placeholder="Phone Number (Optional)" pattern="[0-9]{10}" />
                        </div>
                        <div className='flex flex-row gap-4'>
                            <Input type="text" id="company" placeholder="Company" required />
                            <Input type="text" id="designation" placeholder="Designation (Optional)" />
                        </div>
                        <div className='flex flex-row w-1/2 gap-4'>
                            <Input type="text" id="country" placeholder="Country" required />
                        </div>
                        <div className='flex flex-row gap-4'>
                            <Input type="text" id="message" placeholder="Message" required />
                        </div>
                        <button type="submit" className='mt-4 p-2 bg-blue-500 w-40 text-white rounded'>
                            Submit
                        </button>
                    </form>
                </NeonGradientCard>
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='font-nas text-5xl pt-6'>Our Offices</h1>
                <div className='px-20 w-full'>
                    <Accordion type="multiple">
                        <AccordionItem value="item-1" >
                            <AccordionTrigger className='font-nas text-3xl'>Asia Pacific</AccordionTrigger>
                            <AccordionContent className='text-left'>
                                <h1 className='font-nas text-2xl'>India</h1>
                                <div className='m-7'>
                                    <LocationOnIcon />
                                    <a>207-208 Welldone TechPark, Sohna Road Sector 48, Gurugram, Haryana 122018, India</a>
                                </div>
                                <div className='m-7'>
                                    <PhoneIcon />
                                    <a>+91-124-429-4218</a>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" >
                            <AccordionTrigger className='font-nas text-3xl'>USA</AccordionTrigger>
                            <AccordionContent className='text-left'>
                                <h1 className='font-nas text-2xl'>California</h1>
                                <div className='m-7'>
                                    <LocationOnIcon />
                                    <a>99 S Almaden Blvd, Suite 600, San Jose, CA</a>
                                </div>
                                <div className='m-7'>
                                    <PhoneIcon />
                                    <a>+13474802054</a>
                                </div>
                            </AccordionContent>
                            <AccordionContent className='text-left'>
                                <h1 className='font-nas text-2xl'>California</h1>
                                <div className='m-7'>
                                    <LocationOnIcon />
                                    <a>99 S Almaden Blvd, Suite 600, San Jose, CA</a>
                                </div>
                                <div className='m-7'>
                                    <PhoneIcon />
                                    <a>+13474802054</a>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" >
                            <AccordionTrigger className='font-nas text-3xl'>Europe</AccordionTrigger>
                            <AccordionContent className='text-left'>
                                <h1 className='font-nas text-2xl'>United Kingdom</h1>
                                <div className='m-7'>
                                    <LocationOnIcon />
                                    <a>13 Freeland Park, Poole, Dorset, United Kingdom, BH16 6FH</a>
                                </div>
                                <div className='m-7'>
                                    <PhoneIcon />
                                    <a>+44 207 193 3548</a>
                                </div>
                            </AccordionContent>
                            <AccordionContent className='text-left'>
                                <h1 className='font-nas text-2xl'>Germany</h1>
                                <div className='m-7'>
                                    <LocationOnIcon />
                                    <a>5th Floor, Hahnstrasse 70, Frankfurt am main, 60528</a>
                                </div>
                                <div className='m-7'>
                                    <PhoneIcon />
                                    <a>+49 335 2773 4678</a>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                    </Accordion>
                </div>


            </div>
        </div>
    );
}

export default ContactUs;
