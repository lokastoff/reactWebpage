import React from "react";
import { useForm } from "react-hook-form"
import { Tab } from '@headlessui/react'
import { motion } from "framer-motion";


export const ValidationPoint = (props) =>{
    return(
        <div className="flex items-center gap-[10px]">
            {props.check}
            <span className="font-normal text-[12px]">{props.text}</span>
        </div>
    )
}
