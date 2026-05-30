import React from "react";
import blackCoffee from "../../assets/Home/Black_Coffee.png";
import coldCoffee from "../../assets/Home/Cold_Coffee.png";
import hotCoffee from "../../assets/Home/Hot_Coffee.png";
import { motion } from "framer-motion";
import MotionWrapper from "../Motion/MotionWrapper";
import { fadeUp, zoomIn } from "../../utils/motionVariants";

const Home_Service = () => {
  return (
    <div className="w-full flex justify-center items-center p-4 sm:p-6 md:p-10 py-16 bg-[#2D1C17] border-y border-white/5">
      <div className="w-full max-w-7xl text-center">
        {/* heading section */}
        <MotionWrapper variants={fadeUp} className="mb-16 px-4">
          <h1 className="mb-4 text-4xl sm:text-5xl font-extrabold text-white font-serif tracking-wide">
            Fresh and <span className="text-[#EDAD55] drop-shadow-[0_2px_8px_rgba(237,173,85,0.2)]">Tasty Coffee</span>
          </h1>
          <p className="text-md sm:text-lg md:text-xl text-[#FAEDCD] font-bold font-sans tracking-wide max-w-2xl mx-auto opacity-95">
            Fresh aroma, delicious taste, energizing sip, perfect for mornings,
            evenings, friends, or solo moments.
          </p>
        </MotionWrapper>

        {/* Image + Description section */}
        <motion.div
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-12 mt-16"
        >
          {/* Black Coffee */}
          <MotionWrapper
            variants={zoomIn}
            className="flex flex-col justify-center items-center w-72 sm:w-80 md:w-96 bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:border-[#EDAD55]/40 transition duration-500 hover:-translate-y-2 relative group overflow-hidden"
          >
            {/* Soft Radial Glow behind card on hover */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(237,173,85,0.08)_0%,transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="overflow-hidden rounded-2xl w-full mb-6 shadow-lg">
              <img
                className="w-full h-auto rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                src={blackCoffee}
                alt="Black Coffee"
              />
            </div>
            <h2 className="text-2xl text-[#EDAD55] font-bold font-serif mb-3 tracking-wide">
              Black Coffee
            </h2>
            <p className="text-sm sm:text-base text-white/80 font-medium font-sans leading-relaxed">
              Boosts metabolism, rich antioxidants, improves focus, supports
              heart, liver, health-conscious people’s favorite.
            </p>
          </MotionWrapper>

          {/* Hot Coffee */}
          <MotionWrapper
            variants={zoomIn}
            className="flex flex-col justify-center items-center w-72 sm:w-80 md:w-96 bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:border-[#EDAD55]/40 transition duration-500 hover:-translate-y-2 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(237,173,85,0.08)_0%,transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="overflow-hidden rounded-2xl w-full mb-6 shadow-lg">
              <img
                className="w-full h-auto rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                src={hotCoffee}
                alt="Hot Coffee"
              />
            </div>
            <h2 className="text-2xl text-[#EDAD55] font-bold font-serif mb-3 tracking-wide">
              Hot Coffee
            </h2>
            <p className="text-sm sm:text-base text-white/80 font-medium font-sans leading-relaxed">
              Emotional comfort, cozy warmth, aids digestion, enhances bonding,
              perfect for relaxing social coffee moments.
            </p>
          </MotionWrapper>

          {/* Cold Coffee */}
          <MotionWrapper
            variants={zoomIn}
            className="flex flex-col justify-center items-center w-72 sm:w-80 md:w-96 bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:border-[#EDAD55]/40 transition duration-500 hover:-translate-y-2 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(237,173,85,0.08)_0%,transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="overflow-hidden rounded-2xl w-full mb-6 shadow-lg">
              <img
                className="w-full h-auto rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                src={coldCoffee}
                alt="Cold Coffee"
              />
            </div>
            <h2 className="text-2xl text-[#EDAD55] font-bold font-serif mb-3 tracking-wide">
              Cold Coffee
            </h2>
            <p className="text-sm sm:text-base text-white/80 font-medium font-sans leading-relaxed">
              Smooth, low-acidity, refreshing, energizing, mellow taste, ideal
              for summer days, cool relaxed vibe.
            </p>
          </MotionWrapper>
        </motion.div>
      </div>
    </div>
  );
};

export default Home_Service;
