'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.div>
        <motion.nav>
            <motion.div inherit={{opacity: 0,y:20}}
            animate={{opacity:1,y:0}}
            exit={{opacity:1,y:20}}
            >Hero Icon</motion.div>
        </motion.nav>
    </motion.div>
  )
}

export default Header