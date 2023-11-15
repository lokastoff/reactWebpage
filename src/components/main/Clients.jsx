import React from 'react'
import { motion } from 'framer-motion'
export const Clients = () => {
    return(
        <section className='clientsSection mt-[352px]'>
            <div className='pagePadding mx-[25rem]'>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2}} className='containerLarge mx-auto w-full max-w-[73.25rem]'>
                    <div className='paddingVertical px-0 py-[4rem ]'>
                        <div className='block clientsComponent'>
                            <div className='marginBottom mb-[2rem]'>
                                <p className='font-bold text-lg text-[#1e1e2052] text-center' >Our clients</p>
                            </div>
                            <div className='clientsLogos flex flex-row items-center justify-center mx-auto max-w-[600px]'>
                                <img className='inline-block w-[80px] max-w-full mr-[60px]' src="/src/assets/netflix_logo.png" alt="" />
                                <img className='inline-block w-[100px] max-w-full mr-[60px]' src="/src/assets/microsoft_logo.png" alt="" />
                                <img className='inline-block w-[100px] max-w-full mr-[60px]' src="/src/assets/orion_logo.png" alt="" />
                                <img className='inline-block w-[100px] max-w-full mr-[60px]' src="/src/assets/amazon_logo.png" alt="" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}