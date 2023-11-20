import React from "react";
import { Tab } from '@headlessui/react'
import { motion } from "framer-motion";
import { useState, Fragment} from "react";
import { Dialog, Transition } from '@headlessui/react'

export const SignupModalUnsuccess = ({isOpen, setIsOpen, textBlock}) =>{
    return (
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    <Dialog.Panel className="fixed inset-0 flex flex-col border-white border-2  items-center justify-center my-[15%] mx-[35%] bg-white text-black rounded-[30px]">
                        <div>
                            <img className="w-[150px] h-[150px] mt-[-210px] bg-white rounded-[100px]" src="/src/assets/red_cross.png" alt="" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-center">
                                <h1 className="font-bold text-[40px]">{textBlock}</h1>
                            </div>
                            <div className="absolute mt-[200px]">
                                <button className="outline-none border-2 mt-0 w-[272px] h-[62px] rounded-[40px] bg-[#387aff] font-medium text-white " onClick={() => setIsOpen(false)}>Got it!</button>
                            </div>
                        </div>
                    </Dialog.Panel>
        </Dialog>
        </Transition>
    )
}