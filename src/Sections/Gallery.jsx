import React from "react";
import MyCarousal from "../components/MyCarousal";
import Gal_1 from "../assets/gal-1.webp";
import Gal_2 from "../assets/gal-2.webp";
import Gal_3 from "../assets/gal-3.webp";

const Gallery = () => {
  return (
    <>
      <div className="gallery md:px-10 px-5 py-10">
        <div className="gal-txt md:w-5/6 w-full">
          <h2 className="font-bold text-2xl pb-4">Specifications</h2>
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
        <div className="my-carousal py-10 md:px-20 px-0">
          <h5 className="md:text-[40px] text-[25px] text-center py-5 font-semibold">
            REVOLUTIONISING CONSTRUCTION DYNAMICS
          </h5>
          <MyCarousal />
        </div>
      </div>
    </>
  );
};

export default Gallery;
