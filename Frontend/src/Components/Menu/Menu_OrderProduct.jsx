import { React, useState, useEffect } from "react";
import worldMap from "../../assets/Menu/world-map.png";
import { useFormik } from "formik";
import { menuSchema } from "../Schemas";
import Modal from "../Modal/Modal.jsx";
import OrderProduct from "../../assets/model-img/OrderPLace.png";
import ErrorImg from "../../assets/model-img/ErrorImg.png";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Phone, 
  Coffee, 
  Hash, 
  MapPin, 
  Navigation, 
  Globe, 
  Anchor,
  Compass,
  CheckCircle,
  Truck,
  Maximize2
} from "lucide-react";

const initialValues = {
  Menu_name: "",
  Menu_phone: "",
  Menu_product: "",
  qty: "",
  address: "",
  city: "",
  country: "",
  pinCode: "",
};

const Menu_OrderProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalIcon, setModalIcon] = useState("");
  
  // Simulated dispatch logger state for the map dashboard
  const [logs, setLogs] = useState([
    "SYS_INIT: Direct dispatch lines online.",
    "NETWORK: Awaiting destination input..."
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => {
        const standardLogs = [
          "BREW: Espresso extraction temperature stabilized at 92.5°C.",
          "NETWORK: Ping to edge nodes active (8ms latency).",
          "SYS: Optimal delivery vectors compiled.",
          "CODENAP: Ready to pack and dispatch fresh capsules.",
          "BREW: Grinders set to fine-roasted profile."
        ];
        const randomLog = standardLogs[Math.floor(Math.random() * standardLogs.length)];
        return [...prev.slice(-4), `LOG: ${randomLog}`];
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: menuSchema,
      onSubmit: async (values, action) => {
        try {
          setLogs(prev => [...prev, `DISPATCH: Initiating transfer sequence for ${values.Menu_product.toUpperCase()}...`]);
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/order`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            }
          );

          const data = await response.json();

          if (response.ok) {
            setModalIcon(OrderProduct);
            setModalTitle("Order Placed!");
            setModalMessage(
              "✅ Your order has been received. We're brewing it fresh — get ready to sip happiness! ☕🛍️"
            );
            setIsModalOpen(true);
            setLogs(prev => [...prev, `SUCCESS: Order confirmed. Capsule locked for dispatch.`]);
            action.resetForm();
          } else {
            setModalIcon(ErrorImg);
            setModalMessage(data?.error || "❌ Failed to place order.");
            setIsModalOpen(true);
          }
        } catch (error) {
          console.error("Frontend error:", error);
          setModalIcon(ErrorImg);
          setModalMessage("❌ Server error. Please try again.");
          setIsModalOpen(true);
        }
      },
    });

  return (
    <div className="my-16 px-4 sm:px-6 lg:px-20 relative">
      <div className="max-w-6xl mx-auto bg-[#1b0f0d]/90 border border-[#3e251f]/50 rounded-[3rem] p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
        
        {/* Holographic Spotlights */}
        <div className="absolute top-[-25%] left-[-20%] w-[60%] h-[60%] bg-[#bcee04]/3 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-25%] right-[-20%] w-[60%] h-[60%] bg-amber-500/3 rounded-full blur-[140px] pointer-events-none" />
        
        {/* Section HUD Lines */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#bcee04]/20 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-10 xl:gap-14 relative z-10">
          
          {/* Direct Dispatch Panel */}
          <div className="w-full lg:w-[55%] flex flex-col justify-between">
            <div>
              {/* Dispatch Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bcee04] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#bcee04]"></span>
                </span>
                <span className="text-[10px] font-mono text-[#bcee04] tracking-[0.3em] uppercase">DIRECT_DISPATCH_PORTAL_V4</span>
              </div>

              {/* Title & Slogan */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5E6CC] font-display tracking-tight mb-3">
                Buy Our Products <span className="text-[#bcee04]">From Anywhere</span>
              </h2>
              <p className="text-xs text-[#DACAB5]/60 mb-8 max-w-lg leading-relaxed">
                Connect directly to our roastery network. Fill in the dispatch matrix below, and our baristas will package and compile your order immediately.
              </p>

              {/* Formik Submission Grid */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Name and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#DACAB5]/35">
                      <User size={16} />
                    </div>
                    <input
                      className="w-full text-sm font-mono rounded-2xl py-3.5 pl-11 pr-4 bg-[#231411]/90 border border-[#3e251f]/80 text-[#F5E6CC] placeholder-stone-600 focus:outline-none focus:border-[#bcee04]/50 focus:ring-1 focus:ring-[#bcee04]/20 transition-all duration-300"
                      type="text"
                      autoComplete="off"
                      name="Menu_name"
                      id="Menu_name"
                      placeholder="Enter Name"
                      value={values.Menu_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.Menu_name && touched.Menu_name ? (
                      <p className="form-error px-3 mt-1 text-[9px] font-mono text-red-500 tracking-wider">
                        ⚠️ {errors.Menu_name}
                      </p>
                    ) : null}
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#DACAB5]/35">
                      <Phone size={16} />
                    </div>
                    <input
                      className="w-full text-sm font-mono rounded-2xl py-3.5 pl-11 pr-4 bg-[#231411]/90 border border-[#3e251f]/80 text-[#F5E6CC] placeholder-stone-600 focus:outline-none focus:border-[#bcee04]/50 focus:ring-1 focus:ring-[#bcee04]/20 transition-all duration-300"
                      type="tel"
                      autoComplete="off"
                      name="Menu_phone"
                      id="Menu_phone"
                      maxLength={10}
                      placeholder="Enter Phone Number"
                      value={values.Menu_phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.Menu_phone && touched.Menu_phone ? (
                      <p className="form-error px-3 mt-1 text-[9px] font-mono text-red-500 tracking-wider">
                        ⚠️ {errors.Menu_phone}
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* Row 2: Product Selection & Quantity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#DACAB5]/35">
                      <Coffee size={16} />
                    </div>
                    <select
                      className="w-full text-sm font-mono rounded-2xl py-3.5 pl-11 pr-4 bg-[#231411]/90 border border-[#3e251f]/80 text-[#F5E6CC] focus:outline-none focus:border-[#bcee04]/50 focus:ring-1 focus:ring-[#bcee04]/20 transition-all duration-300 cursor-pointer appearance-none"
                      name="Menu_product"
                      autoComplete="off"
                      id="Menu_product"
                      value={values.Menu_product}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="" className="bg-[#241511]">Choose Product</option>
                      <option value="cappuccino" className="bg-[#241511]">Cappuccino</option>
                      <option value="americano" className="bg-[#241511]">Americano</option>
                      <option value="conpana" className="bg-[#241511]">Conpana</option>
                      <option value="affogato" className="bg-[#241511]">Affogato</option>
                      <option value="luno" className="bg-[#241511]">Lungo</option>
                      <option value="mocha" className="bg-[#241511]">Mocha</option>
                      <option value="ristresto" className="bg-[#241511]">Ristresto</option>
                      <option value="espresso" className="bg-[#241511]">Espresso</option>
                    </select>
                    {errors.Menu_product && touched.Menu_product ? (
                      <p className="form-error px-3 mt-1 text-[9px] font-mono text-red-500 tracking-wider">
                        ⚠️ {errors.Menu_product}
                      </p>
                    ) : null}
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#DACAB5]/35">
                      <Hash size={16} />
                    </div>
                    <input
                      className="w-full text-sm font-mono rounded-2xl py-3.5 pl-11 pr-4 bg-[#231411]/90 border border-[#3e251f]/80 text-[#F5E6CC] placeholder-stone-600 focus:outline-none focus:border-[#bcee04]/50 focus:ring-1 focus:ring-[#bcee04]/20 transition-all duration-300"
                      type="number"
                      autoComplete="off"
                      name="qty"
                      id="qty"
                      maxLength={10}
                      placeholder="Quantity"
                      value={values.qty}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.qty && touched.qty ? (
                      <p className="form-error px-3 mt-1 text-[9px] font-mono text-red-500 tracking-wider">
                        ⚠️ {errors.qty}
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* Row 3: Address & City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#DACAB5]/35">
                      <MapPin size={16} />
                    </div>
                    <input
                      className="w-full text-sm font-mono rounded-2xl py-3.5 pl-11 pr-4 bg-[#231411]/90 border border-[#3e251f]/80 text-[#F5E6CC] placeholder-stone-600 focus:outline-none focus:border-[#bcee04]/50 focus:ring-1 focus:ring-[#bcee04]/20 transition-all duration-300"
                      type="text"
                      autoComplete="off"
                      name="address"
                      id="address"
                      placeholder="Delivery Address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.address && touched.address ? (
                      <p className="form-error px-3 mt-1 text-[9px] font-mono text-red-500 tracking-wider">
                        ⚠️ {errors.address}
                      </p>
                    ) : null}
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#DACAB5]/35">
                      <Navigation size={16} />
                    </div>
                    <select
                      className="w-full text-sm font-mono rounded-2xl py-3.5 pl-11 pr-4 bg-[#231411]/90 border border-[#3e251f]/80 text-[#F5E6CC] focus:outline-none focus:border-[#bcee04]/50 focus:ring-1 focus:ring-[#bcee04]/20 transition-all duration-300 cursor-pointer appearance-none"
                      name="city"
                      autoComplete="off"
                      id="city"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="" className="bg-[#241511]">Choose City</option>
                      <option value="mumbai" className="bg-[#241511]">Mumbai</option>
                      <option value="delhi" className="bg-[#241511]">Delhi</option>
                      <option value="bangalore" className="bg-[#241511]">Bangalore</option>
                      <option value="hyderabad" className="bg-[#241511]">Hyderabad</option>
                      <option value="ahmedabad" className="bg-[#241511]">Ahmedabad</option>
                    </select>
                    {errors.city && touched.city ? (
                      <p className="form-error px-3 mt-1 text-[9px] font-mono text-red-500 tracking-wider">
                        ⚠️ {errors.city}
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* Row 4: Country & PinCode */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#DACAB5]/35">
                      <Globe size={16} />
                    </div>
                    <select
                      className="w-full text-sm font-mono rounded-2xl py-3.5 pl-11 pr-4 bg-[#231411]/90 border border-[#3e251f]/80 text-[#F5E6CC] focus:outline-none focus:border-[#bcee04]/50 focus:ring-1 focus:ring-[#bcee04]/20 transition-all duration-300 cursor-pointer appearance-none"
                      name="country"
                      autoComplete="off"
                      id="country"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="" className="bg-[#241511]">Choose Country</option>
                      <option value="india" className="bg-[#241511]">India</option>
                    </select>
                    {errors.country && touched.country ? (
                      <p className="form-error px-3 mt-1 text-[9px] font-mono text-red-500 tracking-wider">
                        ⚠️ {errors.country}
                      </p>
                    ) : null}
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#DACAB5]/35">
                      <Anchor size={16} />
                    </div>
                    <input
                      className="w-full text-sm font-mono rounded-2xl py-3.5 pl-11 pr-4 bg-[#231411]/90 border border-[#3e251f]/80 text-[#F5E6CC] placeholder-stone-600 focus:outline-none focus:border-[#bcee04]/50 focus:ring-1 focus:ring-[#bcee04]/20 transition-all duration-300"
                      type="number"
                      autoComplete="off"
                      name="pinCode"
                      id="pinCode"
                      maxLength={6}
                      placeholder="PinCode"
                      value={values.pinCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.pinCode && touched.pinCode ? (
                      <p className="form-error px-3 mt-1 text-[9px] font-mono text-red-500 tracking-wider">
                        ⚠️ {errors.pinCode}
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* Cybernetic Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.01, boxShadow: "0px 0px 20px rgba(188, 238, 4, 0.25)" }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full mt-4 px-6 py-4 rounded-2xl font-mono text-xs font-bold tracking-[0.2em] text-[#241511] bg-[#bcee04] hover:bg-[#a6d103] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Truck size={14} />
                  ORDER NOW
                </motion.button>
              </form>
            </div>
          </div>

          {/* Interactive Network Map and Live Status Dashboard */}
          <div className="w-full lg:w-[45%] flex flex-col justify-between bg-[#1f120f]/80 border border-[#3e251f]/70 rounded-[2rem] p-6 relative overflow-hidden shadow-inner">
            
            {/* HUD Scanline */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#bcee04]/5 via-transparent to-transparent pointer-events-none opacity-20" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(188,238,4,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

            {/* Simulated Live Console Logs */}
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-[#3e251f]/50 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#F5E6CC] tracking-wider">LIVE_DISPATCH_LOGS</span>
                </div>
                <div className="text-[9px] font-mono text-[#bcee04] bg-[#bcee04]/5 px-2 py-0.5 rounded border border-[#bcee04]/10">
                  SECURE NODE
                </div>
              </div>

              {/* Dynamic console lines */}
              <div className="bg-[#140b09]/95 rounded-xl border border-[#3e251f]/60 p-4 font-mono text-[9.5px] text-[#DACAB5]/70 space-y-2 h-[120px] overflow-hidden flex flex-col justify-end shadow-inner">
                {logs.map((log, index) => (
                  <div key={index} className="truncate flex items-start gap-1.5 leading-relaxed">
                    <span className="text-[#bcee04] font-bold shrink-0">&gt;</span>
                    <span className={index === logs.length - 1 ? "text-white font-semibold" : "opacity-60"}>{log}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Animated World Map Overlay */}
            <div className="relative mt-6 aspect-video bg-[#120a08]/50 border border-[#3e251f]/50 rounded-xl overflow-hidden flex items-center justify-center p-2 group">
              <img
                className="w-full h-auto object-cover opacity-25 filter brightness-110 drop-shadow-[0_0_10px_rgba(0,0,0,0.6)] group-hover:opacity-40 transition-opacity duration-500"
                src={worldMap}
                alt="distribution map visualization"
              />
              
              {/* Glowing active node radar sweeps */}
              <div className="absolute top-1/4 left-1/3 pointer-events-none">
                <div className="absolute w-8 h-8 rounded-full border border-[#bcee04]/30 animate-[ping_2s_infinite]" />
                <div className="w-2 h-2 rounded-full bg-[#bcee04] shadow-[0_0_8px_rgba(188,238,4,0.8)]" />
              </div>
              <div className="absolute bottom-1/3 right-1/4 pointer-events-none">
                <div className="absolute w-8 h-8 rounded-full border border-[#bcee04]/30 animate-[ping_2.5s_infinite]" />
                <div className="w-2 h-2 rounded-full bg-[#bcee04] shadow-[0_0_8px_rgba(188,238,4,0.8)]" />
              </div>

              {/* Grid matrix indicators */}
              <div className="absolute bottom-2 left-3 font-mono text-[7px] text-[#DACAB5]/35 flex items-center gap-1">
                <Compass size={8} />
                <span>GRID: 19.0759° N, 72.8777° E</span>
              </div>
              <div className="absolute top-2 right-3 font-mono text-[7px] text-[#bcee04]/40">
                ZOOM: 1.0X
              </div>
            </div>

            {/* Bottom Status Ticker */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-[#3e251f]/50 font-mono text-[8px] text-[#DACAB5]/40">
              <div className="flex items-center gap-1">
                <CheckCircle size={10} className="text-[#bcee04]" />
                <span>ALL SYSTEMS STABLE</span>
              </div>
              <span>CODENAP_CORP // EST_2026</span>
            </div>

          </div>

        </div>

      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        icon={modalIcon}
        title={modalTitle}
        message={modalMessage}
      />
    </div>
  );
};

export default Menu_OrderProduct;
