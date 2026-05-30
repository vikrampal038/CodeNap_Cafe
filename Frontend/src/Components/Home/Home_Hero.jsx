import React from "react";
import CoffeeMug from "../../assets/Home/Coffee-Mug.png";
import { motion } from "motion/react";
import { fadeUp, slideLeft, slideRight } from "../../utils/motionVariants";
import MotionWrapper from "../Motion/MotionWrapper";

const Home_Hero = () => {
  return (
    <main className="bg-cover bg-no-repeat bg-center bg-[#4E3629] pb-16 relative overflow-hidden">
      {/* Decorative backdrop glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#EDAD55]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#E4594D]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <section className="pt-20 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 place-items-center px-6 sm:px-10 lg:px-20 xl:px-32">
          
          {/* Left Section */}
          <MotionWrapper
            variants={slideLeft}
            className="text-[#F9E4C8] space-y-6 mt-10 text-center md:text-left max-w-sm md:max-w-full bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:border-[#EDAD55]/30 transition duration-500"
          >
            <MotionWrapper variants={fadeUp}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight leading-tight">
                <span className="text-[#EDAD55] drop-shadow-[0_2px_8px_rgba(237,173,85,0.3)]">Coffee</span>
                <br />
                <span className="px-2 text-white bg-white/5 border border-white/10 rounded-2xl inline-block mt-2">Tumbler</span>
              </h1>
            </MotionWrapper>
            
            <MotionWrapper variants={fadeUp}>
              <div className="relative">
                <div className="relative z-10">
                  <h2 className="text-xl sm:text-2xl text-[#EDAD55] mb-2 uppercase font-bold tracking-wider">
                    Coffee <span className="text-[#E4594D]">Lovers</span>
                  </h2>
                  <div className="w-16 h-1 bg-[#EDAD55] rounded-xl mb-5 mx-auto md:mx-0"></div>
                  <p className="text-sm sm:text-base leading-relaxed text-[#ffff]/80 font-semibold font-sans mb-6">
                    <span className="text-lg sm:text-xl font-bold font-mono text-[#FAEDCD] block mb-2">
                      “Jahaan Coding aur Coffee Ek Saath Chalti Hai!”
                    </span>
                    Thandi coding nights ya garam din ka stress, CodeNap Cafe
                    har coder ka ultimate adda hai. Freshly brewed coffee, cozy
                    vibes, aur ek inspiring space jahan har sip ke saath mile
                    motivation aur har break ke baad mile nayi energy. Come sip,
                    code, repeat!
                  </p>

                  {/* Coder & Coffee Stat Badges */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center">
                    <div className="bg-white/5 p-3 rounded-2xl border border-white/5 hover:border-[#EDAD55]/30 transition duration-300">
                      <div className="text-lg font-black text-[#EDAD55] font-mono">5K+</div>
                      <div className="text-[10px] text-[#FAEDCD]/75 uppercase font-bold tracking-wider mt-1">Cups Brewed</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-2xl border border-white/5 hover:border-[#EDAD55]/30 transition duration-300">
                      <div className="text-lg font-black text-[#EDAD55] font-mono">10K+</div>
                      <div className="text-[10px] text-[#FAEDCD]/75 uppercase font-bold tracking-wider mt-1">Lines Coded</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-2xl border border-white/5 hover:border-[#EDAD55]/30 transition duration-300">
                      <div className="text-lg font-black text-[#EDAD55] font-mono">1.2K+</div>
                      <div className="text-[10px] text-[#FAEDCD]/75 uppercase font-bold tracking-wider mt-1">Coders Met</div>
                    </div>
                  </div>

                </div>
              </div>
            </MotionWrapper>
          </MotionWrapper>

          {/* Center Image Section */}
          <MotionWrapper
            variants={fadeUp}
            className="relative mt-10 sm:mt-16 md:mt-0 perspective-3d flex justify-center items-center"
          >
            {/* Ambient Radial Mug Halo */}
            <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] bg-[radial-gradient(circle_at_center,rgba(237,173,85,0.2)_0%,transparent_70%)] rounded-full blur-2xl z-0 animate-pulse"></div>
            
            <motion.img
              animate={{ rotateY: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative z-20 w-full max-w-xs sm:max-w-sm md:max-w-md drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500"
              src={CoffeeMug}
              alt="Coffee Mug"
            />
            {/* Ring Div */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute top-[40px] right-[-20px] z-10 w-44 h-44 rounded-full pointer-events-none"
              style={{
                borderWidth: "8px",
                borderStyle: "solid",
                borderTopColor: "#EDAD55",
                borderRightColor: "transparent",
                borderBottomColor: "#EDAD55",
                borderLeftColor: "transparent",
                backgroundColor: "transparent",
              }}
            ></motion.div>
          </MotionWrapper>

          {/* Right Section */}
          <MotionWrapper
            variants={slideRight}
            className="text-[#F9E4C8] space-y-6 text-center md:text-left max-w-sm md:max-w-full bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:border-[#EDAD55]/30 transition duration-500"
          >
            <MotionWrapper variants={fadeUp}>
              <div className="relative">
                <div className="relative z-10">
                  <h2 className="text-xl sm:text-2xl text-[#EDAD55] mb-2 uppercase font-bold tracking-wider">
                    Coffee <span className="text-[#E4594D]">Lovers</span>
                  </h2>
                  <div className="w-16 h-1 bg-[#EDAD55] rounded-xl mb-5 mx-auto md:mx-0"></div>
                  <p className="text-sm sm:text-base leading-relaxed text-[#ffff]/80 font-semibold font-sans">
                    <span className="text-lg sm:text-xl font-bold font-mono text-[#FAEDCD] block mb-2">
                      “Fuel Your Code, One Cup at a Time!”
                    </span>
                    Yeh sirf ek cafe nahi, ek experience hai. Perfect blends,
                    soothing ambience, aur ek aisi jagah jahan coders aur
                    creatives milte hain, ideas exchange karte hain, aur har
                    coffee cup ke saath inspire hote hain. Join us — kyunki best
                    code kabhi khali pet nahi likha jaata!
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </MotionWrapper>

        </div>
      </section>
    </main>
  );
};

export default Home_Hero;
