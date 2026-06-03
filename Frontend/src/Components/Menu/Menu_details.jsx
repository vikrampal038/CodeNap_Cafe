import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Affogato from "../../assets/Menu/affogato.jpg";
import Americano from "../../assets/Menu/americano.jpg";
import Cappuccino from "../../assets/Menu/cappuccino.jpg";
import Conpana from "../../assets/Menu/conpana.jpg";
import Espresso from "../../assets/Menu/espresso.jpg";
import Lungo from "../../assets/Menu/lungo.jpg";
import Mocha from "../../assets/Menu/mocha.jpg";
import Ristresto from "../../assets/Menu/ristresto.jpg";

const Menu_details = () => {
  const [activeTab, setActiveTab] = useState("black");

  const tabs = [
    { id: "black", label: "Black" },
    { id: "organic", label: "Organic" },
    { id: "gold", label: "Gold" },
    { id: "cream", label: "Cream" },
    { id: "sweet", label: "Sweet" },
  ];

  const categoryTags = {
    black: "💻 Compiler Fuel",
    organic: "🍃 Clean Source",
    gold: "🥇 Master Blend",
    cream: "🥛 Silk Microfoam",
    sweet: "🍬 Focus Booster",
  };

  const menuItems = [
    {
      id: 1,
      name: "Cappuccino",
      price: "$99.00",
      image: Cappuccino,
      categories: ["black", "gold"],
    },
    {
      id: 2,
      name: "Americano",
      price: "$149.00",
      image: Americano,
      categories: ["black", "gold"],
    },
    {
      id: 3,
      name: "Conpana",
      price: "$299.00",
      image: Conpana,
      categories: ["organic"],
    },
    {
      id: 4,
      name: "Affogato",
      price: "$349.00",
      image: Affogato,
      categories: ["organic", "sweet"],
    },
    {
      id: 5,
      name: "Espresso",
      price: "$399.00",
      image: Espresso,
      categories: ["gold", "black"],
    },
    {
      id: 6,
      name: "Ristresto",
      price: "$449.00",
      image: Ristresto,
      categories: ["cream"],
    },
    {
      id: 7,
      name: "Mocha",
      price: "$249.00",
      image: Mocha,
      categories: ["cream", "sweet"],
    },
    {
      id: 8,
      name: "Lungo",
      price: "$199.00",
      image: Lungo,
      categories: ["sweet", "black"],
    },
  ];

  // Filter items matching the active tab, max 4
  const filteredItems = menuItems
    .filter((item) => item.categories.includes(activeTab))
    .slice(0, 4);

  return (
    <div className="container mx-auto flex flex-col items-center py-16 px-4 md:px-10">
      {/* Category selector panel */}
      <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[90%] bg-[#201310]/60 border border-[#3e251f]/40 p-1.5 rounded-[2rem] shadow-2xl backdrop-blur-md">
        {/* Navigation Tabs bar */}
        <div className="flex flex-wrap justify-center items-center gap-2 p-2 rounded-3xl bg-[#2e1d18]/40 border border-[#3e251f]/20">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-[#bcee04] font-bold shadow-[0_0_15px_rgba(188,238,4,0.15)]"
                    : "text-[#DACAB5]/60 hover:text-[#DACAB5] hover:bg-[#3e251f]/30"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeMenuTab"
                    className="absolute inset-0 bg-[#3e251f] border border-[#bcee04]/30 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Menu Items Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 p-4">
          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="group relative flex flex-col sm:flex-row gap-6 items-center bg-[#2b1915]/60 border border-[#3e251f]/60 hover:border-[#bcee04]/30 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
                >
                  {/* Decorative tag for category */}
                  <span className="absolute top-4 right-4 text-[9px] font-mono bg-[#3e251f]/80 text-[#bcee04] px-2.5 py-1 rounded-full border border-[#bcee04]/10 uppercase tracking-widest">
                    {categoryTags[activeTab]}
                  </span>

                  {/* Coffee Image Containment */}
                  <div className="overflow-hidden rounded-xl w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] shrink-0 border border-[#3e251f]/30 bg-[#1b0f0c] flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={`${item.name} Blend`}
                      className="rounded-xl object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Coffee Info & Pricing */}
                  <div className="flex-1 flex flex-col justify-center text-center sm:text-left mt-4 sm:mt-0">
                    <h2 className="text-2xl sm:text-3xl text-[#F5E6CC] tracking-wide font-extrabold mb-2 font-display">
                      {item.name}
                    </h2>
                    <p className="text-xs text-[#DACAB5]/70 mb-4 leading-relaxed font-sans max-w-[280px] mx-auto sm:mx-0">
                      Carefully engineered brew using single-origin beans, optimized for maximum code output and sustained mental energy.
                    </p>
                    <div className="flex items-center justify-center sm:justify-between border-t border-[#3e251f]/40 pt-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#DACAB5]/40">
                        Price
                      </span>
                      <span className="text-lg sm:text-xl font-bold font-mono text-[#bcee04] bg-[#bcee04]/5 px-3 py-1 rounded-lg border border-[#bcee04]/10 shadow-inner ml-2 sm:ml-0">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-1 lg:col-span-2 text-center py-10">
                <p className="text-[#DACAB5]/40 font-mono text-sm uppercase tracking-widest">
                  No items configured for this workspace tab.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Menu_details;
