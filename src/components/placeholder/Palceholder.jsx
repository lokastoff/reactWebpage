import React from 'react'
import { motion } from 'framer-motion'
import { HeaderNoAnim } from '../header/HeaderNoAnim'
import { Footer } from '../footer/Footer'
export const Placeholder = () =>{
    return(
        <div className='pageWrapper static'>
            <HeaderNoAnim/>
            <section className='flex justify-center items-center text-center h-screen bg-headerImg bg-cover bg-center'>
            <motion.p  initial ={{opacity:0}} animate={{opacity:1}} transition= {{duration:1.3, delay:0.25}} className='text-white'>Page is empty</motion.p>
            </section>
            <Footer/>
        </div>
    )
}