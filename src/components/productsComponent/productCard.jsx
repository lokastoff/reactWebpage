import React from 'react'
import { motion } from 'framer-motion'
import { products } from '../../services/products'
const ProductCard = (props) => {
    return(
    <motion.div  whileHover={{scale:1.05}} className='flex flex-col justify-between px-[1.6em] py-[1.5em] rounded-[0.5em] border-[0.1em] border-white bg-white'>
        <div className='flex flex-col items-start'>
            <div className='py-[0.5em] px-[1em] rounded-[0.5em] bg-[#eaeaea]'>
                <span className='font-normal text-[1.1em] text-black uppercase'>{props.type}</span>
            </div>
            <div className='flex items-center h-[5.5em]'>
                <img className='w-[8em] object-contain' src={props.img} alt="" />
            </div>
            <span className='font-normal text-[1em] text-start'>{props.text}</span>
        </div>
        <div>
            <a className='flex items-center mt-[1em] gap-[1em]' href="">
                <span className='font-bold text-[1.2em] text-black'>LEARN MORE</span>
                <img className='object-cover h-[2.4em] ' src="https://uploads-ssl.webflow.com/62b4f617dd95ab112536fba0/62ba3dd2c15a5099a3b20939_621c9b00b34f8539e050b7fc_Link%20Arrow%20(2)%201.png" alt="" />
            </a>
        </div>
    </motion.div>
    )
}
export const ProductCardList = ({ data }) => {
    return data.map((card) => (
      <ProductCard key={card.id} type={card.type} img={card.logo} text={card.text} />
    ));
  };
