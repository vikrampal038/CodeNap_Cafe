import React from "react";
import { Link } from "react-router-dom";
import CoffeeMug from "../../assets/Home/Coffee-Mug.png";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight } from "../../utils/motionVariants";
import MotionWrapper from "../Motion/MotionWrapper";

const Home_Hero = () => {
  return (
    <main className="w-full bg-cover bg-no-repeat bg-center bg-[#241511] pb-20 pt-16 relative overflow-hidden flex justify-center items-center min-h-[90vh]">
      {/* High-Fidelity Glow Halos */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#EDAD55]/10 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-[#E4594D]/5 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse"></div>

      {/* Subtle Coffee Bean / Coding Background Line Drawings */}
      <div className="absolute top-24 left-12 opacity-5 pointer-events-none select-none text-[#FAEDCD]">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 3v18M3 12h18M12 3a9 9 0 019 9M12 21a9 9 0 01-9-9" strokeDasharray="3 3"/>
        </svg>
      </div>

      <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Brand Headline, Narrative, Actions, Stats) */}
          <MotionWrapper
            variants={slideLeft}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EDAD55]/10 border border-[#EDAD55]/20 text-[#EDAD55] font-mono text-sm tracking-wider uppercase font-bold drop-shadow-md shadow-inner">
              <span className="animate-ping w-2 h-2 rounded-full bg-[#EDAD55]"></span>
              ☕ The Ultimate Coder's Coffee Lounge
            </div>

            {/* Massive Serif Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black font-serif tracking-tight leading-tight text-white">
                Brewed to <br />
                <span className="text-[#EDAD55] bg-gradient-to-r from-[#EDAD55] to-[#f3c88b] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(237,173,85,0.25)]">
                  Perfect Code
                </span>
              </h1>
              <div className="h-1.5 w-32 bg-[#E4594D] rounded-full mx-auto lg:mx-0"></div>
            </div>

            {/* Inspiring Coder Narrative */}
            <p className="text-base sm:text-lg leading-relaxed text-[#FAEDCD]/80 font-sans max-w-xl mx-auto lg:mx-0 font-medium">
              <span className="text-lg sm:text-xl font-bold font-mono text-[#EDAD55] block mb-2">
                “Jahaan Coding aur Coffee Ek Saath Chalti Hai!”
              </span>
              Thandi coding nights ya garam din ka stress, CodeNap Cafe
              har coder ka ultimate adda hai. Freshly brewed coffee, cozy
              vibes, aur ek inspiring space jahan har sip ke saath mile
              motivation aur har break ke baad mile nayi energy. Come sip,
              code, repeat!
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/menu"
                className="px-8 py-4 bg-[#E4594D] text-white hover:bg-[#FAEDCD] hover:text-[#1E120F] font-bold text-lg rounded-2xl shadow-[0_0_15px_rgba(228,89,77,0.4)] hover:shadow-[0_0_22px_rgba(237,173,85,0.6)] transition-all duration-500 hover:-translate-y-1 transform"
              >
                EXPLORE MENU
              </Link>
              <Link
                to="/reservation"
                className="px-8 py-4 bg-transparent border-2 border-white/20 text-white hover:border-[#EDAD55] hover:text-[#EDAD55] font-bold text-lg rounded-2xl transition-all duration-500 hover:-translate-y-1 transform"
              >
                BOOK A TABLE
              </Link>
            </div>

            {/* Glassmorphic Metrics Card */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-center max-w-lg mx-auto lg:mx-0 bg-white/5 backdrop-blur-sm p-4 rounded-3xl border border-white/5 shadow-inner">
              <div className="p-2">
                <div className="text-2xl font-black text-[#EDAD55] font-mono">5K+</div>
                <div className="text-[10px] text-[#FAEDCD]/75 uppercase font-bold tracking-widest mt-1">Cups Brewed</div>
              </div>
              <div className="p-2 border-x border-white/10">
                <div className="text-2xl font-black text-[#EDAD55] font-mono">10K+</div>
                <div className="text-[10px] text-[#FAEDCD]/75 uppercase font-bold tracking-widest mt-1">Lines Coded</div>
              </div>
              <div className="p-2">
                <div className="text-2xl font-black text-[#EDAD55] font-mono">1.2K+</div>
                <div className="text-[10px] text-[#FAEDCD]/75 uppercase font-bold tracking-widest mt-1">Coders Hosted</div>
              </div>
            </div>
          </MotionWrapper>

          {/* Right Column (High-End Coffee Visual Spotlight & Floating Steam) */}
          <MotionWrapper
            variants={slideRight}
            className="lg:col-span-5 relative mt-10 lg:mt-0 flex justify-center items-center"
          >
            {/* Visual Canvas Backdrop */}
            <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] bg-[radial-gradient(circle_at_center,rgba(237,173,85,0.22)_0%,transparent_70%)] rounded-full blur-2xl z-0 animate-pulse pointer-events-none"></div>

            {/* Custom SVG Floating Steam Particles */}
            <div className="absolute -top-12 z-10 w-full flex justify-center gap-6 select-none pointer-events-none">
              {[1, 2, 3].map((val) => (
                <motion.svg
                  key={val}
                  width="20"
                  height="60"
                  viewBox="0 0 20 60"
                  fill="none"
                  stroke="#FAEDCD"
                  strokeWidth="1.5"
                  className="opacity-40"
                  animate={{ y: [20, -40], opacity: [0, 0.5, 0], x: [0, val * 4, -val * 4, 0] }}
                  transition={{ repeat: Infinity, duration: 3 + val, ease: "easeInOut", delay: val * 0.5 }}
                >
                  <path d="M10 60 C 15 50, 5 40, 10 30 C 15 20, 5 10, 10 0" />
                </motion.svg>
              ))}
            </div>

            {/* Rotating Orbit Halo Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
              className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] border border-dashed border-[#EDAD55]/30 rounded-full z-10 flex items-center justify-center pointer-events-none"
            >
              <div className="w-4 h-4 rounded-full bg-[#EDAD55] absolute top-0 shadow-[0_0_12px_#EDAD55]"></div>
            </motion.div>

            {/* Main Rotating Coffee Mug */}
            <motion.img
              animate={{ rotateY: 360, y: [0, -10, 0] }}
              transition={{ 
                rotateY: { repeat: Infinity, duration: 16, ease: "linear" },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative z-20 w-full max-w-[240px] sm:max-w-[310px] drop-shadow-[0_30px_70px_rgba(0,0,0,0.65)] transform hover:scale-105 transition-transform duration-500 pointer-events-none"
              src={CoffeeMug}
              alt="Coffee Mug"
            />
          </MotionWrapper>

        </div>
      </section>
    </main>
  );
};

export default Home_Hero;
