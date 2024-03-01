import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
export const HomeHeader = () =>{
    return(
        <section className='h-1200 bg-headerImg bg-cover bg-center max-sm:h-[806px]'>
          <div className='pagePadding px-10 max-sm:px-[1.5rem]'>
            <div className='containerLarge mx-auto w-full max-w-6xl'>
                <div className='padding-vertical px-0 pt-[8rem] pb-[6rem] max-sm:pt-[4rem] max-sm:pb-[3rem]'>
                    <div className='homeHeaderComponent mt-[60px]'>
                        <div className='homeHeaderContent'>
                                <div className='marginBottom mx-0 mt-0 mb-[2rem] '>
                                    <motion.div initial ={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition= {{duration:2, delay:0.6}}  className='animWrap overflow-hidden'>
                                        <h1 className='my-0 font-bold text-8xl text-[#f4f4f4] text-center max-sm:text-[4rem]'>Connect with</h1>
                                    </motion.div>
                                    <motion.div initial ={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition= {{duration:2, delay:0.6}} className='animWrap overflow-hidden'>
                                        <h1 className='my-0 font-bold text-8xl text-[#f4f4f4] text-center max-sm:text-[4rem]'>your team</h1>
                                    </motion.div>
                                </div>
                                <div className='marginBottom mx-0 mt-0 mb-[3rem]'>
                                    <motion.div initial ={{opacity:0}} animate={{opacity:1}} transition= {{duration:2, delay:0.6}} className='animWrap overflow-hidden'>
                                        <p className='mx-auto mb-0 max-w-[476px] text-base text-gray-100/40 text-center'>
                                        Hush is a messaging app for your team that will helps you to connect with everyone in a easy and comfortable way posssible
                                        </p>
                                    </motion.div>
                                </div>
                                <motion.div initial ={{opacity:0}} animate={{opacity:1}} transition= {{duration:2, delay:0.6}} className='marginBottom m-0'>
                                    <motion.div transition = {{duration:0.2}} whileHover = {{scale:1.2,transition:{duration:0.2}}} className='hoverAnim'>
                                        <a href="" className='gradientButton flex flex-row text-center items-center justify-center mx-auto px-[26px] py-[20px] w-[272px] h-[62px] relative border-[1px] rounded-[40px] border-gray-100/16 bg-gradient-to-r from-[#4c85fa] to-[#236bfe]'>
                                            <img className = 'inline-block max-w-full absolute left-[-18px] top-[-18px] right-auto bottom-auto' src="/src/assets/dropsDownload.png" alt="" />
                                            <img className = 'appleLogo maw-w-full inline-block static mr-[10px]' src="/src/assets/appleLogo.png" alt="" />
                                            <p className='font-medium text-base text-[#f4f4f4]'>Download for MacOs</p>
                                            <div className='shadow-[0_0_140px_1px] shadow-[#387aff] mt-0 w-[272px] h-[62px] absolute rounded-[40px]'>
                                            </div>
                                        </a>
                                    </motion.div>
                                </motion.div>
                        </div>
                        <div className ='homeHeaderImg flex items-center justify-center relative'>
                            <motion.img initial ={{opacity:0}} animate={{opacity:1}} transition= {{duration:1, delay:0.6}}className='inline-block max-w-full absolute top-[16px] right-[-60px] left-auto bottom-auto max-sm:top-[78px] max-sm:right-[-20px] max-sm:w-[34px]' src="/src/assets/headerImageDrops.png" alt="" />
                            <div className='margin-top mt-[6rem]'>
                                <motion.div initial ={{opacity:0}} animate={{opacity:1}} transition= {{duration:1, delay:0.6}} className='animWrap overflow-hidden'>
                                    <img className = 'headerImage inline-block max-w-full' src="/src/assets/headerImage.png" alt="" />
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
          </div>  
        </section>
    )
}