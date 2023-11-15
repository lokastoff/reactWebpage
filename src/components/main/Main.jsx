import React from 'react'
import { HomeHeader } from './HomeHeader'
import { Clients } from './Clients'
import { Features } from './Features'
import { About } from './About'
import { Cta } from './Cta'
export const Main = () =>{
    return(
       <div className='mainWrapper'>
            <HomeHeader />
            <Clients />
            <Features />
            <About />
            <Cta />
       </div>
    )
}