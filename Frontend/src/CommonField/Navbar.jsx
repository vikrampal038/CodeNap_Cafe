import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo_light from "../assets/Navbar/logo_Light_Mode.png";
import AnimatedButton from "../Components/Motion/AnimatedButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/menu", label: "Menu" },
    { path: "/gallery", label: "Gallery" },
    { path: "/reservation", label: "Reservation" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#4E3629]/90 backdrop-blur-md border-b border-white/10 flex justify-between items-center py-4 pl-8 md:pl-32 pr-6 shadow-[0_4px_30px_rgba(0,0,0,0.15)]">
        <Link to={"/home"}>
          <img
            src={logo_light}
            alt="navbar Logo"
            className="w-30 hover:scale-110 hover:rotate-2 transition duration-700 ease-in-out filter drop-shadow-[0_0_8px_rgba(250,237,205,0.2)]"
          />
        </Link>

        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base list-none text-white">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={`text-xl font-bold px-3 py-2 transition duration-500 rounded-lg flex items-center gap-2 ${
                    isActive
                      ? "text-[#EDAD55] bg-white/5"
                      : "text-white hover:text-[#EDAD55] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-[#EDAD55] rounded-full"></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="flex items-center justify-center gap-5 ml-10 sm:ml-5 list-none">
          {/* HIRE ME Button */}
          <AnimatedButton>
            <li className="list-none">
              <a
                href="/VikramResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-2 bg-[#E4594D] text-white hover:bg-[#FAEDCD] hover:text-[#4E3629] text-base sm:text-md md:text-lg lg:text-xl font-bold transition duration-500 rounded-xl shadow-[0_0_15px_rgba(228,89,77,0.4)] hover:shadow-[0_0_20px_rgba(237,173,85,0.6)]"
              >
                HIRE ME
              </a>
            </li>
          </AnimatedButton>

          {/* Hamburger Icon (Mobile) */}
          <div className="relative w-10 h-10 ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              className="w-full h-full relative"
            >
              {/* Menu Icon */}
              <Menu
                className={`w-10 h-10 text-white absolute top-0 left-0 transform transition-all duration-500 ease-in-out ${
                  isMenuOpen
                    ? "opacity-0 rotate-180 scale-75"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              {/* X Icon */}
              <X
                className={`w-10 h-10 text-white absolute top-0 left-0 transform transition-all duration-500 ease-in-out ${
                  isMenuOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 rotate-180 scale-75"
                }`}
              />
            </button>
          </div>
        </ul>

        {/* this is social Icon section */}
        <div
          className={`hidden xl:flex absolute top-[80px] right-0 bg-transparent flex-col items-center font-bold text-xl transform duration-700 ease-in-out transition-transform z-40 ${
            isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.2s ease" }}
        >
          {/* icons div */}
          <div className="flex flex-col justify-between items-center gap-5 ">
            {/* blank div 1 */}
            <div className="w-2 h-50 mt-5 bg-[#B1661F] rounded-2xl"></div>

            {/* social media icons section */}
            <ul className="gap-5 pb-3 pr-3 flex flex-col">
              <li className="text-2xl font-bold">
                <a
                  href="https://www.linkedin.com/in/vikrampal07/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin hover:scale-110 rounded-full p-2.5 bg-[#e5584d] hover:bg-[#e6d3c2] hover:text-black transition duration-1000 ease-in-out shadow-[0_4px_10px_rgba(0,0,0,0.2)]"></i>
                </a>
              </li>
              <li className="text-2xl font-bold">
                <a
                  href="https://x.com/VikramPal038"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-x-twitter hover:scale-110 rounded-full  p-2 bg-[#e5584d] hover:bg-[#e6d3c2] hover:text-black  transition duration-1000 ease-in-out shadow-[0_4px_10px_rgba(0,0,0,0.2)]"></i>
                </a>
              </li>
              <li className="text-[27px] font-bold">
                <a
                  href="https://web.telegram.org/k/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-telegram hover:scale-110 rounded-full  p-2 bg-[#e5584d] hover:bg-[#e6d3c2] hover:text-black  transition duration-1000 ease-in-out shadow-[0_4px_10px_rgba(0,0,0,0.2)]"></i>
                </a>
              </li>
            </ul>
            {/* blank div 2 */}
            <div className="w-2 h-50 mb-5 bg-[#B1661F] rounded-2xl"></div>
          </div>
        </div>

        {/* this is for mobile navbar section */}
        <div
          className={`absolute xl:hidden top-[80px] right-4 sm:right-4 w-[60%] lg:w-[30%] md:w-[30%] bg-[#4E3629]/95 backdrop-blur-lg border border-white/10 rounded-2xl flex flex-col items-center font-bold text-xl transform duration-700 ease-in-out transition-transform z-40 p-2 shadow-2xl ${
            isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.2s ease" }}
        >
          {navLinks.map((link) => (
            <li
              key={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="inline-block p-3 w-full text-[#E6D3C2] text-center hover:bg-[#EDAD55] hover:text-black rounded-xl transition duration-300"
            >
              <Link to={link.path}>● {link.label}</Link>
            </li>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
