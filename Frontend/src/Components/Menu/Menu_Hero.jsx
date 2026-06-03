import React from "react";
import BgImage5 from "../../assets/cover-img/Cover-1.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Menu_Hero = () => {
  return (
    <div
      className="w-full h-[320px] md:h-[380px] lg:h-[420px] bg-cover bg-center bg-no-repeat relative overflow-hidden rounded-b-[2rem] shadow-xl border-b border-[#3e251f]/35"
      style={{ backgroundImage: `url(${BgImage5})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/65 z-0" />
      
      {/* Subtle Warm Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#120705] via-transparent to-black/40 z-0" />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#bcee04] font-mono text-[10px] tracking-[0.4em] uppercase mb-3"
        >
          ☕ fresh & roasted
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5E6CC]"
        >
          Our <span className="text-[#bcee04]">Menu</span>
        </motion.h1>

        {/* Simple Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[#DACAB5]/75 text-xs sm:text-sm font-sans max-w-md mt-3 font-light"
        >
          Explore our handpicked selection of premium coffee blends and artisan snacks.
        </motion.p>

        {/* Clean Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex gap-3 text-[#DACAB5]/80 mt-6 items-center text-xs font-mono tracking-widest"
        >
          <Link to="/home" className="hover:text-[#bcee04] transition-colors font-bold">
            HOME
          </Link>
          <span className="text-[#DACAB5]/30">&gt;</span>
          <Link to="/gallery" className="hover:text-[#bcee04] transition-colors font-bold">
            GALLERY
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu_Hero;
