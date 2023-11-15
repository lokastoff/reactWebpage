import React from "react";
import { useForm } from "react-hook-form"
import { Tab } from '@headlessui/react'
import { TabsAuth } from "./tabsAuth";
import { motion } from "framer-motion";
import { LoginPanel } from "./loginPanel";
import { SignupPanel } from "./signupPanel";
export const AuthComponent = () => {
    return(
        <section className='flex justify-center items-center text-center h-screen bg-headerImg bg-cover bg-center'>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition= {{duration:1, delay:0.3}} className="flex items-center justify-center py-[100px] px-[5%] w-full  relative">
            <div className="w-full max-w-[500px] overflow-hidden bg-[#0000005c] rounded-[10px] border-[1px] border-[#3f3f3f]">
                <Tab.Group>
                    <Tab.List className='flex items-center justify-between px-[20px] pt-[20px] gap-x-[10px] text-white'>
                        <TabsAuth text='Login'/>
                        <TabsAuth text='Sign up'/>
                    </Tab.List>
                    <div className="p-[20px]">
                    <Tab.Panels className='text-white'>
                        <LoginPanel/>
                        <SignupPanel/>
                    </Tab.Panels>
                    </div>
                </Tab.Group>
            </div>
            <div className=""></div>
          </motion.div>
        </section>
    )
}