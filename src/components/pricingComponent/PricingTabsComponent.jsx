import React from "react";
import { motion, AnimatePresence } from "framer-motion";
export const PricingTabsComponent = (props) =>{
    return( 
    <motion.div initial={{opacity:0}} animate={{opacity:1}}  className="flex flex-col items-start h-full">
        <h3 className="mb-[24px] font-semibold text-[36px] ">{props.price} <span className="font-normal text-[18px]">/ month</span> </h3>
        <p className="text-[16px] font-normal ">{props.suit}</p>
        <div className="grid grid-cols-[1fr_1fr] grid-rows-[auto] gap-y-[16px] gap-x-[32px] justify-items-stretch items-end h-full ">
            <motion.button whileHover={{scale:1.1}} className="flex items-center justify-center px-[28px] h-[56px] rounded-[20px] text-white bg-gradient-to-r from-[#4c85fa] to-[#236bfe]">Select plan</motion.button>
            <motion.button whileHover={{scale:1.1}} className="flex items-center justify-center px-[28px] h-[56px] rounded-[20px] border-[1px]">Try for free</motion.button>
        </div>
    </motion.div>
    )
}