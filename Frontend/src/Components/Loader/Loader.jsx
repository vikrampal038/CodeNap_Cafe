import React from 'react';
import LoaderImg from "../../assets/cover-img/loaderImg.png";

const Loader = () => {
  return (
    <div className=" bg-[#76482e] fixed inset-0 flex justify-center items-center z-50 ">
      <img src={LoaderImg } alt="Coffee Logo" className="w-100 h-100 animate-bounce transition duration-1000 ease-in-out" />
    </div>
  );
};

export default Loader;
