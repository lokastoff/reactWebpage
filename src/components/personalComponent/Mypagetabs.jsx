import React from "react";
import { Tab } from "@headlessui/react";
export const Mypagetabs = () => {
   return(
     <Tab.Group>
        <div className='flex flex-col w-[300px] pt-[50px] '>
            <div className="flex items-center w-full pl-[50px]">
                <div className="mr-[15px] w-[50px] h-[50px] bg-[url('/src/assets/ava.png')] bg-cover rounded-[100px]">
                </div>
                <span className="text-[18px]">Walter White</span>
            </div>
            <Tab.List className='flex flex-col py-[60px] w-full'>
                <Tab className='flex items-center h-[40px] text-[16px]'>
                    <div className="w-[5px] mr-[45px]"></div>
                    <span>Dashboard</span>
                </Tab>
                <Tab className='flex items-center h-[40px] text-[16px]'>
                    <div className="w-[5px] mr-[45px]"></div>
                    <span>Settings</span>
                </Tab>
            </Tab.List>
       </div>
      <Tab.Panels className='w-[600px] border-2 border-white'>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
   )
}