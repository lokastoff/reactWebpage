import React from "react";
import { Tab } from '@headlessui/react'
import { motion } from "framer-motion";
import { useForm, Controller } from 'react-hook-form';
import { useState } from "react";
import { Dialog } from '@headlessui/react'

export const SignupModal = ({ isOpen, setIsOpen }) =>{
    return(
        <Dialog classname='h-screen w-screen border-[2px]' open={isOpen} onClose={() => setIsOpen(false)}>
            <Dialog.Panel>
                <Dialog.Title>Deactivate account</Dialog.Title>
                <Dialog.Description>
                This will permanently deactivate your account
                </Dialog.Description>
                <p>
                Are you sure you want to deactivate your account? All of your data
                will be permanently removed. This action cannot be undone.
                </p>
                <button onClick={() => setIsOpen(false)}>Deactivate</button>
                <button onClick={() => setIsOpen(false)}>Cancel</button>
            </Dialog.Panel>
        </Dialog>
    )
}