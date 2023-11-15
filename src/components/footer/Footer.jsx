import React from "react";
export const Footer = () =>{
    return(
        <div className="pagePadding px-[2.5rem]">
            <div className="containerLarge mx-auto w-full max-w-[73.25rem] ">
                <div className="paddingVertical pt-[4rem] pb-[2rem]">
                    <div className="footerComponent ">
                        <div className="footerGrid grid grid-cols-[2.5fr_1fr_1fr_1fr] gap-[4rem] items-stretch justify-items-stretch content-stretch justify-stretch">
                            <div className="footerItem">
                                <div className="marginBottom mb-[1rem]">
                                    <img className='inline-block max-w-full' src="/src/assets/footerLogo.png" alt="" />
                                </div>
                                <div className="marginBottom m-0">
                                    <p className="max-w-[304px] font-bold text-[16px] text-[#1e1e203d]">A team messaging app for everyone to connect with their team.</p>
                                </div>
                            </div>
                            <div className="footerItem">
                                <div className="marginBottom mb-[2rem]">
                                    <h4 className="my-[10px] font-bold text-[16px] text-[#1e1e20a3]">Product</h4>
                                </div>
                                <div className="footerLinks">
                                    <a className='footerLink block mb-[10px] text-[16px] font-medium text-[#1e1e203d] duration-200 ease-in-out transition-colors hover:text-[#1e1e20a3]' href="">
                                        Updates
                                    </a>
                                    <a className='footerLink block mb-[10px] text-[16px] font-medium text-[#1e1e203d] duration-200 ease-in-out transition-colors hover:text-[#1e1e20a3]' href="">
                                        Downloads
                                    </a>
                                    <a className='footerLink block mb-[10px] text-[16px] font-medium text-[#1e1e203d] duration-200 ease-in-out transition-colors hover:text-[#1e1e20a3]' href="">
                                        Beta test
                                    </a>
                                    <a className='footerLink block mb-[10px] text-[16px] font-medium text-[#1e1e203d] duration-200 ease-in-out transition-colors hover:text-[#1e1e20a3]' href="">
                                        Pricing product
                                    </a>
                                </div>
                            </div>
                            <div className="footerItem">
                            <div className="marginBottom mb-[2rem]">
                                    <h4 className="my-[10px] font-bold text-[16px] text-[#1e1e20a3]">Support</h4>
                                </div>
                                <div className="footerLinks">
                                    <a className='footerLink block mb-[10px] text-[16px] font-medium text-[#1e1e203d] duration-200 ease-in-out transition-colors hover:text-[#1e1e20a3]' href="">
                                        Help center
                                    </a>
                                    <a className='footerLink block mb-[10px] text-[16px] font-medium text-[#1e1e203d] duration-200 ease-in-out transition-colors hover:text-[#1e1e20a3]' href="">
                                        Account information
                                    </a>
                                    <a className='footerLink block mb-[10px] text-[16px] font-medium text-[#1e1e203d] duration-200 ease-in-out transition-colors hover:text-[#1e1e20a3]' href="">
                                        About
                                    </a>
                                    <a className='footerLink block mb-[10px] text-[16px] font-medium text-[#1e1e203d] duration-200 ease-in-out transition-colors hover:text-[#1e1e20a3]' href="">
                                        Contact us
                                    </a>
                                </div>
                            </div>
                            <div className="footerItem">
                            <div className="marginBottom mb-[2rem]">
                                    <h4 className="my-[10px] font-bold text-[16px] text-[#1e1e20a3]">Help and solutions</h4>
                                </div>
                                <div className="footerLinks">
                                    <a className='footerLink block mb-[10px] text-[16px] font-medium text-[#1e1e203d] duration-200 ease-in-out transition-colors hover:text-[#1e1e20a3]' href="">
                                        Talk to support
                                    </a>
                                    <a className='footerLink block mb-[10px] text-[16px] font-medium text-[#1e1e203d] duration-200 ease-in-out transition-colors hover:text-[#1e1e20a3]' href="">
                                        Support docs
                                    </a>
                                    <a className='footerLink block mb-[10px] text-[16px] font-medium text-[#1e1e203d] duration-200 ease-in-out transition-colors hover:text-[#1e1e20a3]' href="">
                                        System status
                                    </a>
                                    <a className='footerLink block mb-[10px] text-[16px] font-medium text-[#1e1e203d] duration-200 ease-in-out transition-colors hover:text-[#1e1e20a3]' href="">
                                        Covid responde
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footerComponent block">
                        <div className="footerBottom flex justify-between mt-[54px]">
                            <div className="footerleft">
                                <p className="font-medium text-[#1e1e203d] text-[16px]">© 2021 Hush Inc. Copyright and All rights reserved</p>
                            </div>
                            <div className="footerRight">
                                <div className="footerLinks">
                                    <a className='text-[#1e1e203d] font-medium text-[16px]' href="">Terms and Conditions</a>
                                    <a className = 'text-[#1e1e203d] font-medium text-[16px]' href=""> · Privacy Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}