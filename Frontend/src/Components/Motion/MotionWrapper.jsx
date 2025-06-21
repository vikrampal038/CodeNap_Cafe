import React from 'react';
import { motion } from "framer-motion";

const MotionWrapper = ({ children, variants, className = "", ...props }) => (
  <motion.div
    variants={variants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export default MotionWrapper;




