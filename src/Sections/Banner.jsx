import React from "react";
import "../styles/Banner.css";
import AjaxLogo from '../assets/Ajax-logo.svg'

const Banner = () => {
  return (
    <>
      <div className="bann-txt md:px-10 px-5 bg-cover bg-center">
        <img src={AjaxLogo} alt="" className="pt-25"/>
        <div className="bann-text-next relative top-1/3">
          <h1 className="text-white md:text-5xl text-4xl md:w-1/2 w-full">
            Batching Plant: <strong>The Future of Construction</strong>
          </h1>
          <p className="text-white md:text-[18px] text-[16px] py-5 md:w-1/3">
            Enhance your cement production capabilities with our
            precision-engineered machines
          </p>
          <div className="header-btn flex justify-start md:gap-8 gap-4 flex-wrap py-2">
            <a href="#Contact">
              <div className="btn-2 border-2 border-white bg-white text-black w-fit px-10 md:py-2 py-3 rounded-3xl hover:bg-[#020741] hover:border-0 hover:text-white font-semibold">
                Connect with us
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
