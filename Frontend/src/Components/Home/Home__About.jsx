import React from "react";
import AboutImage from "../../assets/Home/about-image.jpg";
import { motion } from "framer-motion";
import { fadeIn,fadeUp, slideLeft, slideRight } from "../../utils/motionVariants";
import MotionWrapper from "../Motion/MotionWrapper";

const About_Hero = () => {
  return (
    <div className="w-full py-16 bg-[#2E1E19] border-y border-white/5 flex justify-center items-center">
      <MotionWrapper
        variants={slideLeft}
        className="flex flex-col xl:flex-row justify-between xl:mx-40 items-center w-full max-w-7xl p-8 md:p-12 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] relative overflow-hidden"
      >
        {/* Visual Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#EDAD55]/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* User Image */}
      <MotionWrapper variants={fadeUp} className="relative z-10">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px]">
          {/* Dual Layer Glowing Frame */}
          <div className="absolute -inset-4 rounded-full border-2 border-dashed border-[#EDAD55]/30 animate-[spin_20s_linear_infinite] pointer-events-none"></div>
          <div className="absolute -inset-2 rounded-full border border-white/15 animate-[spin_10s_linear_infinite_reverse] pointer-events-none"></div>
          
          <div className="w-full h-full overflow-hidden rounded-full border-4 border-[#FAEDCD]/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <img
              className="w-full h-full object-cover transform hover:scale-110 transition duration-700"
              src={AboutImage}
              alt="about image"
            />
          </div>
        </div>
      </MotionWrapper>

      {/* About Us Details */}
      <MotionWrapper
        variants={slideRight}
        className="flex flex-col justify-center items-center xl:items-start text-center xl:text-left max-w-xl px-4 mt-12 xl:mt-0 relative z-10"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#EDAD55] mb-2 font-serif tracking-wide drop-shadow-[0_2px_8px_rgba(237,173,85,0.2)]">
          About Us
        </h1>
        <div className="h-1.5 w-24 bg-[#E4594D] rounded-full mb-6 mx-auto xl:mx-0"></div>
        <p className="text-lg sm:text-xl font-mono text-white/80 leading-relaxed mt-4 mb-10 font-medium">
          At Coffee House in Berndorf, Germany, we pride ourselves on being a
          go-to destination for coffee lovers and conversation seekers alike.
          We're dedicated to providing an exceptional coffee experience in a
          cozy and inviting atmosphere, where guests can relax, unwind, and
          enjoy their time in comfort.
        </p>
        
        {/* Social Links */}
        <MotionWrapper variants={fadeIn}>
          <ul className="flex gap-6 items-center justify-center xl:justify-start">
            {[
              { href: "https://www.linkedin.com/in/vikrampal07/", iconClass: "fa-brands fa-facebook" },
              { href: "https://x.com/VikramPal038/", iconClass: "fa-brands fa-instagram" },
              { href: "https://web.telegram.org/k/", iconClass: "fa-brands fa-x-twitter" }
            ].map((social, idx) => (
              <li key={idx} className="text-3xl">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-[#FAEDCD] hover:text-[#4E3629] hover:border-[#EDAD55] transition duration-500 shadow-md hover:-translate-y-1.5"
                >
                  <i className={`${social.iconClass} transition-transform`}></i>
                </a>
              </li>
            ))}
          </ul>
        </MotionWrapper>
      </MotionWrapper>
      </MotionWrapper>
    </div>
  );
};

export default About_Hero;
