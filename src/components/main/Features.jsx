import React from 'react'
import { motion } from 'framer-motion'
export const Features =()=>{
    return(
        <section className = 'featuresSection mt-0'>
            <div className='pageapdding px-[2.5rem] '>
                <div className='containerLarge mx-auto w-full max-w-[73.25rem]'>
                    <div className='paddingVertical py-[6rem] max-sm:py-[4rem]'>
                        <div className='featuresComponents overflow-visible'>
                            <div className='contentHeading mx-auto max-w-[672px] text-center'>
                                <div className='marginBottom mb-[2rem] text-center'>
                                    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2}} className='animWrap overflow-hidden'>
                                        <p className=' my-0 font-extrabold text-6xl text-[#1e1e20] max-sm:text-[3rem]'>Some of our features</p>
                                    </motion.div>
                                    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.2}} className='animWrap overflow-hidden'>
                                        <p className=' my-0 font-extrabold text-6xl text-[#1e1e20] max-sm:text-[3rem]'>that will help you</p>
                                    </motion.div>  
                                </div>
                                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.8}} className='marginBottom mb-[6rem]'>
                                    <p className='mb-0 text-[#1e1e2066] text-base'>As your needs grow, so can our services. We're here to support your growth every step of the way.</p>
                                </motion.div>
                            </div>
                            <div className='features-grid grid items-stretch justify-items-stretch content-stretch justify-stretch grid-cols-3 max-sm:grid-cols-1 grid-rows-1 gap-y-[4rem] gap-x-[4rem]'>
                                <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:1.5}} className='featuresItem grid-flow-row'>
                                    <div className='marginBottom mb-[1rem]'>
                                        <div className='animWrap overflow-hidden'>
                                            <img src="/assets/communication.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='marginBottom mb-[1rem]'>
                                        <div className='animWrap overflow-hidden'>
                                            <h3 className='font-bold text-[22px] text-[#1e1e20cc]'>Easy Communication</h3>
                                        </div>
                                    </div>
                                    <div className='marginBottom mb-[1rem]'>
                                        <div className='animWrap overflow-hidden'>
                                            <p className='mb-0 font-medium text-[#1e1e2052] text-base '>Easy and simple way to communicate with your team and friends, build with awesome features with it</p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className='featuresItem'>
                                    <div className='marginBottom mb-[1rem]'>
                                        <div className='animWrap overflow-hidden'>
                                            <img src="/assets/support.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='marginBottom mb-[1rem]'>
                                        <div className='animWrap overflow-hidden'>
                                            <h3 className='font-bold text-[22px] text-[#1e1e20cc]'>Community Support</h3>
                                        </div>
                                    </div>
                                    <div className='marginBottom mb-[1rem]'>
                                        <div className='animWrap overflow-hidden'>
                                            <p className='mb-0 font-medium text-[#1e1e2052] text-base '>A creative and quick way to get feedbacks and support in your team or community, just send the work and the rest will follow</p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} transition={{duration:1.5}} className='featuresItem'>
                                    <div className='marginBottom mb-[1rem]'>
                                        <div className='animWrap overflow-hidden'>
                                            <img src="/assets/channel.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='marginBottom mb-[1rem]'>
                                        <div className='animWrap overflow-hidden'>
                                            <h3 className='font-bold text-[22px] text-[#1e1e20cc]'>Discover Channel</h3>
                                        </div>
                                    </div>
                                    <div className='marginBottom mb-[1rem]'>
                                        <div className='animWrap overflow-hidden'>
                                            <p className='mb-0 font-medium text-[#1e1e2052] text-base '>Discover new channels you interest in, meet with new people around the world and make more connections</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}