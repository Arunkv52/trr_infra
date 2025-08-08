import React, { useState } from "react";
import Logo from "../assets/trrinfra-logo.jpg";
import { MdOutlineMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white/80 shadow-md fixed top-0 left-0 w-full z-50 md:px-5 px-5 overflow-x-hidden">
      <div className="flex justify-between items-center py-3">
        <div className="head md:w-[190px] w-[130px]">
          <a href="#">
          <img src={Logo} alt="logo" className="w-full" />
          </a>
        </div>

        <div className="head-list hidden md:block">
          <ul className="flex gap-6 text-black font-semibold text-[17px]">
            {[
              { name: "About", link: "#About" },
              { name: "Specifications", link: "#Specifications" },
              { name: "Gallery", link: "#Gallery" },
              { name: "Products", link: "#Products" },
              { name: "Contact", link: "#Contact" },
            ].map((item, index) => (
              <li key={index} className="hover:underline hover:text-blue-700">
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <MdClose size={24} /> : <MdOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className=" md:hidden py-4">
          <ul className="flex flex-col gap-4 text-gray-800 font-medium">
             {[
              { name: "About", link: "#About" },
              { name: "Specifications", link: "#Specifications" },
              { name: "Gallery", link: "#Gallery" },
              { name: "Products", link: "#Products" },
              { name: "Contact", link: "#Contact" },
            ].map((item, index) => (
              <li key={index} className="hover:underline hover:text-blue-700">
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
