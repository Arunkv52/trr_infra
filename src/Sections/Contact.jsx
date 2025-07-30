import React from "react";

const Contact = () => {
  return (
    <>
      <div className="md:flex justify-content-center items-start">
        <div className="contact-text py-20 md:px-10 px-5 md:w-1/2 w-full">
          <h2 className="md:text-4xl font-semibold text-3xl">
            Building India with Next-Gen 360°{" "}
            <span className="font-light">Concrete Solutions </span>
          </h2>
          <p className="py-4">
            <strong>AJAX:</strong> The Global Leader in SLCM with Over 25,000 Deliveries
            Worldwide. Trust Our Expertise to Elevate Your Projects.
          </p>
        </div>
        <div className="contact-text py-20 md:px-10 px-5 w-full">
          <div className="full-contain md:pb-10 pb-0">
            <div className="form-contact md:px-5 px-5 w-full">
              <form action="" method="get" className="flex flex-col gap-3">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter Your Name"
                  className="bg-black/20 p-3 outline-none"
                />
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id=""
                  className="bg-black/20 p-3 outline-none"
                />
                <label htmlFor="tel"></label>
                <input
                  type="email"
                  name="tel"
                  placeholder="Enter your email"
                  id=""
                  className="bg-black/20 p-3 outline-none"
                />
                <label htmlFor="comments"></label>
                <textarea
                  name="textarea"
                  id=""
                  cols="5"
                  rows="5"
                  className="bg-black/20 p-3 outline-none"
                  placeholder="Comments"
                ></textarea>
                {/* Here add a Recaptacha */}
                <button
                  type="submit"
                  className="bg-[#ff0000] hover:bg-blue-900 text-white font-bold py-5 cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
