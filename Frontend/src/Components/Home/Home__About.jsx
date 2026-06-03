import React from "react";
import AboutImage from "../../assets/Home/about-image.jpg";
import { motion } from "framer-motion";
import { fadeIn, fadeUp, slideLeft, slideRight } from "../../utils/motionVariants";
import MotionWrapper from "../Motion/MotionWrapper";

const About_Hero = () => {
  return (
    <div className="w-full py-20 bg-[#2E1E19] border-y border-white/5 flex justify-center items-center relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#EDAD55]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <MotionWrapper
        variants={slideLeft}
        className="flex flex-col xl:flex-row justify-between xl:mx-40 items-center w-full max-w-7xl p-8 sm:p-12 md:p-16 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden"
      >
        {/* Visual Ambient Halo */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#EDAD55]/10 rounded-full blur-3xl pointer-events-none z-0"></div>

        {/* Left Column (Dual Layer Rotating Image Frame) */}
        <MotionWrapper variants={fadeUp} className="relative z-10 lg:mr-10">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px]">
            {/* Elegant Double Spinning Golden Rings */}
            <div className="absolute -inset-6 rounded-full border-2 border-dashed border-[#EDAD55]/20 animate-[spin_25s_linear_infinite] pointer-events-none"></div>
            <div className="absolute -inset-3 rounded-full border border-white/10 animate-[spin_12s_linear_infinite_reverse] pointer-events-none"></div>
            
            <div className="w-full h-full overflow-hidden rounded-full border-[6px] border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
              <img
                className="w-full h-full object-cover transform hover:scale-105 transition duration-[1000ms]"
                src={AboutImage}
                alt="about image"
              />
            </div>
          </div>
        </MotionWrapper>

        {/* Right Column (High-End Text layout & Floating Capsules) */}
        <MotionWrapper
          variants={slideRight}
          className="flex flex-col justify-center items-center xl:items-start text-center xl:text-left max-w-2xl px-4 mt-16 xl:mt-0 relative z-10"
        >
          <span className="px-4 py-1.5 rounded-full bg-[#E4594D]/10 border border-[#E4594D]/20 text-[#E4594D] font-mono text-sm tracking-wider uppercase inline-block font-bold mb-4">
            🌿 Authentic Roastery
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#EDAD55] mb-2 font-serif tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(237,173,85,0.25)]">
            About Us
          </h1>
          <div className="h-1.5 w-28 bg-[#E4594D] rounded-full mb-8 mx-auto xl:mx-0"></div>
          <p className="text-lg sm:text-xl font-mono text-[#FAEDCD]/90 leading-relaxed mt-2 mb-10 font-medium">
            At Coffee House in Berndorf, Germany, we pride ourselves on being a
            go-to destination for coffee lovers and conversation seekers alike.
            We're dedicated to providing an exceptional coffee experience in a
            cozy and inviting atmosphere, where guests can relax, unwind, and
            enjoy their time in comfort.
          </p>
          
          {/* Social Links floating button capsules */}
          <MotionWrapper variants={fadeIn}>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <span className="text-sm uppercase tracking-widest text-white/50 font-bold font-sans">
                Follow Vikram Pal
              </span>
              <ul className="flex gap-4 items-center">
                {[
                  { href: "https://www.linkedin.com/in/vikrampal07/", iconClass: "fa-brands fa-linkedin" },
                  { href: "https://x.com/VikramPal038", iconClass: "fa-brands fa-instagram" },
                  { href: "https://web.telegram.org/k/", iconClass: "fa-brands fa-x-twitter" }
                ].map((social, idx) => (
                  <li key={idx}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-[#FAEDCD] hover:text-[#4E3629] hover:border-[#EDAD55] transition duration-500 shadow-lg hover:-translate-y-1.5"
                    >
                      <i className={`${social.iconClass} text-2xl`}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </MotionWrapper>
        </MotionWrapper>
      </MotionWrapper>
    </div>
  );
};

export default About_Hero;
