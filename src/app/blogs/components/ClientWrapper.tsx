'use client'

import { motion } from 'framer-motion'
import React from 'react'

const ClientWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <motion.div
    
    initial={{opacity:0, y:10}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0}}
    transition={{duration:0.3}}
    className='mt-24 max-sm:mt-28 dark:bg-black'
    >

        {children}
    </motion.div>
  )
}

export default ClientWrapper
