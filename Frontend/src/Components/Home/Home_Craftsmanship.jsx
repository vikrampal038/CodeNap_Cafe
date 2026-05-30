import React from "react";
import MotionWrapper from "../Motion/MotionWrapper";
import { fadeUp, zoomIn } from "../../utils/motionVariants";

const Home_Craftsmanship = () => {
  const steps = [
    {
      num: "01",
      title: "Ethical Bean Sourcing",
      desc: "We source premium Arabica beans directly from sustainable high-altitude farms across the globe, ensuring fair trade practices and unmatched quality in every harvest.",
      icon: (
        <svg className="w-12 h-12 text-[#EDAD55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 6.364A9 9 0 115.636 5.636a9 9 0 0112.728 12.728z" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Artisanal Slow Roasting",
      desc: "Our master roasters roast in small micro-batches with precise heat curves. This brings out highly-saturated caramel undertones and rich, aromatic profiles unique to each bean origin.",
      icon: (
        <svg className="w-12 h-12 text-[#EDAD55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9.879z" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Precision Temperature Brewing",
      desc: "Brewed dynamically at exactly 94°C under 9 bars of absolute pressure, pulling a thick hazelnut-colored crema. Perfect extraction optimized for maximum caffeine and flavor delivery.",
      icon: (
        <svg className="w-12 h-12 text-[#EDAD55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 xl:px-32 relative overflow-hidden bg-[#1A0C0A] border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EDAD55]/5 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <MotionWrapper variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-serif tracking-wide mb-4">
            Our Coffee <span className="text-[#EDAD55]">Craftsmanship</span>
          </h2>
          <div className="h-1.5 w-32 bg-[#E4594D] rounded-full mx-auto mb-6"></div>
          <p className="text-md sm:text-lg text-[#FAEDCD] max-w-2xl mx-auto font-medium opacity-90 leading-relaxed">
            From direct-origin farm sourcing to high-pressure precision brewing, discover the journey behind our perfect artisanal roasts.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-12">
          {steps.map((step, idx) => (
            <MotionWrapper
              key={idx}
              variants={zoomIn}
              className="flex flex-col bg-white/5 backdrop-blur-md p-8 sm:p-10 rounded-[2rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] relative group hover:border-[#EDAD55]/40 transition duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-6 right-8 text-6xl font-black text-white/5 group-hover:text-[#EDAD55]/10 transition duration-500 font-mono">
                {step.num}
              </div>
              <div className="mb-6 bg-[#FAEDCD]/10 w-20 h-20 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-[#EDAD55]/20 group-hover:bg-[#EDAD55]/10 transition duration-500 shadow-inner">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#EDAD55] mb-4 font-serif tracking-wide">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-white/75 font-sans leading-relaxed font-medium">
                {step.desc}
              </p>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home_Craftsmanship;
