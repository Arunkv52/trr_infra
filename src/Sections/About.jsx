import React from "react";

const About = () => {
  return (
    <>
      <div className="abt-section md:px-10 px-5 md:py-10 py-3" id="About">
        <div className="abt-txt py-10">
          <p className="font-semibold md:py-1 py-0">ABOUT TRR INFRA</p>
          <p>
            TRR Infra, part of the TRR Group, has been providing construction,
            quarry, and earthmoving equipment since 2007. With over 10 years of
            experience and a strong partnership with JCB, a global leader in
            construction machinery, TRR Infra is ready to support India’s
            growing infrastructure needs.
          </p>
          <p>
            We offer a one-stop solution — from helping customers choose the
            right equipment to providing reliable after-sales service. Our
            machines are used in construction, road laying, and quarry projects
            across Tamil Nadu.
          </p>
          <p>
            With a focus on customer satisfaction and quality service, TRR Infra
            aims to be a market leader in infrastructure development and proudly
            supports the mission of building the India of tomorrow.
          </p>
        </div>
        <div className="abt-prod">
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

export default About;
