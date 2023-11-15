import React from 'react'
import { Header } from '../../components/header/Header'
import { Main } from '../../components/main/Main'
import { FooterWrapper } from '../../components/footer/FooterWrapper'
import { HeaderNoAnim } from '../../components/header/HeaderNoAnim'
import { motion } from 'framer-motion'
export const Home = () =>{
    return(
        <div className='pageWrapper static'>
            <HeaderNoAnim />
            <Main />
            <FooterWrapper />
        </div>
    )
}