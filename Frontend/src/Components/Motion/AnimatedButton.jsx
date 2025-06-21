import React from 'react';
import { motion } from "framer-motion";

const AnimatedButton = ({ children, className = "", ...rest }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;

