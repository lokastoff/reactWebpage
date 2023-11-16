import React, { useEffect } from "react";
import { Tab } from '@headlessui/react'
import { motion } from "framer-motion";
import { ValidationPoint } from "./validationBlock";
import { useForm, Controller } from 'react-hook-form';
import { useState } from "react";

const Cross = ()=>{
    return(
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 10.586L9.172 7.757L7.757 9.172L10.586 12L7.757 14.828L9.172 16.243L12 13.414L14.828 16.243L16.243 14.828L13.414 12L16.243 9.172L14.828 7.757L12 10.586Z" fill="currentColor"/>
        </svg>
    )
}
const Swoosh = () =>{
    return(
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="currentColor"/>
        </svg>
    )
}

export const SignupPanel = () => {
    const { handleSubmit, register, formState: { errors },reset } = useForm({mode:'onChange'}); 
    const onSubmit = (data) => {
        console.log(data);
        reset();
      };
      const [isSwoosh, setIsSwoosh] = useState(false);
    return(
        <Tab.Panel>
            <motion.form initial={{opacity:0}} animate={{opacity:1}} onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-[20px] flex flex-col"> 
                    <label className="text-white text-[14px] font-normal text-left mb-[10px]">Email</label>
                    <input {...register('email', { 
                        required: 'This field is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Wrong email format',
                          }
                         })} className="pl-[15px] h-[40px] bg-[#3b3b3b] rounded-[5px] border-[1px] border-[#4d4d4d]" type="text" placeholder="johndoe@gmail.com"/>
                         {errors?.email && (<div className="error text-[12px] text-[#ec3883] mt-[5px]">{errors.email.message}</div>)}
                        
                </div>
                <div className="mb-[20px] flex flex-col"> 
                    <label className="text-white text-[14px] font-normal text-left mb-[10px]">Password</label>
                    <input {...register('password', { 
                        required: 'This field is required',
                        minLength:8,

                          })}
                           className="pl-[15px] h-[40px] bg-[#3b3b3b] rounded-[5px] border-[1px] border-[#4d4d4d]" type="text" placeholder="*****************"/>
                           {errors?.password && (<div className="error text-[12px] text-[#ec3883] mt-[5px]">{errors.password.message}</div>)}
                </div>
                <div className="validation flex flex-col items-stretch justify-start gap-[5px]">
                    {errors.password && errors.password.type === 'minLength'  ? <ValidationPoint text='Password must be over 8 character' check={Cross()}/>:null}
                </div>
                <button className="mt-[20px] flex items-center justify-center py-[12px] px-[20px] w-full bg-[#ec3883] rounded-[8px] border-[#3f3f3f] border-[2px] font-normal text-[16px]" type="submit">Sign up</button>
                <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='blank' className="flex items-center justify-between mt-[15px] p-[3px] w-full bg-[#4280ef] rounded-[8px]">
                    <div className="iconWrap p-[10px] bg-white rounded-[6px] ">
                        <img className='w-[20px]' src="https://uploads-ssl.webflow.com/648d924df1237afd40cbd541/648d929cb721061cd04333d8_google.svg" alt="" />
                    </div>
                    <span className="">Continue with Google</span>
                    <div className="spacer w-[40px]"></div>
                </a>
            </motion.form>
        </Tab.Panel>
        )
}