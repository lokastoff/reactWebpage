import React from "react";
import { Tab } from '@headlessui/react'
import { motion } from "framer-motion";
import axios from "axios";
import { useForm, Controller } from 'react-hook-form';
import { SignupModal } from "./signupModal";
export const LoginPanel = () => {
    const { handleSubmit, register, formState: { errors }, reset } = useForm(); 
    const onSubmit = async (data) => {
        try{
            console.log(data);
            const response = await axios.post('http://localhost:3000/login', data);
            console.log(response.data);
            reset();
        }catch (error){
            console.error('Error during data submission:', error);
          }
      };
    return(
        <Tab.Panel>
            <motion.div initial={{opacity:0}} animate={{opacity:1}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-[20px] flex flex-col"> 
                        <label className="text-white text-[14px] font-normal text-left mb-[10px]">Email</label>
                        <input {...register('email', {required: 'This field is required'})} className="pl-[15px] h-[40px] bg-[#3b3b3b] rounded-[5px] border-[1px] border-[#4d4d4d]" type="text" placeholder="johndoe@gmail.com"/>
                    </div>
                    <div className="mb-[20px] flex flex-col"> 
                        <label className="text-white text-[14px] font-normal text-left mb-[10px]">Password</label>
                        <input {...register('password', {required: 'This field is required'})} className="pl-[15px] h-[40px] bg-[#3b3b3b] rounded-[5px] border-[1px] border-[#4d4d4d]" type="text" placeholder="*****************"/>
                    </div>
                    <button className="flex items-center justify-center py-[12px] px-[20px] w-full bg-[#ec3883] rounded-[8px] border-[#3f3f3f] border-[2px] font-normal text-[16px]">Login</button>
                    <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='blank' className="flex items-center justify-between mt-[15px] p-[3px] w-full bg-[#4280ef] rounded-[8px]">
                        <div className="iconWrap p-[10px] bg-white rounded-[6px] ">
                            <img className='w-[20px]' src="https://uploads-ssl.webflow.com/648d924df1237afd40cbd541/648d929cb721061cd04333d8_google.svg" alt="" />
                        </div>
                        <span className="" >Continue with Google</span>
                        <div className="spacer w-[40px]"></div>
                    </a>
                </form>
            </motion.div>
        </Tab.Panel>
        )
}