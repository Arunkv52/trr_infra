import React from "react";
import BannerImg from "../assets/banner-2.jpg";

const Products = () => {
  return (
    <>
      <div className="products text-white">
        <div className="bg-txt bg-[#030436] w-fit md:px-10 md:py-20 md:flex justify-between">
          <div className="prod-txt py-10 md:px-0 px-5 md:w-1/3">
            <h2 className="md:text-3xl text-[24px] pb-5">
              Transit Mixer: Revolutionising Construction Dynamics
            </h2>
            <p className="pb-5">
              Discover our range of transport machines tailored for concrete
              construction projects. Our selection ensures reliable and
              efficient concrete transport from low-maintenance machinery to
              heavy-duty vehicles. With high-capacity trucks and durable
              equipment, your concrete logistics are in safe hands for
              large-scale projects.
            </p>
            <div className="btn-2 border-2 border-white bg-white text-black w-fit px-10 md:py-2 py-3 rounded-3xl hover:bg-[#020741] hover:border-0 hover:text-white font-light md:relative md:top-1/2">
              <a href="#">Start Expressing Yourself</a>
            </div>
          </div>
          <div className="prod-img md:w-2/3 p-5">
            <img src={BannerImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
