import React from 'react'
import { motion } from 'framer-motion'
import { ProductCardList } from './productCard'
import { products } from '../../services/products'
export const ProductComponent = () =>{
    return(
        <section className='flex justify-center items-center text-center min-h-screen h-auto bg-headerImg bg-cover bg-center'>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:0.2}} className='grid grid-cols-[1fr_1fr_1fr] gap-[1.3em] mx-[20%] pt-[5%]'>
                <ProductCardList data = {products}/>
            </motion.div>
        </section>
    )
}
