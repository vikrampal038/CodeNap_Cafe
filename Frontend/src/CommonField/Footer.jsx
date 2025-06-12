import React from "react";
import { Link } from "react-router-dom";
import Payment_Img from "../assets/website/credit-cards.webp";

const Footer = () => {
  // console.log("API URL:", import.meta.env.VITE_API_URL);

  const handleGoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#442725] w-full p-5 z-0 relative">
      <div className="max-w-[90%] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15 border-b-4 rounded-xl border-white py-5">
          {/* Company Introduction */}
          <div>
            <h1 className="text-2xl text-white font-extrabold px-5 w-[215px] rounded-xl hover:bg-[#E6D3C2] transition duration-700 ease-in-out hover:text-black py-2 bg-[#E4594D] text-center ">
              CodeNap{" "}
              <span className=" uppercase hover:bg-[#E6D3C2] hover:text-black transition duration-700 ease-in-out">
                Café
              </span>
            </h1>
            <p className="text-white text-sm font-medium pb-5 pt-5">
              Welcome to CodeNap Café, where we serve the best coffee and
              provide a cozy environment for all your needs.
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-white text-md font-bold flex items-center gap-2">
                <i className="fa-solid fa-phone"></i> +91 9967319725
              </span>
              <span className="text-white text-md font-bold flex items-center gap-2">
                <i className="fa-solid fa-envelope-open-text"></i>{" "}
                vikrampal038@gmail.com
              </span>
              <span className="text-white text-md font-bold flex items-center gap-2">
                <i className="fa-solid fa-map-location-dot"></i> Goregaon (E)
                Mumbai, Maharashtra
              </span>
            </div>
          </div>

          {/* Company Navbar */}
          <div>
            <h1 className="text-xl text-[#F8D091] font-extrabold pb-5 uppercase">
              Company
            </h1>
            {/* navbar Link */}
            <ul className="text-middle">
              <li className="text-white text-md font-bold pb-2">
                <Link to={"/home"}>● Home</Link>
              </li>

              <li className="text-white text-md font-bold pb-2">
                <Link to={"/menu"}>● Menu</Link>
              </li>

              <li className="text-white text-md font-bold pb-2">
                <Link to={"/gallery"}>● Gallery</Link>
              </li>

              <li className="text-white text-md font-bold pb-2">
                <Link to={"/reservation"}>● Reservation </Link>
              </li>
              <li className="text-white text-md font-bold pb-2">
                <Link to={"/contact"}>● Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* More Projects */}
          <div>
            <h1 className="text-xl text-[#F8D091] font-extrabold pb-5 uppercase">
              More Projects
            </h1>
            <div className="flex flex-wrap gap-5">
              <ul>
                <li className="text-white text-md font-bold pb-2">
                  <a
                    href="https://to-do-list-vikram.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ● ToDO List
                  </a>
                </li>

                <li className="text-white text-md font-bold pb-2">
                  <a
                    href="https://calculator-vikram.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ● Calculator
                  </a>
                </li>

                <li className="text-white text-md font-bold pb-2">
                  <a
                    href="https://qr-generator-vikram.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ● QR Generator
                  </a>
                </li>

                <li className="text-white text-md font-bold pb-2">
                  <a
                    href="https://vikram-weather-app.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ● Weather App
                  </a>
                </li>

                <li className="text-white text-md font-bold pb-2">
                  <a
                    href="https://bubble-game-vikram.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ● Bubble Game
                  </a>
                </li>

                <li className="text-white text-md font-bold pb-2">
                  <a
                    href="https://simon-game-by-vikram.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ● Simon Game
                  </a>
                </li>
              </ul>

            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h1 className="text-2xl text-[#F8D091] font-extrabold pb-5 uppercase">
              Follow Us
            </h1>
            <ul className="flex gap-5 pb-3 items-baseline ">
              <li className="text-2xl font-bold">
                <a
                  href="https://www.linkedin.com/in/vikrampal07/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin hover:scale-110 text-white transition duration-700 ease-in-out"></i>
                </a>
              </li>
              <li className="text-2xl font-bold">
                <a
                  href="https://x.com/VikramPal038"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-x-twitter hover:scale-110 text-white transition duration-700 ease-in-out"></i>
                </a>
              </li>
              <li className="text-[27px] font-bold">
                <a
                  href="https://web.telegram.org/k/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-telegram hover:scale-110 text-white transition duration-700 ease-in-out"></i>
                </a>
              </li>
            </ul>

            <h3 className="text-2xl text-white font-bold pb-5">Payments</h3>
            <img src={Payment_Img} alt="payment img" className="w-60" />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center text-white text-lg font-bold">
            © 2024{" "}
            <span className="underline decoration-2">
              CodeNap Café by Vikram Pal.
            </span>{" "}
            All rights reserved.
          </p>
          <p
            className="cursor-pointer text-white text-xl font-bold mt-3 md:mt-0 bg-[#E4594D] py-2 hover:bg-[#abaaaa] hover:text-gray-800 px-4 rounded-xl hover:scale-105 transition duration-700 ease-in-out"
            onClick={handleGoTop}
          >
            <i className="fa-solid fa-jet-fighter-up  text-center "></i>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
