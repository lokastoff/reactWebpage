import React from "react";
import { motion } from "framer-motion";
import { Tab } from '@headlessui/react'
import { PricingTabsComponent } from "./PricingTabsComponent";
import { pricingTabs } from "../../services/pricingTabs";
export const PricingComponent = () =>{
    return (
    <section className='h-screen bg-headerImg bg-cover bg-center py-[160px] overflow-hidden'>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition= {{duration:2, delay:0.3}} className="headContainer flex items-center justify-center w-full  mb-[72px]">
                <h2 className="font-semibold text-[48px] text-white text-center">Get Started with Us</h2>
            </motion.div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition= {{duration:2, delay:0.3}} className=" w-full flex flex-row pl-[22%] pr-[20%]">
                <Tab.Group vertical>
                    <Tab.List className='flex flex-col items-start pr-[90px] pb-[150px]' >
                        <Tab className='text-white pb-[12px] mb-[30px] font-semibold text-[24px] ui-selected:outline-none ui-selected:border-b-4 ui-selected:border-[#236bfe]'>Begginer</Tab>
                        <Tab className='text-white pb-[12px] mb-[30px] font-semibold text-[24px] ui-selected:outline-none ui-selected:border-b-4 ui-selected:border-[#236bfe]' >Freelancer</Tab>
                        <Tab className='text-white pb-[12px] mb-[30px] font-semibold text-[24px] ui-selected:outline-none ui-selected:border-b-4 ui-selected:border-[#236bfe]'>Professional</Tab>
                        <Tab className='text-white pb-[12px] mb-[30px] font-semibold text-[24px] ui-selected:outline-none ui-selected:border-b-4 ui-selected:border-[#236bfe]'>Company</Tab>
                        
                    </Tab.List>
                    <Tab.Panels className='pl-[90px] border-l-[1px] border-[#ffffff4d] w-full'>
                        <Tab.Panel className='text-white h-full'><PricingTabsComponent price={pricingTabs.begginer.price} suit={pricingTabs.begginer.suit}/></Tab.Panel>
                        <Tab.Panel className='text-white h-full'><PricingTabsComponent price={pricingTabs.freelancer.price} suit={pricingTabs.freelancer.suit}/></Tab.Panel>
                        <Tab.Panel className='text-white h-full'><PricingTabsComponent price={pricingTabs.professional.price} suit={pricingTabs.professional.suit}/></Tab.Panel>
                        <Tab.Panel className='text-white h-full'><PricingTabsComponent price={pricingTabs.company.price} suit={pricingTabs.company.suit}/></Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </motion.div>
    </section>
    )
}