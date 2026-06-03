import React from "react";
import blackCoffee from "../../assets/Home/Black_Coffee.png";
import coldCoffee from "../../assets/Home/Cold_Coffee.png";
import hotCoffee from "../../assets/Home/Hot_Coffee.png";
import espresso from "../../assets/Menu/espresso.jpg";
import cappuccino from "../../assets/Menu/cappuccino.jpg";
import mocha from "../../assets/Menu/mocha.jpg";
import affogato from "../../assets/Menu/affogato.jpg";

import { motion } from "framer-motion";
import MotionWrapper from "../Motion/MotionWrapper";
import { fadeUp, zoomIn } from "../../utils/motionVariants";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Home_Service = () => {
  const products = [
    {
      name: "Black Coffee",
      img: blackCoffee,
      desc: "Boosts metabolism, rich antioxidants, improves focus, supports heart, liver, health-conscious people’s favorite.",
    },
    {
      name: "Hot Coffee",
      img: hotCoffee,
      desc: "Emotional comfort, cozy warmth, aids digestion, enhances bonding, perfect for relaxing social coffee moments.",
    },
    {
      name: "Cold Coffee",
      img: coldCoffee,
      desc: "Smooth, low-acidity, refreshing, energizing, mellow taste, ideal for summer days, cool relaxed vibe.",
    },
    {
      name: "Espresso",
      img: espresso,
      desc: "Bold, intense, highly-saturated espresso shot. Pure extraction pulling rich aromatic notes and crema.",
    },
    {
      name: "Cappuccino",
      img: cappuccino,
      desc: "Perfect equilibrium of textured micro-foam, velvety steamed milk, and rich artisanal espresso.",
    },
    {
      name: "Mocha",
      img: mocha,
      desc: "Indulgent signature blend of premium dark cocoa chocolate, freshly pulled espresso, and whipped foam.",
    },
    {
      name: "Affogato",
      img: affogato,
      desc: "Dramatically poured hot espresso over a scoop of organic vanilla bean ice cream. Bitter-sweet perfection.",
    },
  ];

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

        {/* Swiper Slider Section */}
        <div className="mt-10 px-4 md:px-10">
          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 100,
              modifier: 1.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="pb-16"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
          >
            {products.map((item, idx) => (
              <SwiperSlide key={idx} className="max-w-[380px] p-2">
                <MotionWrapper
                  variants={zoomIn}
                  className="flex flex-col justify-center items-center bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:border-[#EDAD55]/40 transition duration-500 hover:-translate-y-2 relative group overflow-hidden h-[480px]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(237,173,85,0.08)_0%,transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="overflow-hidden rounded-2xl w-full h-[220px] mb-6 shadow-lg flex justify-center items-center bg-black/10">
                    <img
                      className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  <h2 className="text-2xl text-[#EDAD55] font-bold font-serif mb-3 tracking-wide">
                    {item.name}
                  </h2>
                  <p className="text-sm sm:text-base text-white/80 font-medium font-sans leading-relaxed text-center">
                    {item.desc}
                  </p>
                </MotionWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home_Service;
