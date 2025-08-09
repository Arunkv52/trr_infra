import React from "react";
import MyCarousal from "../components/MyCarousal";
import Gal_1 from "../assets/gal-1.webp";
import Gal_2 from "../assets/gal-2.webp";
import Gal_3 from "../assets/gal-3.webp";

const Gallery = () => {
  return (
    <>
      <div className="gallery md:px-10 px-5 py-10">
        <div className="gal-txt md:w-5/6 w-full" id="Specifications">
          <h2 className="font-bold text-2xl pb-4 uppercase">Specifications</h2>
        </div>
        <div className="box-3-img md:flex justify-between items-top gap-5 md:py-5">
          <div className="box-1 py-6">
            <img src={Gal_2} alt="" />
            <h5 className="pt-5 text-[18px] font-semibold">
              Pressurised water tank
            </h5>
            <p className="py-2">
              Reduces the chances of leakages from water tank.
            </p>
          </div>
          <div className="box-1 py-6">
            <img src={Gal_1} alt="" />
            <h5 className="pt-5 text-[18px] font-semibold">Extension Chutes</h5>
            <p className="py-2">
              Steel extension Chutes with wear protection liner in the concrete
              sliding area.
            </p>
          </div>
          <div className="box-1 py-6">
            <img src={Gal_3} alt="" />
            <h5 className="pt-5 text-[18px] font-semibold">
              Drum Design
            </h5>
            <p className="py-2">
              Optimized spiral position with anti-wear protection made from high
              strength steel for extended service life. Unique drum design made
              from highly durable steel.
            </p>
          </div>
        </div>
         <div className="my-carousal py-10 md:px-20 px-0" id="Gallery">
          <h5 className="md:text-[40px] text-[25px] md:text-center text-left py-5 font-semibold">
            REVOLUTIONISING CONSTRUCTION DYNAMICS
          </h5>
          <MyCarousal />
        </div>
         <div className="abt-prod md:py-20">
          <p className="font-semibold">REVOLUTIONISING CONSTRUCTION DYNAMICS</p>
          <h5 className="text-[20px] font-bold">Transit Mixer</h5>
          <div className="box-3 md:flex justify-between items-start py-5 gap-3">
            <div className="bx-1 py-6 px-4 border-1 border-[#d3d3d3] rounded-2xl md:m-0 m-2">
              <p className="pb-4">AF 6XE</p>
              <h6 className="font-semibold text-[18px]">
                A powerhouse in concrete transportation. With modern technology
                and robust design, it ensures the smooth and efficient delivery
                of concrete on every project.
              </h6>
            </div>
            <div className="bx-1 py-6 px-4 border-1 border-[#d3d3d3] rounded-2xl md:m-0 m-2">
              <p className="pb-4">AF 7XE</p>
              <h6 className="font-semibold text-[18px]">
                Elevate your concrete logistics with the AF 7XE Transit Mixer
                from AJAX. It combines advanced features with AJAX reliability,
                ensuring precision and performance in every concrete delivery.
              </h6>
            </div>
            <div className="bx-1 py-6 px-4 border-1 border-[#d3d3d3] rounded-2xl md:m-0 m-2">
              <p className="pb-4">AF 8XE</p>
              <h6 className="font-semibold text-[18px]">
                The AF 8XE Transit Mixer by AJAX is your partner in concrete
                delivery excellence. Robust, efficient, and designed for the
                toughest jobs, it sets the standard for transit mixers in the
                construction industry.
              </h6>
            </div>
            <div className="bx-1 py-6 px-4 border-1 border-[#d3d3d3] rounded-2xl md:m-0 m-2">
              <p className="pb-4">AF 10XP</p>
              <h6 className="font-semibold text-[18px]">
                A heavyweight performer in concrete transportation. With a focus
                on efficiency and durability, it's the ideal choice for
                high-demand concrete projects.
              </h6>
            </div>
          </div>
        </div>
       
      </div>
      
    </>
  );
};

export default Gallery;
