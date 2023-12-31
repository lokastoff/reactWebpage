import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
export const Header = () => {
    const navLogo = '/src/assets/nav_logo.png'
    const headerAnimation = {
        hidden: { opacity: 0, y: -90 },
        visible : { opacity: 1, y: 0 }
    }
    return (
        <header className='navComponent w-full block px-10 py-5 aspect-auto overflow-hidden absolute font-medium text-base bg-transparent'>
                <motion.nav initial={headerAnimation.hidden} animate={headerAnimation.visible} transition= {{duration:1.3, delay:0.25}} className='navContainer flex flex-row items-center justify-between mx-auto py-0 w-full h-full max-w-6xl relative'>
                    <div className='navWrapper flex flex-row items-center justify-center'>
                        <Link className='logoLink mr-25' to="/">
                            <img className='max-w-full inline-block w-auto h-auto'src={navLogo} alt="App logo" />
                        </Link>
                        <div className='navLinkWrapper'>
                            <Link className = 'inline-block p-5 mr-10 text-lg text-gray-100/40 duration-200 ease-in-out transition-colors hover:text-white' to="/Products">Products</Link>
                            <Link className = 'inline-block p-5 mr-10 text-lg text-gray-100/40 duration-200 ease-in-out transition-colors hover:text-white' to="/Pricing">Pricing</Link>
                            <Link className = 'inline-block p-5 mr-10 text-lg text-gray-100/40 duration-200 ease-in-out transition-colors hover:text-white' to="/Patchrelease">Patch release</Link>
                        </div>  
                    </div>
                    <div className='buttonWrapper flex justify-end'>
                            <Link to='/auth' className='px-6 py-4 border-2 border-solid border-gray-100/20 rounded-4xl text-gray-100/60 duration-200 ease-in-out transition-colors hover:text-white hover:border-white'>Create account</Link>
                    </div>
                </motion.nav>
        </header>
      
    )
}