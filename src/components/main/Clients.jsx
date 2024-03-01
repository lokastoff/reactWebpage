import React from 'react'
import { motion } from 'framer-motion'
export const Clients = () => {
    return(
        <section className='clientsSection mt-[352px] max-sm:mt-[134px]'>
            <div className='pagePadding px-[2.5rem] max-sm:px-[1.5rem]'>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2}} className='containerLarge mx-auto w-full max-w-[73.25rem]'>
                    <div className='paddingVertical px-0 py-[4rem ]'>
                        <div className='block clientsComponent'>
                            <div className='marginBottom mb-[2rem]'>
                                <p className='font-bold text-lg text-[#1e1e2052] text-center' >Our clients</p>
                            </div>
                            <div className='clientsLogos flex flex-row max-sm:flex-col max-sm:mx-0  items-center justify-center mx-auto max-w-[600px]'>
                                <img className='inline-block w-[80px] max-w-full mr-[40px] max-sm:mr-0 max-sm:mt-[24px]' src="/src/assets/netflix_logo.png" alt="" />
                                <img className='inline-block w-[100px] max-w-full mr-[40px] max-sm:mr-0 max-sm:mt-[24px]' src="/src/assets/microsoft_logo.png" alt="" />
                                <img className='inline-block w-[100px] max-w-full mr-[40px] max-sm:mr-0 max-sm:mt-[24px]' src="/src/assets/orion_logo.png" alt="" />
                                <img className='inline-block w-[100px] max-w-full mr-[40px] max-sm:mr-0 max-sm:mt-[24px]' src="/src/assets/amazon_logo.png" alt="" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}