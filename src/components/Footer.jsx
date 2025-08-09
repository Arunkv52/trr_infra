import React from "react";
import Logo from "../assets/trrinfra-logo.jpg";

const Footer = () => {
  return (
    <>
      <footer className="text-white md:px-20 py-15 bg-[#030436]">
        <div className="md:px-5 px-5 md:flex justify-between">
          <div className="footer-logo">
            <img src={Logo} alt="Logo" className="md:w-[200px] w-[180px]" />
            <p className="text-[18px] text-left pt-5">
              <strong>Register Office Location</strong>
            </p>
            <ul className="gap-5 flex-wrap py-2">
              <li className="pb-3">
                <a href="">
                  New No.5, 1st Cross Street, Seethammal Extn,
                  <br /> Teynampet, Chennai -600 018
                </a>
              </li>
              <li>
                <a href="tel:044-24343828">Phone : 044-24343828</a>
              </li>
              <li><a href="tel:91769173458">Mobile : +91 91769 173458</a></li>
              <li>
                <a href="mailto:info@trrinfra.in">Mail : info@trrinfra.in</a>
              </li>
              <li>
                <a href="https://www.trrgroup.in/">Website : www.trrgroup.in</a>
              </li>
            </ul>
          </div>
          <div className="footer-row-1 text-left md:py-0 py-5">
            <p className="text-[20px]">
              <strong>Quick Links</strong>
            </p>
            <ul className="py-3 underline ">
              <li className="pt-1">
                <a href="#About">About</a>
              </li>
              <li className="pt-1">
                <a href="#Specifications">Specifications</a>
              </li>
              <li className="pt-1">
                <a href="#Gallery">Gallery</a>
              </li>
              <li className="pt-1">
                <a href="#Products">Products</a>
              </li>
              <li className="pt-1">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-row-2 text-left">
            <p className="text-[20px]">
              <strong>Our Branches</strong>
            </p>
            <ul className="py-3 underline">
              <li className="pt-1">
                <a href="">Acharapakkam</a>
              </li>
              <li className="pt-1">
                <a href="">Virudhachalam</a>
              </li>
              <li className="pt-1">
                <a href="">Cuddalore</a>
              </li>
              <li className="pt-1">
                <a href="">Chidambaram</a>
              </li>
              <li className="pt-1">
                <a href="">Tirukalukundram</a>
              </li>
              <li className="pt-1">
                <a href="">Kanchipuram</a>
              </li>
              <li className="pt-1">
                <a href="">Uthiramerur</a>
              </li>
              <li className="pt-1">
                <a href="">Pavunjur</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-row-4 pt-5 md:px-5 px-5">
          <p className="text-left text-[13px]">
            © 2025 Reserved by TRR Group. Developed by{" "}
            <span className="text-red-500">
              <a href="https://www.prismadverto.com/">Prism Adverto Pvt Ltd</a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
