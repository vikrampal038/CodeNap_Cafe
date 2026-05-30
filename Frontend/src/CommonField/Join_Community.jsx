import React, { useState } from "react";
import { useFormik } from "formik";
import { subscribeSchema } from "../Components/Schemas";
import Modal from "../Components/Modal/Modal";
import Subscribed from "../assets/model-img/Subscribed.png";
import ErrorImg from "../assets/model-img/ErrorImg.png";
import AnimatedButton from "../Components/Motion/AnimatedButton";

const initialValues = {
  Subscribe_email: "",
};

const Join_Community = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalIcon, setModalIcon] = useState("");

  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues,
      validationSchema: subscribeSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/subscribe`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: values.Subscribe_email }),
          });

          const data = await response.json();

          if (response.ok) {
            setModalIcon(Subscribed);
            setModalTitle("Subscribed!");
            setModalMessage(
              "✅ Thanks for subscribing to our updates. Fresh brews and news are coming your way! ☕📩"
            );
            setIsModalOpen(true);
            action.resetForm();
          } else {
            setModalIcon(ErrorImg);
            setModalTitle("Subscription Failed");
            setModalMessage(data?.error || "❌ Subscription failed.");
            setIsModalOpen(true);
          }
        } catch (error) {
          console.error("❌ Frontend error:", error);
          setModalIcon(ErrorImg);
          setModalTitle("Server Error");
          setModalMessage("❌ Server error. Please try again.");
          setIsModalOpen(true);
        }
      },
    });

  return (
    <div className="w-full py-16 px-4 md:px-10 bg-[#1E120E]">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-[#FAEDCD]/10 relative bg-gradient-to-br from-[#1E120E] via-[#2A1B15] to-[#1E120E] p-8 md:p-16">
        
        {/* Subtle decorative coffee details background */}
        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-12 translate-y-12">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="#FAEDCD" strokeWidth="1">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
            <path d="M6 1v3M10 1v3M14 1v3"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-[#F5E7CD] leading-tight tracking-wide text-center md:text-left">
            Join <em className="italic text-[#E5584D] font-serif font-light">The</em> <span className="text-[#ECAD54] block md:inline font-black" style={{ fontFamily: "Anton, sans-serif" }}>Coffee Community</span>
          </h1>

          <h4 className="text-md sm:text-lg md:text-2xl font-medium text-[#DACAB5] mt-6 mb-8 text-center md:text-left leading-relaxed">
            Become a part of our coffee lovers’ community! Subscribe to our newsletter now.
          </h4>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col sm:flex-row gap-4 items-stretch justify-start">
              <div className="w-full sm:w-2/3 lg:max-w-[500px]">
                <input
                  className="w-full rounded-2xl border border-[#EADCC9]/20 font-semibold text-white bg-white/5 backdrop-blur-md text-base md:text-lg py-4 px-6 focus:outline-none focus:border-[#ECAD54] focus:ring-2 focus:ring-[#ECAD54]/20 transition-all duration-300 placeholder-[#8C7565]"
                  type="email"
                  autoComplete="off"
                  name="Subscribe_email"
                  id="Subscribe_email"
                  placeholder="Enter Email"
                  value={values.Subscribe_email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.Subscribe_email && touched.Subscribe_email ? (
                  <p className="form-error px-2 text-sm font-bold text-red-500 mt-2">
                    {errors.Subscribe_email}
                  </p>
                ) : null}
              </div>

              <AnimatedButton onClick={()=>{}} disabled className="w-full sm:w-auto">
                <button
                  type="submit"
                  className="w-full sm:w-auto text-base md:text-lg px-8 py-4 rounded-2xl font-bold text-[#1E120E] bg-[#ECAD54] hover:bg-[#F5E7CD] hover:text-[#1E120E] shadow-lg shadow-[#ECAD54]/15 hover:shadow-[#F5E7CD]/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  Subscribe
                </button>
              </AnimatedButton>
            </div>

            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              icon={modalIcon}
              title={modalTitle}
              message={modalMessage}
            />
          </form>
        </div>

        <div className="border-t border-[#FAEDCD]/10 mt-12 pt-8 text-[#DACAB5]/60 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm gap-4">
          <p className="font-semibold text-center md:text-left">
            All rights reserved to CodeNap Café 2025.
          </p>
          <div className="flex gap-6 uppercase font-bold tracking-wider">
            <span className="hover:text-[#ECAD54] transition-colors duration-300 cursor-pointer">Terms of use</span>
            <span className="hover:text-[#ECAD54] transition-colors duration-300 cursor-pointer">Cookie policy</span>
            <span className="hover:text-[#ECAD54] transition-colors duration-300 cursor-pointer">Privacy policy</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Join_Community;
