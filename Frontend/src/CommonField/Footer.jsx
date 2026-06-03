import React from "react";
import { Link } from "react-router-dom";
import Payment_Img from "../assets/website/credit-cards.webp";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Github, 
  Twitter, 
  Send,
  Linkedin,
  HelpCircle,
  ExternalLink
} from "lucide-react";

const Footer = () => {

  const handleGoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#180e0c] w-full py-16 px-6 sm:px-12 relative overflow-hidden border-t border-[#3e251f]/40 z-20">
      
      {/* Decorative Roasted Background Coffee Beans Glow */}
      <div className="absolute -bottom-12 -left-12 w-96 h-96 bg-[#bcee04]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-96 h-96 bg-amber-500/2 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid line matrix details */}
      <div className="absolute inset-0 bg-grid-white/[0.008] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#3e251f]/35">
          
          {/* Brand Hub */}
          <div className="space-y-6">
            <motion.h1 
              whileHover={{ scale: 1.02 }}
              className="text-2xl text-[#bcee04] font-extrabold px-6 py-2.5 bg-[#231411]/90 border border-[#bcee04]/30 rounded-2xl transition duration-500 ease-in-out text-center inline-block shadow-[0_0_20px_rgba(188,238,4,0.08)] cursor-pointer"
            >
              CodeNap{" "}
              <span className="uppercase font-light italic font-serif text-[#F5E6CC]">
                Café
              </span>
            </motion.h1>
            <p className="text-[#DACAB5]/70 text-sm font-sans leading-relaxed">
              Serving premium single-origin compiler fuel and providing a cozy ecosystem designed specifically for coders, designers, and tech creators.
            </p>
            <div className="flex flex-col gap-3 font-mono text-[11px] text-[#DACAB5]/85">
              <span className="flex items-center gap-3 group cursor-default">
                <span className="p-2 rounded-lg bg-[#241511] border border-[#3e251f]/60 text-[#bcee04] group-hover:border-[#bcee04]/30 transition-all duration-300">
                  <Phone size={12} />
                </span>
                +91 9967319725
              </span>
              <span className="flex items-center gap-3 group cursor-default">
                <span className="p-2 rounded-lg bg-[#241511] border border-[#3e251f]/60 text-[#bcee04] group-hover:border-[#bcee04]/30 transition-all duration-300">
                  <Mail size={12} />
                </span>
                vikrampal038@gmail.com
              </span>
              <span className="flex items-center gap-3 group cursor-default">
                <span className="p-2 rounded-lg bg-[#241511] border border-[#3e251f]/60 text-[#bcee04] group-hover:border-[#bcee04]/30 transition-all duration-300">
                  <MapPin size={12} />
                </span>
                Goregaon (E), Mumbai
              </span>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono font-bold text-[#bcee04] uppercase tracking-[0.3em] border-l-2 border-[#bcee04] pl-3">
              SANCTUARY NAV
            </h2>
            <ul className="space-y-3 font-mono text-xs">
              {[
                { path: "/home", label: "Home" },
                { path: "/menu", label: "Menu" },
                { path: "/gallery", label: "Gallery" },
                { path: "/reservation", label: "Reservation" },
                { path: "/contact", label: "Contact Us" }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-[#DACAB5]/70 hover:text-[#bcee04] transition duration-300 flex items-center gap-2.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3e251f] border border-amber-500/10 group-hover:bg-[#bcee04] group-hover:scale-125 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dev Workspace Links */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono font-bold text-[#bcee04] uppercase tracking-[0.3em] border-l-2 border-[#bcee04] pl-3">
              MORE PROJECTS
            </h2>
            <ul className="space-y-3 font-mono text-xs">
              {[
                { url: "https://to-do-list-vikram.netlify.app", label: "ToDo List" },
                { url: "https://dictionary-app-vikram.netlify.app/", label: "Dictionary App" },
                { url: "https://qr-generator-vikram.netlify.app", label: "QR Generator" },
                { url: "https://vikram-weather-app.netlify.app", label: "Weather App" },
                { url: "https://bubble-game-vikram.netlify.app", label: "Bubble Game" },
                { url: "https://simon-game-by-vikram.netlify.app", label: "Simon Game" }
              ].map((proj) => (
                <li key={proj.url}>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DACAB5]/70 hover:text-[#bcee04] transition duration-300 flex items-center gap-2.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3e251f] border border-amber-500/10 group-hover:bg-[#bcee04] group-hover:scale-125 transition-all duration-300"></span>
                    <span className="flex items-center gap-1">
                      {proj.label}
                      <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Follow */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono font-bold text-[#bcee04] uppercase tracking-[0.3em] border-l-2 border-[#bcee04] pl-3">
              FOLLOW HUB
            </h2>
            <ul className="flex gap-3 items-center">
              {[
                { href: "https://www.linkedin.com/in/vikrampal07/", icon: <Linkedin size={18} /> },
                { href: "https://x.com/VikramPal038", icon: <Twitter size={18} /> },
                { href: "https://web.telegram.org/k/", icon: <Send size={18} /> }
              ].map((social, idx) => (
                <li key={idx}>
                  <motion.a
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#241511]/90 border border-[#3e251f]/80 text-[#DACAB5] hover:bg-[#bcee04] hover:text-[#241511] hover:border-[#bcee04]/25 transition duration-500 shadow-md"
                  >
                    {social.icon}
                  </motion.a>
                </li>
              ))}
            </ul>

            <h3 className="text-xs font-mono font-bold text-[#F5E6CC] pt-5 border-t border-[#3e251f]/40 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bcee04] animate-pulse" />
              Secure Payments
            </h3>
            <img 
              src={Payment_Img} 
              alt="accepted checkout payment methods" 
              className="w-48 opacity-75 filter grayscale hover:grayscale-0 hover:opacity-100 rounded-xl border border-[#3e251f]/60 bg-[#241511]/30 p-2 transition-all duration-500 shadow-inner" 
            />
          </div>

        </div>

        {/* Footer Sub-Bar */}
        <div className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#DACAB5]/50 text-xs font-mono tracking-wide text-center md:text-left">
            © 2026{" "}
            <span className="text-[#bcee04] font-black cursor-pointer hover:underline">
              CodeNap Café by Vikram Pal.
            </span>{" "}
            All rights reserved.
          </p>

          {/* Custom Floating Go Top Badge */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleGoTop}
            className="cursor-pointer text-[#241511] bg-[#bcee04] hover:bg-[#a6d103] p-3.5 rounded-xl shadow-[0_0_15px_rgba(188,238,4,0.2)] transition duration-500"
          >
            <ArrowUp size={16} strokeWidth={3} />
          </motion.button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
