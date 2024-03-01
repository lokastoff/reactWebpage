import React from 'react'
import { motion } from 'framer-motion'
export const About = () =>{
    return (
        <section className='sectionAbout mt-0 h-[1872px] bg-[#121313] max-sm:h-[2320px]'>
            <div className='pagePadding px-[2.5rem] max-sm:px-[1.5rem]'>
                <div className='containerLarge mx-auto w-full max-w-[73.25rem]'>
                    <div className='paddingVertical px-0'>
                        <div className='aboutComponent'>
                            <div className='aboutGrid1 grid grid-rows-1 grid-cols-[1.75fr_1.25fr] max-sm:grid-cols-1 gap-y-[16px] max-sm:gap-y-[4rem] max-sm:gap-x-[4rem] gap-x-[16px] items-stretch justify-items-stretch content-stretch justify-stretch pt-[10rem] max-sm:pt-[4rem]'>
                                <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:1.5}} className='aboutItem1'>
                                    <img className='inline-block w-auto max-w-full' src="src/assets/aboutImage3.png" alt="" />
                                </motion.div>
                                <motion.div initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} transition={{duration:1.5}} className='aboutItem1 items-center'>
                                    <div className='contentHeading'>
                                        <div className='marginBottom mb-[2rem]'>
                                            <div className='animWrap overflow-hidden'>
                                                <h2 className='my-0 font-extrabold text-[3.75rem] text-[#f4f4f4] max-sm:text-[3rem]'>Easy and</h2>
                                            </div>
                                            <div className='animWrap overflow-hidden'>
                                                <h2 className='my-0 font-extrabold text-[3.75rem] text-[#f4f4f4] max-sm:text-[3rem]'>effortless way</h2>
                                            </div>
                                            <div className='animWrap overflow-hidden'>
                                                <h2 className='my-0 font-extrabold text-[3.75rem] text-[#f4f4f4] max-sm:text-[3rem]'>to connect with</h2>
                                            </div>
                                            <div className='animWrap overflow-hidden'>
                                                <h2 className='my-0 font-extrabold text-[3.75rem] text-[#f4f4f4] max-sm:text-[3rem]'>your team</h2>
                                            </div>
                                        </div>
                                        <div className='marginBottom mb-[2rem]'>
                                            <div className='animWrap '>
                                                <p className='font-medium text-[16px] text-[#f4f4f466] text-left'>With hush you can easliy connect with your team in a different fields, you can create, manage, and edit what ever you want inside the channel. Create as many as you want</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='marginBottom'>
                                        <button className='py-[16px] max-sm:py-[12px] px-[24px] font-medium text-[16px] text-[#f4f4f4a3] rounded-[32px] border-[1px] border-[#f4f4f429] duration-200 ease-in-out transition-colors hover:text-white hover:border-white'>Learn more about Hush</button>
                                    </div>
                                </motion.div>
                            </div>
                            <div className='aboutGrid2 grid gap-[16px] max-sm:gap-[4rem] grid-cols-[1.25fr_1.75fr] max-sm:grid-cols-1 grid-rows-1 items-stretch justify-items-stretch content-stretch justify-stretch pt-[10rem]'>
                                <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:1.5}} className='aboutItem2  content-center justify-center'>
                                    <div className='contentheading'>
                                        <div className='marginBottom mb-[2rem]'>
                                            <div className='animWrap overflow-hidden'>
                                                <h2 className='font-extrabold text-[3.75rem] max-sm:text-[3rem] text-[#f4f4f4]'>  
                                                    Tons of
                                                </h2>
                                            </div>
                                            <div className='animWrap overflow-hidden'>
                                                <h2 className='font-extrabold text-[3.75rem]  max-sm:text-[3rem] text-[#f4f4f4]'>  
                                                    supportive
                                                </h2>
                                            </div>
                                            <div className='animWrap overflow-hidden'>
                                                <h2 className='font-extrabold text-[3.75rem] max-sm:text-[3rem] text-[#f4f4f4]'>  
                                                    community you
                                                </h2>
                                            </div>
                                            <div className='animWrap overflow-hidden'>
                                                <h2 className='font-extrabold text-[3.75rem] max-sm:text-[3rem] text-[#f4f4f4]'>  
                                                    can discover
                                                </h2>
                                            </div>
                                        </div>
                                        <div className='marginBottom mb-[2rem]'>
                                            <div className='animWrap ovevflow-hidden'>
                                                <p className='text-[16px] font-medium text-[#f4f4f466]'>
                                                Search any type and field of community you want, by searching on the search page you can discover tons of supportive community that will help you with your work.     
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='marginBottom'>
                                        <button className=' py-[16px] max-sm:py-[12px] px-[24px] text-[18px] font-medium text-[#f4f4f4a3] rounded-[32px] border-[1px] border-[#f4f4f429] duration-200 ease-in-out transition-colors hover:text-white hover:border-white'>
                                        Explore the communities
                                        </button>
                                            
                                    </div>
                                </motion.div>
                                <motion.div initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} transition={{duration:1.5}} className='aboutItem2'>
                                    <img className = 'inline-block w-auto max-w-full ' src="/src/assets/aboutImage2.png" alt="" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}