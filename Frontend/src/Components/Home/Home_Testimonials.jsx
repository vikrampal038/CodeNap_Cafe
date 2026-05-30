import React from "react";
import MotionWrapper from "../Motion/MotionWrapper";
import { fadeUp, zoomIn } from "../../utils/motionVariants";

const Home_Testimonials = () => {
  const reviews = [
    {
      name: "Siddharth Sharma",
      role: "Full-Stack Developer",
      quote: "CodeNap is my absolute sanctuary. The Espresso fuels my deep-work coding blocks, and the warm latte aesthetics make long debugging nights feel extremely inspiring and relaxing.",
      rating: 5,
    },
    {
      name: "Ananya Iyer",
      role: "UI/UX Designer",
      quote: "The cozy visual harmony of this cafe is remarkable! Every single design detail is curated beautifully. Combine that with their perfectly slow-brewed Americano, and you get pure creative focus.",
      rating: 5,
    },
    {
      name: "Rohan Verma",
      role: "Data Engineer",
      quote: "Phenomenal coffee craftsmanship! Their cold brew has a silky low-acid profile that keeps me energized without spikes. A perfect environment to plug in, write code, and repeat.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 xl:px-32 relative overflow-hidden bg-[#180A08] border-y border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto">
        <MotionWrapper variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-serif tracking-wide mb-4">
            Patron <span className="text-[#EDAD55]">Testimonials</span>
          </h2>
          <div className="h-1.5 w-32 bg-[#E4594D] rounded-full mx-auto mb-6"></div>
          <p className="text-md sm:text-lg text-[#FAEDCD] max-w-2xl mx-auto font-medium opacity-90 leading-relaxed">
            See what our coding and design community has to say about their daily caffeine productivity rituals at CodeNap Café.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12">
          {reviews.map((review, idx) => (
            <MotionWrapper
              key={idx}
              variants={zoomIn}
              className="flex flex-col justify-between bg-white/5 backdrop-blur-md p-8 sm:p-10 rounded-[2.2rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:border-[#EDAD55]/40 transition duration-500 hover:-translate-y-2 relative overflow-hidden group"
            >
              {/* Giant decorative Quote SVG behind card */}
              <div className="absolute -bottom-10 -right-6 text-9xl font-black text-white/5 group-hover:text-[#EDAD55]/5 transition duration-500 pointer-events-none select-none">
                ”
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex gap-1.5 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-[#EDAD55]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-[#FAEDCD] text-base font-mono italic leading-relaxed mb-8 relative z-10">
                  “{review.quote}”
                </p>
              </div>

              <div className="border-t border-white/10 pt-6 mt-4 flex items-center gap-4 relative z-10">
                {/* Initials Avatar */}
                <div className="w-12 h-12 rounded-full bg-[#EDAD55]/10 border border-[#EDAD55]/30 flex items-center justify-center font-bold text-[#EDAD55] font-mono text-lg shadow-inner">
                  {review.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white font-serif tracking-wide">{review.name}</h4>
                  <p className="text-xs text-[#FAEDCD]/70 font-semibold uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home_Testimonials;
