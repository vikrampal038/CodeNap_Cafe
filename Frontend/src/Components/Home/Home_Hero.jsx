import React from "react";
import CoffeeMug from "../../assets/Home/Coffee-Mug.png";
// import { motion } from "motion/react"

const Home_Hero = () => {
  return (
    <main className="bg-cover bg-no-repeat bg-center  pb-10 ">
      <section className="pt-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 place-items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          {/* Left Section */}
          <div className="text-[#F9E4C8] space-y-2 mt-15 sm:space-y-6 md:space-y-10 text-center md:text-left max-w-xs sm:max-w-sm md:max-w-full">
            <h1 

            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-serif tracking-tight">
              <span className="text-[#AF641A]">Coffee</span>
              <br />
              <span className="px-2">Tumbler</span>
            </h1>

            <div className="relative sm:top-10 md:top-3">
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl text-[#efc258] mb-1 uppercase font-bold">
                  Coffee <span className="text-[#e4594d]">Lovers</span>
                </h2>
                <div className="w-20 sm:w-24 h-1 bg-[#efc258] rounded-xl mb-5 mx-auto md:mx-0"></div>
                <p className="text-sm sm:text-base md:text-md opacity-70 leading-relaxed text-[#f8cc63] font-semibold">
                  <span className="text-base sm:text-lg font-semibold font-mono text-[#e4594d]">
                    “Jahaan Coding aur Coffee Ek Saath Chalti Hai!”
                  </span>
                  <br />
                  Thandi coding nights ya garam din ka stress, CodeNap Cafe har
                  coder ka ultimate adda hai. Freshly brewed coffee, cozy vibes,
                  aur ek inspiring space jahan har sip ke saath mile motivation
                  aur har break ke baad mile nayi energy. Come sip, code,
                  repeat!
                </p>
                {/* <div className="absolute top-8 sm:top-12 sm:-left-4 md:-left-8 w-48 sm:w-60 h-40 bg-[#ffffff2b] opacity-50 z-0 rounded-sm"></div> */}
              </div>
            </div>
          </div>

          {/* Center Image Section */}
          <div className="relative mt-10 sm:mt-16 md:mt-20">
            <img
              className="relative z-20 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-xl"
              src={CoffeeMug}
              alt="Coffee Mug"
            />
            <div className="absolute top-15 sm:top-15 md:top-15 -right-2 sm:-right-2 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 border-8 sm:border-[12px] md:border-[20px] border-[#efc258] rounded-full z-10"></div>
          </div>

          {/* Right Section */}
          <div className="text-[#F9E4C8] space-y-2 sm:space-y-4 md:space-y-6 text-center md:text-left max-w-xs sm:max-w-sm md:max-w-full">
            <div className="relative sm:top-5 md:top-10">
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl text-[#efc258] mb-1 uppercase font-bold">
                  Coffee <span className="text-[#e4594d]">Lovers</span>
                </h2>
                <div className="w-20 sm:w-24 h-1 bg-[#efc258] rounded-xl mb-5 mx-auto md:mx-0"></div>
                <p className="text-sm sm:text-base md:text-md opacity-70 leading-relaxed text-[#F4E6CD] font-semibold">
                  <span className="text-base sm:text-lg font-semibold font-mono text-[#e4594d]">
                    “Fuel Your Code, One Cup at a Time!”
                  </span>
                  <br />
                  Yeh sirf ek cafe nahi, ek experience hai. Perfect blends,
                  soothing ambience, aur ek aisi jagah jahan coders aur
                  creatives milte hain, ideas exchange karte hain, aur har
                  coffee cup ke saath inspire hote hain. Join us — kyunki best
                  code kabhi khali pet nahi likha jaata!
                </p>
                {/* <div className="absolute top-10 sm:top-12 sm:-right-4 md:-right-6 w-48 sm:w-60 h-40 bg-[#ffffff2b] opacity-50 z-0 rounded-sm"></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home_Hero;
