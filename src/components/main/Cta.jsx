import React from "react";
import { motion } from "framer-motion";
export const Cta = () => {
    return (
        <section className="sectionCta mt-[-240px] max-sm:mt-[-166] static">
            <div className="pagePadding px-[2.5rem] max-sm:px-[1rem]">
                <div className="containerLarge mx-auto w-full max-w-[73.25rem] ">
                    <div className="paddingVertical px-0">
                        <motion.div initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} transition={{duration:1}} className="ctaComponent block py-[40px] static bg-[url('/src/assets/CTAback.png')] rounded-[32px] bg-cover">
                            <div className="ctaContent mx-auto max-w-[704px] items-center">
                                <div  className="contentHeading">
                                    <div className="marginBottom mb-[2rem]">
                                        <div className="animWrap overflow-hidden">
                                            <h2 className="font-extrabold text-[3.75rem] max-sm:text-[3rem] text-[#f4f4f4] text-center">Join thousands</h2>
                                        </div>
                                        <div className="animWrap overflow-hidden">
                                            <h2 className="font-extrabold text-[3.75rem] max-sm:text-[3rem] text-[#f4f4f4] text-center">creative teams on Hush</h2>
                                        </div>
                                    </div>
                                    <div className="marginBottom mb-[2rem]">
                                        <div className="animWrap overflow-hidden">
                                            <p className="font-medium text-[16px] text-[#f4f4f466] text-center">Download for free</p>
                                        </div>
                                    </div>
                                </div>
                                <motion.div transition = {{duration:0.2}} whileHover = {{scale:1.2,transition:{duration:0.2}}} className="buttonRow ">
                                    <a className='flex flex-row items-center justify-center mx-auto px-[26px] py-[20px] w-[272px] h-[62px] relative bg-[#f4f4f4] rounded-[40px] border-[1px] ' href="">
                                        <img className='mr-[10px] inline-block max-w-full' src="/src/assets/appleLogoBlack.png" alt="" />
                                        <p className="font-medium text-center text-black text-[18px]">Download for MacOS</p>
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}