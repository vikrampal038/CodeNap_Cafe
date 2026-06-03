import React, { useEffect, useState } from 'react';
import LoaderImg from "../../assets/cover-img/loaderImg.png";

const Loader = () => {
  const [isBypassed, setIsBypassed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isBypassSearch = window.location.search.includes("bypass-preloader");
      if (navigator.webdriver || isBypassSearch) {
        setIsBypassed(true);
      }
    }
  }, []);

  if (isBypassed) return null;

  return (
    <div className=" bg-[#8C6239] fixed inset-0 flex justify-center items-center z-50 ">
      <img src={LoaderImg } alt="Coffee Logo" className="w-100 h-100 animate-bounce transition duration-1000 ease-in-out" />
    </div>
  );
};

export default Loader;
