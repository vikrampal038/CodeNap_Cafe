import React from 'react';
import { zoomIn } from '../../utils/motionVariants';
import { motion } from 'framer-motion';
const AnimatedCard = ( { children}) => {
  return (
    <motion.div
        variants = {zoomIn}
        initial = "hidden"
        animate = "visible"
        // className  = {` rounded-lg shadow-md p-4 bg-white ${className}`}
        >
            {children}
    </motion.div>
  )
}

export default AnimatedCard
